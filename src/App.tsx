/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import ItemModal from "./components/ItemModal";
import CartPanel from "./components/CartPanel";
import ReviewsSection from "./components/ReviewsSection";
import { MenuItem, CartItem } from "./types";
import { ShoppingBag, ChevronUp, AlertCircle, HelpCircle, Flame, Heart } from "lucide-react";
import { contacts } from "./data";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Save state in localStorage so customers don't lose items when reloading!
    try {
      const saved = localStorage.getItem("chipper_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [showDrsFaq, setShowDrsFaq] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("chipper_cart", JSON.stringify(cart));
  }, [cart]);

  // Handle addition of custom items into cart
  const handleAddToCart = (newCartItem: CartItem) => {
    setCart(prevCart => {
      // Check if item already exists with exact same id AND exact same customizable notes (sauces details, etc.)
      const existingIndex = prevCart.findIndex(
        item =>
          item.menuItem.id === newCartItem.menuItem.id &&
          item.menuItem.notes === newCartItem.menuItem.notes &&
          item.specialInstructions === newCartItem.specialInstructions
      );

      if (existingIndex > -1) {
        // Increment quantity of existing
        const updated = [...prevCart];
        updated[existingIndex].quantity += newCartItem.quantity;
        return updated;
      } else {
        // Add new item
        return [...prevCart, newCartItem];
      }
    });

    // Notify user with elegant mini banner, or auto-open mobile bag
    if (window.innerWidth < 1024) {
      setIsMobileCartOpen(true);
    }
  };

  const handleUpdateQuantity = (id: string, amount: number) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.id === id) {
            const nextQty = item.quantity + amount;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter(item => item.quantity > 0);
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your shopping bag?")) {
      setCart([]);
    }
  };

  // Cart math summary
  const totalCartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Dynamic Header */}
      <Header />

      {/* Main Board Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Menu System Block (Takes 2/3 column layout on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold tracking-widest text-amber-500 font-mono uppercase">
                  Browse Menu & Order
                </h3>
                <p className="text-slate-450 text-xs">
                  All food cooked fresh to order by Clondalkin&apos;s best family-owned chipper.
                </p>
              </div>
              
              {/* Micro interactive indicator */}
              <button 
                onClick={() => setShowDrsFaq(true)}
                className="hidden md:flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono text-slate-500 hover:text-amber-500 transition-colors border border-slate-850 px-2.5 py-1.5 rounded-lg"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>What is DRS deposit?</span>
              </button>
            </div>

            {/* Core Interactive food grids */}
            <MenuSection onSelectItem={(item) => setSelectedItem(item)} />
          </div>

          {/* Sticky checkout order box (Takes 1/3 column layout on desktop) */}
          <div className="lg:col-span-1 lg:sticky lg:top-28">
            <CartPanel
              cart={cart}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
              isOpenOnMobile={isMobileCartOpen}
              onCloseMobile={() => setIsMobileCartOpen(false)}
            />
          </div>

        </div>
      </main>

      {/* Community Google Feedback Carousel */}
      <div className="bg-slate-950">
        <ReviewsSection />
      </div>

      {/* Frequently Asked Questions Modal (DRS, etc.) */}
      {showDrsFaq && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 max-w-lg w-full rounded-xl p-6 shadow-2xl relative text-slate-200 animate-fade-in">
            <h4 className="text-lg font-bold font-display text-amber-400 mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              Deposit Return Scheme (DRS) FAQ
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              In Ireland, the Deposit Return Scheme (DRS) raises the cost of beverage cans and plastic bottles by €0.15 for 150ml-500ml containers. This goes directly toward cleaner recycling initiatives.
            </p>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-950 p-3 rounded border border-slate-850">
                <strong className="block text-amber-300">How do I get my deposit back?</strong>
                <p className="text-slate-400 mt-0.5">Bring any empty can or bottle showing the Re-turn logo to a reverse-vending machine located standard at supermarkets in Clondalkin/Dublin to receive a full refund voucher!</p>
              </div>
              <div className="bg-slate-950 p-3 rounded border border-slate-850">
                <strong className="block text-amber-300">Does it apply to child drinks?</strong>
                <p className="text-slate-400 mt-0.5">No, Capri Sun foil pouches are exempted and carry no DRS deposit surcharge.</p>
              </div>
            </div>

            <button
              onClick={() => setShowDrsFaq(false)}
              className="mt-6 w-full py-2.5 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 rounded-lg text-sm font-semibold text-center transition-all"
            >
              Understand & Close
            </button>
          </div>
        </div>
      )}

      {/* Multi-step single-item customization Modal popup */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Floating Bottom action button for mobile layout */}
      {totalCartCount > 0 && (
        <button
          onClick={() => setIsMobileCartOpen(true)}
          type="button"
          className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-amber-500 hover:bg-amber-400 text-slate-950 py-3.5 px-6 rounded-full shadow-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 active:scale-95 transition-all z-35 animate-bounce"
        >
          <ShoppingBag className="w-4.5 h-4.5 stroke-[2.5]" />
          <span>View Bag ({totalCartCount}) • €{totalCartPrice.toFixed(2)}</span>
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer Section with Dublin details */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 text-center text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#takeaway-header" className="hover:text-slate-400 transition-colors uppercase font-mono tracking-widest font-semibold">Back to Top</a>
            <span className="text-slate-800">•</span>
            <a href="tel:014573267" className="hover:text-slate-400 transition-colors uppercase font-mono tracking-widest font-semibold">Phone support</a>
            <span className="text-slate-800">•</span>
            <a href="https://www.google.com/maps/place/The+9th+Lough" target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors uppercase font-mono tracking-widest font-semibold">Google Map Location</a>
          </div>

          <div className="max-w-xl mx-auto space-y-2 text-[11px] leading-relaxed">
            <p>
              © {new Date().getFullYear()} The 9th Lough Dublin. Built 100% serverless, zero external dependencies required for high‑speed client‑side loading. Designed with Inter & Space Grotesk.
            </p>
            <p className="text-slate-700 font-mono scale-95 uppercase tracking-wide">
              Registered Takeaway Address: 1 St Patrick&apos;s Rd, Clondalkin, Dublin 22, Co. Dublin, D22 F662, Ireland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
