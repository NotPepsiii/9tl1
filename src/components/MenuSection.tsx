import React, { useState, useMemo } from "react";
import { Search, Info, Flame, Sparkles } from "lucide-react";
import { categories } from "../data";
import { MenuItem } from "../types";

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

const ALLERGEN_LIST = [
  { key: "Gluten", label: "Gluten-Free", description: "Filter out items containing Gluten" },
  { key: "Milk", label: "Dairy-Free", description: "Filter out items containing Milk/Dairy" },
  { key: "Celery", label: "Celery-Free", description: "Filter out items containing Celery" },
  { key: "Mustard", label: "Mustard-Free", description: "Filter out items containing Mustard" }
];

export default function MenuSection({ onSelectItem }: MenuSectionProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [avoidAllergens, setAvoidAllergens] = useState<string[]>([]);
  const [showAllergenFilter, setShowAllergenFilter] = useState(false);

  const toggleAllergen = (allergen: string) => {
    setAvoidAllergens(prev =>
      prev.includes(allergen)
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  // Filter items dynamically based on category, search, and allergens
  const filteredCategories = useMemo(() => {
    return categories
      .map(category => {
        // If "all" is not chosen, and this is not the selected category, skip items
        if (selectedCategoryId !== "all" && category.id !== selectedCategoryId) {
          return { ...category, items: [] };
        }

        const matchingItems = category.items.filter(item => {
          // 1. Search Query Match
          const matchesSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
            category.name.toLowerCase().includes(searchQuery.toLowerCase());

          if (!matchesSearch) return false;

          // 2. Allergen avoidance filter
          // if user wants to AVOID Gluten, and item has Gluten, filter it out
          if (avoidAllergens.length > 0 && item.allergens) {
            const containsAvoidedAllergen = item.allergens.some(a => avoidAllergens.includes(a));
            if (containsAvoidedAllergen) return false;
          }

          return true;
        });

        return {
          ...category,
          items: matchingItems
        };
      })
      .filter(category => category.items.length > 0);
  }, [selectedCategoryId, searchQuery, avoidAllergens]);

  // Quick Stats
  const totalDisplayItems = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <section className="w-full text-slate-100" id="interactive-menu-board">
      {/* Filters Hub with sticky placement */}
      <div className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-30 shadow-lg">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Elegant Search Panel */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-500 pointer-events-none">
                <Search className="w-5 h-5 text-slate-500" />
              </span>
              <input
                type="text"
                placeholder="Search chips, burgers, kebabs, meal deals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 text-slate-200 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-white text-xs font-mono font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Diet & Allergen Toggle */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setShowAllergenFilter(!showAllergenFilter)}
                className={`py-2 px-3.5 rounded-xl border text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-all ${
                  showAllergenFilter || avoidAllergens.length > 0
                    ? "bg-amber-500 text-slate-950 border-amber-500 font-bold"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                <span>Dietary Rules</span>
                {avoidAllergens.length > 0 && (
                  <span className="bg-slate-900 text-amber-400 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-black font-mono">
                    {avoidAllergens.length}
                  </span>
                )}
              </button>

              {/* Selection Summary */}
              {avoidAllergens.length > 0 && (
                <button
                  onClick={() => setAvoidAllergens([])}
                  className="text-xs text-slate-500 hover:text-rose-400 font-mono transition-all underline shrink-0"
                >
                  Reset diet
                </button>
              )}
            </div>
          </div>

          {/* Collapsible Allergen Buttons Bar */}
          {(showAllergenFilter || avoidAllergens.length > 0) && (
            <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl space-y-2 animate-fade-in">
              <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>Avoid designated allergens. Highlighted active tags will exclude matching menu choices:</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 font-mono">
                {ALLERGEN_LIST.map((item) => {
                  const isActive = avoidAllergens.includes(item.key);
                  return (
                    <button
                      key={item.key}
                      onClick={() => toggleAllergen(item.key)}
                      className={`text-xs py-1.5 px-3 rounded-lg border transition-all flex items-center gap-1.5 ${
                        isActive
                          ? "bg-rose-500/20 border-rose-500 text-rose-400 font-bold"
                          : "bg-slate-900 border-slate-850 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                      title={item.description}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="text-[10px] bg-rose-500 text-white px-1 font-black rounded">X</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Snap Horizontal Slicing Categories list */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none font-display">
            <button
              onClick={() => setSelectedCategoryId("all")}
              className={`py-2 px-4 rounded-lg font-semibold text-xs uppercase tracking-wider shrink-0 transition-all ${
                selectedCategoryId === "all"
                  ? "bg-amber-500 text-slate-950 font-bold"
                  : "bg-slate-950 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-705"
              }`}
            >
              Full Menu
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`py-2 px-4 rounded-lg font-semibold text-xs uppercase tracking-wider shrink-0 transition-all ${
                  selectedCategoryId === cat.id
                    ? "bg-amber-500 text-slate-950 font-bold"
                    : "bg-slate-950 border border-slate-850 text-slate-400 hover:text-white hover:border-slate-705"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid display area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {totalDisplayItems === 0 ? (
          /* Empty State Search */
          <div className="py-16 text-center text-slate-500 space-y-3">
            <Search className="w-12 h-12 stroke-1 mx-auto text-slate-600 animate-pulse" />
            <h4 className="text-lg font-bold font-display text-slate-400">No matching items found</h4>
            <p className="text-xs max-w-sm mx-auto font-mono">
              We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try clearing your searches or allergy dietary rules!
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setAvoidAllergens([]);
                setSelectedCategoryId("all");
              }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 rounded-lg text-xs font-bold transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Category loop */
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-5" id={`category-${category.id}`}>
                {/* Category title block with visual golden stripe */}
                <div className="flex items-center gap-3 border-b border-slate-850 pb-2">
                  <h2 className="text-xl md:text-2xl font-black font-display tracking-tight text-white uppercase">
                    {category.name}
                  </h2>
                  <div className="h-0.5 bg-amber-500/20 flex-1"></div>
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    {category.items.length} choice{category.items.length > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Sub-grid of items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item) => {
                    const isTikTokViral = item.id === "stonner-kebab";
                    return (
                      <div
                        key={item.id}
                        className={`bg-slate-900 border rounded-xl p-4 flex flex-col justify-between transition-all group overflow-hidden ${
                          item.outOfStock
                            ? "border-slate-900 opacity-50"
                            : "border-slate-850 hover:border-amber-500/40 hover:shadow-lg hover:bg-slate-850"
                        }`}
                      >
                        <div className="space-y-2 relative">
                          {/* Top row */}
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-extrabold text-sm md:text-base text-white group-hover:text-amber-400 transition-colors">
                              {item.name}
                            </h4>
                            <span className="font-mono text-amber-400 font-bold text-sm bg-slate-950/40 px-2 py-0.5 border border-slate-800 rounded">
                              €{item.price.toFixed(2)}
                            </span>
                          </div>

                          {/* TikTok viral badge or specials */}
                          {isTikTokViral && (
                            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-rose-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider animate-pulse">
                              <Flame className="w-3 h-3 fill-white" />
                              TikTok Viral
                            </span>
                          )}

                          {item.id.includes("special") && (
                            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-400 text-[10px] font-bold uppercase px-2 py-0.5 rounded tracking-wide font-mono">
                              <Sparkles className="w-3 h-3" />
                              Staff Pick
                            </span>
                          )}

                          {/* Ingredient Descriptions */}
                          {item.description && (
                            <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Bottom action bar */}
                        <div className="flex items-center justify-between pt-4 mt-3 border-t border-slate-850 group-hover:border-slate-700 transition-colors">
                          {/* Allergen small badge representation */}
                          <div className="flex gap-1 overflow-hidden">
                            {item.allergens ? (
                              item.allergens.map(a => (
                                <span
                                  key={a}
                                  className="text-[9px] bg-slate-950 text-slate-500 px-1.5 py-0.5 border border-slate-850 rounded font-mono uppercase"
                                  title={`Contains ${a}`}
                                >
                                  {a.slice(0, 3)}
                                </span>
                              ))
                            ) : (
                              <span className="text-[9px] text-slate-600 font-mono tracking-tight uppercase">No Allergens</span>
                            )}
                          </div>

                          {/* Trigger addition */}
                          {item.outOfStock ? (
                            <span className="text-xs font-mono font-bold text-slate-600 uppercase">
                              Out of Stock
                            </span>
                          ) : (
                            <button
                              onClick={() => onSelectItem(item)}
                              type="button"
                              className="text-xs bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950/90 font-bold px-3.5 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                            >
                              <span>Order</span>
                              <span className="font-semibold">+</span>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
