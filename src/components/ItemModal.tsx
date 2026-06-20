import React, { useState } from "react";
import { X, Plus, Minus, Check, ShoppingBag, AlertCircle } from "lucide-react";
import { MenuItem, CartItem } from "../types";

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

const SAUCE_OPTIONS = [
  "Garlic Sauce",
  "Chilli Sauce (Spicy)",
  "Taco Sauce",
  "Curry Sauce",
  "Kebab Sauce",
  "BBQ Sauce",
  "Mayo",
  "No Sauce"
];

const DRINK_OPTIONS = [
  "Coca-Cola",
  "Diet Coke",
  "Coke Zero",
  "7Up",
  "Fanta Orange",
  "Club Orange (+€0.60 deposit/bottle)",
  "Rock Shandy (+€0.60 deposit/bottle)",
  "Capri Sun"
];

export default function ItemModal({ item, onClose, onAddToCart }: ItemModalProps) {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSauce, setSelectedSauce] = useState<string>("Garlic Sauce");
  const [selectedDrink, setSelectedDrink] = useState<string>("Coca-Cola");
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraBacon, setExtraBacon] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  // Determine item-specific options
  const isMealDeal = item.id.includes("meal") || item.id.includes("deal");
  const isBurger = item.id.includes("burger");
  const isChips = item.id.includes("chip");
  const isKebab = item.id.includes("kebab") || item.id.includes("stonner");

  // Price Calculation with modifications
  let unitPrice = item.price;
  if (extraCheese) unitPrice += 1.00;
  if (extraBacon) unitPrice += 1.50;
  
  // Custom formula if bottled drinks selected inside meal deals
  if (isMealDeal && (selectedDrink.includes("bottle") || selectedDrink.includes("deposit"))) {
    unitPrice += 0.60; // DRS bottle deposit & volume adjustment
  }

  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    // Generate description modifications summary
    let descriptionLine = "";
    if (isMealDeal) {
      descriptionLine += `Drink: ${selectedDrink} • `;
    }
    if (isBurger || isChips || isKebab) {
      descriptionLine += `Sauce: ${selectedSauce} • `;
    }
    if (extraCheese) {
      descriptionLine += `+ Extra Cheese • `;
    }
    if (extraBacon) {
      descriptionLine += `+ Extra Crispy Bacon • `;
    }

    const modifiedItem: MenuItem = {
      ...item,
      // Modify description dynamically for cart printout
      notes: descriptionLine ? descriptionLine.slice(0, -3) : undefined,
      price: unitPrice
    };

    onAddToCart({
      id: `${item.id}-${Date.now()}`,
      menuItem: modifiedItem,
      quantity,
      selectedSauce: isBurger || isChips || isKebab ? selectedSauce : undefined,
      specialInstructions: specialInstructions.trim() || undefined
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Modal Container */}
      <div 
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-fade-in text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        id="item-customization-modal"
      >
        {/* Header section with cover color */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-850 p-6 pb-4 border-b border-slate-800 flex justify-between items-start relative">
          <div>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider block mb-1">
              {isMealDeal ? "Special Deal Upgrade" : "Customize & Add"}
            </span>
            <h3 className="text-2xl font-bold font-display text-white pr-6">
              {item.name}
            </h3>
            <p className="text-2xl font-black text-amber-400 font-mono mt-1.5">
              €{unitPrice.toFixed(2)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-750 rounded-full transition-all duration-200"
            aria-label="Close panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Item description */}
          {item.description && (
            <div className="text-sm bg-slate-950/50 p-3.5 border border-slate-850 rounded-lg text-slate-300 italic">
              &ldquo;{item.description}&rdquo;
            </div>
          )}

          {/* Allergens warning */}
          {item.allergens && item.allergens.length > 0 && (
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs rounded-md">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>
                <strong>Allergen Warning:</strong> Contains {item.allergens.join(", ")}
              </span>
            </div>
          )}

          {/* Sauce choice (Burgers, chips, and Kebabs) */}
          {(isBurger || isChips || isKebab) && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold tracking-wide text-amber-300 font-mono uppercase">
                Select Your Sauce
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SAUCE_OPTIONS.map((sauce) => (
                  <button
                    key={sauce}
                    type="button"
                    onClick={() => setSelectedSauce(sauce)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-sm text-left transition-all ${
                      selectedSauce === sauce
                        ? "bg-amber-500/10 border-amber-500 text-amber-400 font-medium"
                        : "bg-slate-850 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    <span>{sauce}</span>
                    {selectedSauce === sauce && (
                      <Check className="w-4 h-4 text-amber-500 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Upgrade drink for Meal deals */}
          {isMealDeal && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold tracking-wide text-amber-300 font-mono uppercase">
                Choose Your Drink
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DRINK_OPTIONS.map((drink) => {
                  const hasSurcharge = drink.includes("bottle") || drink.includes("deposit");
                  return (
                    <button
                      key={drink}
                      type="button"
                      onClick={() => setSelectedDrink(drink)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-sm text-left transition-all ${
                        selectedDrink === drink
                          ? "bg-amber-500/10 border-amber-500 text-amber-400 font-medium"
                          : "bg-slate-850 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800"
                      }`}
                    >
                      <span className="truncate pr-1">{drink.split(" (")[0]}</span>
                      <div className="flex items-center gap-1.5">
                        {hasSurcharge && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded font-mono font-semibold">
                            +€0.60
                          </span>
                        )}
                        {selectedDrink === drink && (
                          <Check className="w-4 h-4 text-amber-500 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Additional toppings menu for burgers or chips */}
          {(isBurger || isChips) && (
            <div className="space-y-3 pt-2">
              <label className="block text-sm font-semibold tracking-wide text-amber-300 font-mono uppercase">
                Add Premium Extras
              </label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setExtraCheese(!extraCheese)}
                  className={`flex items-center justify-between w-full p-3 rounded-lg border transition-all ${
                    extraCheese
                      ? "bg-amber-500/10 border-amber-500 text-amber-400 font-medium"
                      : "bg-slate-850 border-slate-850 text-slate-350 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-4.5 h-4.5 rounded border border-slate-700 flex items-center justify-center ${extraCheese ? "bg-amber-500 border-amber-500 text-slate-950" : "bg-slate-900"}`}>
                      {extraCheese && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                    <span className="text-sm">Extra Melted Dublin Cheddar</span>
                  </div>
                  <span className="text-sm font-mono text-slate-400 font-bold">+ €1.00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setExtraBacon(!extraBacon)}
                  className={`flex items-center justify-between w-full p-3 rounded-lg border transition-all ${
                    extraBacon
                      ? "bg-amber-500/10 border-amber-500 text-amber-400 font-medium"
                      : "bg-slate-850 border-slate-850 text-slate-350 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-4.5 h-4.5 rounded border border-slate-700 flex items-center justify-center ${extraBacon ? "bg-amber-500 border-amber-500 text-slate-950" : "bg-slate-900"}`}>
                      {extraBacon && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                    <span className="text-sm">Extra Crispy Smoked Bacon Bits</span>
                  </div>
                  <span className="text-sm font-mono text-slate-400 font-bold">+ €1.50</span>
                </button>
              </div>
            </div>
          )}

          {/* Text input for custom details */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold tracking-wide text-slate-300 font-mono uppercase">
              Special Instructions
            </label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. No salt & vinegar on chips, separate sauce, well-done burger patties..."
              maxLength={150}
              rows={2.5}
              className="w-full bg-slate-950 border border-slate-850 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-950 p-6 border-t border-slate-855 flex items-center justify-between gap-4">
          {/* Quantity custom controls */}
          <div className="flex items-center justify-center bg-slate-900 border border-slate-800 rounded-lg py-1.5 px-3">
            <button
              onClick={handleDecrease}
              disabled={quantity <= 1}
              className={`p-1 text-slate-400 hover:text-white transition-all rounded ${quantity <= 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-slate-800"}`}
              aria-label="Decrease"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="w-10 text-center font-bold px-1 font-mono text-base">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-all rounded"
              aria-label="Increase"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Add triggers */}
          <button
            onClick={handleAdd}
            className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 py-3 px-5 rounded-lg text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-amber-500/10 active:scale-98"
          >
            <ShoppingBag className="w-4.5 h-4.5 stroke-[2.5]" />
            <span>Add to bag • €{totalPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
