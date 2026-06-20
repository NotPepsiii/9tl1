import React, { useState, useMemo } from "react";
import { ShoppingBag, Trash2, ShieldAlert, Check, Copy, PhoneCall, Truck, MapPin, Sparkles, X, ChevronRight } from "lucide-react";
import { CartItem } from "../types";
import { contacts } from "../data";

interface CartPanelProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, amount: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  isOpenOnMobile: boolean;
  onCloseMobile: () => void;
}

export default function CartPanel({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  isOpenOnMobile,
  onCloseMobile
}: CartPanelProps) {
  const [orderMethod, setOrderMethod] = useState<"collection" | "delivery">("collection");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryEircode, setDeliveryEircode] = useState("");
  const [expectedTime, setExpectedTime] = useState("As soon as possible");
  const [copied, setCopied] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  // Math Calculations
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  }, [cart]);

  const deliveryFee = orderMethod === "delivery" ? 3.00 : 0;

  // Compute DRS deposit of 15c per can/bottle
  const drsFee = useMemo(() => {
    let count = 0;
    cart.forEach(item => {
      const nameLower = item.menuItem.name.toLowerCase();
      // Look for DRS indicators in prompt's drinks
      if (
        nameLower.includes("can") ||
        nameLower.includes("bottle") ||
        nameLower.includes("fanta") ||
        nameLower.includes("coke") ||
        nameLower.includes("7up") ||
        nameLower.includes("club orange") ||
        nameLower.includes("rock shandy") ||
        nameLower.includes("water")
      ) {
        count += item.quantity;
      }
    });
    return count * 0.15;
  }, [cart]);

  const grandTotal = subtotal + deliveryFee + drsFee;

  // Generate elegant WhatsApp / plain-text order stream
  const orderText = useMemo(() => {
    let text = `☘️ *THE 9TH LOUGH ORDER RECEIPT* ☘️\n`;
    text += `=========================\n`;
    text += `*Order Method:* ${orderMethod.toUpperCase()}\n`;
    text += `*Customer:* ${customerName || "Not specified"}\n`;
    text += `*Phone:* ${customerPhone || "Not specified"}\n`;
    
    if (orderMethod === "delivery") {
      text += `*Address:* ${deliveryAddress || "Not specified"}\n`;
      if (deliveryEircode) text += `*Eircode:* ${deliveryEircode.toUpperCase()}\n`;
    }
    
    text += `*Requested Time:* ${expectedTime}\n`;
    text += `=========================\n\n`;
    text += `*ITEMS:* \n`;

    cart.forEach((item, index) => {
      text += `${index + 1}. ${item.quantity}x _${item.menuItem.name}_ (€${item.menuItem.price.toFixed(2)} each)\n`;
      if (item.menuItem.notes) {
        text += `   ↳ _Custom:_ ${item.menuItem.notes}\n`;
      }
      if (item.specialInstructions) {
        text += `   ↳ _Note:_ "${item.specialInstructions}"\n`;
      }
    });

    text += `\n=========================\n`;
    text += `*Subtotal:* €${subtotal.toFixed(2)}\n`;
    if (drsFee > 0) text += `*DRS Refundable Deposit:* €${drsFee.toFixed(2)}\n`;
    if (deliveryFee > 0) text += `*Delivery Charge:* €${deliveryFee.toFixed(2)}\n`;
    text += `*GRAND TOTAL:* €${grandTotal.toFixed(2)}\n`;
    text += `=========================\n`;
    text += `☎️ _We will call you on ${customerPhone || "your number"} to verify and process payment._\n`;
    text += `Thank you for choosing Clondalkin's Favourite!`;
    return text;
  }, [cart, orderMethod, customerName, customerPhone, deliveryAddress, deliveryEircode, expectedTime, subtotal, drsFee, deliveryFee, grandTotal]);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsApp = () => {
    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/35314573267?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className={`tablet-panel bg-slate-900 border border-slate-850 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 min-h-[400px] ${isOpenOnMobile ? "fixed inset-0 z-40 bg-slate-950/95" : "hidden lg:flex"}`}>
        {isOpenOnMobile && (
          <button onClick={onCloseMobile} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full">
            <X className="w-5 h-5" />
          </button>
        )}
        <div className="p-4 bg-slate-950 border border-slate-850 rounded-full text-slate-600 animate-pulse">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h4 className="font-extrabold font-display text-white text-base">Your Bag is Empty</h4>
          <p className="text-xs text-slate-500 max-w-[200px] mx-auto font-sans leading-relaxed">
            Choose some crispy fish and chips or a Stonner Kebab to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`tablet-panel bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] lg:max-h-none ${isOpenOnMobile ? "fixed inset-0 z-40 bg-slate-950/95" : "hidden lg:flex"}`}>
      
      {/* Panel Header */}
      <div className="bg-slate-950 px-5 py-4 border-b border-slate-850 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-amber-500" />
          <h3 className="font-extrabold font-display text-white text-base uppercase tracking-tight">Your Order Bag</h3>
          <span className="bg-amber-500/10 text-amber-400 font-mono text-[10px] font-black px-2 py-0.5 rounded-full">
            {cart.reduce((s, i) => s + i.quantity, 0)} items
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClearCart}
            className="text-[10px] uppercase font-mono tracking-widest text-slate-500 hover:text-rose-400 border border-slate-850 hover:border-rose-500/20 px-2 py-1 rounded transition-all"
          >
            Clear all
          </button>
          
          {isOpenOnMobile && (
            <button
              onClick={onCloseMobile}
              className="p-1.5 bg-slate-800 text-slate-300 rounded hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Cart Items List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[30vh] lg:max-h-[350px] divide-y divide-slate-850/50">
        {cart.map((item) => (
          <div key={item.id} className="pt-3 first:pt-0 flex items-start justify-between gap-3 group">
            <div className="space-y-1 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-bold text-xs md:text-sm text-slate-100 group-hover:text-amber-400 transition-colors">
                  {item.menuItem.name}
                </span>
                <span className="font-mono text-xs font-bold text-amber-400 shrink-0">
                  €{(item.menuItem.price * item.quantity).toFixed(2)}
                </span>
              </div>

              {/* Dynamic customizations row */}
              {item.menuItem.notes && (
                <p className="text-[10px] text-slate-400 font-mono italic">
                  {item.menuItem.notes}
                </p>
              )}

              {/* Special instructions */}
              {item.specialInstructions && (
                <div className="text-[10px] bg-slate-950 p-1.5 border border-slate-850 rounded text-slate-500 max-w-xs font-mono">
                  &ldquo;{item.specialInstructions}&rdquo;
                </div>
              )}

              {/* Item actions */}
              <div className="flex items-center gap-3 pt-1.5">
                <div className="flex items-center bg-slate-950 rounded py-0.5 px-1.5 border border-slate-850">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="text-xs text-slate-400 hover:text-white px-1"
                  >
                    -
                  </button>
                  <span className="text-xs font-mono font-bold px-2">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="text-xs text-slate-400 hover:text-white px-1"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-[10px] uppercase font-mono text-slate-600 hover:text-rose-400 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout details Form */}
      <div className="bg-slate-950 border-t border-slate-850 p-4 space-y-4 overflow-y-auto max-h-[40vh] lg:max-h-none">
        
        {/* Method Picker */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-900 border border-slate-850 rounded-lg">
          <button
            onClick={() => setOrderMethod("collection")}
            className={`py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
              orderMethod === "collection"
                ? "bg-amber-500 text-slate-950"
                : "bg-transparent text-slate-400 hover:text-white"
            }`}
          >
            Collection
          </button>
          
          <button
            onClick={() => setOrderMethod("delivery")}
            className={`py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-1 ${
              orderMethod === "delivery"
                ? "bg-amber-500 text-slate-950"
                : "bg-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Delivery</span>
          </button>
        </div>

        {/* Form Inputs */}
        <div className="space-y-2.5 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-slate-500 font-mono mb-1 text-[10px] uppercase">Your Name</label>
              <input
                type="text"
                placeholder="Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-slate-500 font-mono mb-1 text-[10px] uppercase">Irish Phone No.</label>
              <input
                type="tel"
                placeholder="e.g. 0871234567"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {orderMethod === "delivery" ? (
            <div className="space-y-2 animate-fade-in">
              <div>
                <label className="block text-slate-500 font-mono mb-1 text-[10px] uppercase">Delivery Address (Clondalkin Local)</label>
                <input
                  type="text"
                  placeholder="e.g. 12 Millpark, Clondalkin"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-slate-500 font-mono mb-1 text-[10px] uppercase">Eircode (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. D22 X000"
                  maxLength={8}
                  value={deliveryEircode}
                  onChange={(e) => setDeliveryEircode(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-slate-200 focus:outline-none focus:border-amber-500 uppercase"
                />
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <label className="block text-slate-500 font-mono mb-1 text-[10px] uppercase">Pick-up Time Slot</label>
              <select
                value={expectedTime}
                onChange={(e) => setExpectedTime(e.target.value)}
                className="w-full bg-slate-900 border border-slate-850 rounded p-2 text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="As soon as possible">As soon as possible (15-20 mins)</option>
                <option value="In 30 minutes">In 30 minutes</option>
                <option value="In 45 minutes">In 45 minutes</option>
                <option value="In 1 hour">In 1 hour</option>
              </select>
            </div>
          )}
        </div>

        {/* Pricing Subtotals */}
        <div className="space-y-1.5 border-t border-b border-slate-85/50 py-3 text-xs font-mono">
          <div className="flex justify-between text-slate-400">
            <span>Subtotal</span>
            <span className="text-slate-200">€{subtotal.toFixed(2)}</span>
          </div>

          {drsFee > 0 && (
            <div className="flex justify-between text-slate-400">
              <span className="flex items-center gap-1 text-[10px]" title="Reposit levy of 15c per beverage can/bottle returned for refund.">
                DRS Deposit Levy
              </span>
              <span className="text-slate-205">€{drsFee.toFixed(2)}</span>
            </div>
          )}

          {orderMethod === "delivery" && (
            <div className="flex justify-between text-rose-400">
              <span>Local Delivery Fee</span>
              <span>€3.00</span>
            </div>
          )}

          <div className="flex justify-between text-white font-extrabold text-sm pt-2">
            <span className="text-amber-400 font-sans uppercase font-black">Estimated Total</span>
            <span>€{grandTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout action block */}
        <div className="space-y-2">
          {/* Missing fields alert guard */}
          {(!customerName || !customerPhone || (orderMethod === "delivery" && !deliveryAddress)) && (
            <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] rounded flex gap-1.5">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Please enter your <strong>Name</strong>, <strong>Phone Number</strong>, and <strong>Address</strong> to submit details successfully.</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-2">
            {/* Copy order button */}
            <button
              onClick={handleCopy}
              disabled={!customerName || !customerPhone || (orderMethod === "delivery" && !deliveryAddress)}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-755 border border-slate-700 hover:border-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center justify-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? "Copied Receipt!" : "Copy Order Receipt"}</span>
            </button>

            {/* Submit order button */}
            <button
              onClick={handleWhatsApp}
              disabled={!customerName || !customerPhone || (orderMethod === "delivery" && !deliveryAddress)}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Send Order via WhatsApp</span>
            </button>
          </div>

          {/* Quick Telephone Dial fallback */}
          <div className="text-center pt-1">
            <a
              href={`tel:${contacts.phone}`}
              className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-400 hover:text-amber-300 hover:underline transition-all"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>Or Phone in Directly: {contacts.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
