import React, { useState, useEffect } from "react";
import { Clock, MapPin, Phone, Star, ChevronRight, Map, Heart } from "lucide-react";
import { openingHours, contacts, reviews } from "../data";

export default function Header() {
  const [showHours, setShowHours] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [likesCount, setLikesCount] = useState(() => {
    // Basic local storage persistence for customer engagement
    const saved = localStorage.getItem("chipper_likes_count");
    return saved ? parseInt(saved, 10) : 342;
  });
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem("chipper_has_liked") === "true";
  });

  // Calculate if open (4:30 PM - 10:00 PM)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // To represent Ireland time easily, we use simple Hour checking.
      // Clondalkin, Dublin is usually on GMT/IST.
      const currentHour = now.getHours();
      const currentMin = now.getMinutes();
      const currentTimeInMins = currentHour * 60 + currentMin;

      const openTimeInMins = 16 * 60 + 30; // 4:30 PM is 16:30
      const closeTimeInMins = 22 * 60;     // 10:00 PM is 22:00

      if (currentTimeInMins >= openTimeInMins && currentTimeInMins < closeTimeInMins) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    if (hasLiked) {
      setLikesCount(prev => prev - 1);
      localStorage.setItem("chipper_likes_count", (likesCount - 1).toString());
      localStorage.setItem("chipper_has_liked", "false");
      setHasLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      localStorage.setItem("chipper_likes_count", (likesCount + 1).toString());
      localStorage.setItem("chipper_has_liked", "true");
      setHasLiked(true);
    }
  };

  // Extract primary average rating or reviews total count
  const averageRating = 4.4;
  const reviewCount = 569;

  return (
    <header className="relative w-full bg-slate-950 text-white overflow-hidden" id="takeaway-header">
      {/* Decorative top bar */}
      <div className="bg-amber-500 text-slate-950 py-1.5 px-4 text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
        <span>Irish Traditional Takeaway • Legendary Seafood & Kebabs • Clondalkin</span>
      </div>

      {/* Hero Background Panel */}
      <div className="relative h-72 md:h-96 w-full flex items-end">
        {/* Dynamic Image from assets */}
        <div className="absolute inset-0 w-full h-full">
          {/* Fallback to reliable styled container if assets take microseconds to render, overlay overlaying */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
          <img
            src="/src/assets/images/the_9th_lough_hero_1781913421574.jpg"
            alt="The 9th Lough Dublin Chipper Banner"
            className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Brand Information Frame */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 pb-6 md:pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/90 text-slate-950 text-xs font-black tracking-widest rounded-full uppercase">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              Legendary Chipper
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-white drop-shadow-md">
              The <span className="text-amber-400">9th Lough</span>
            </h1>

            <p className="text-slate-200 text-sm md:text-base max-w-xl font-normal leading-relaxed">
              Serving Clondalkin&apos;s finest freshly‑cooked fish & chips, homemade specialty burgers, and the famous TikTok viral <span className="text-amber-300 font-semibold border-b border-amber-400">Stonner Kebab</span>. Family‑owned and spotless clean.
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs pt-1.5 font-mono">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 border border-slate-800 rounded-md">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-amber-400">{averageRating}</span>
                <span className="text-slate-400">({reviewCount} Google Reviews)</span>
              </div>

              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 border rounded-md transition-all ${
                  hasLiked
                    ? "bg-rose-500/20 border-rose-500 text-rose-400"
                    : "bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850"
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${hasLiked ? "fill-rose-500 text-rose-500 animate-bounce" : ""}`} />
                <span>{likesCount} Loves</span>
              </button>
            </div>
          </div>

          {/* Quick contact / Hours block */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[240px]">
            {/* Dynamic Open Badge */}
            <div className="flex items-center justify-between bg-slate-900/90 p-3 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-2.5">
                <span className={`relative flex h-3 w-3`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? "bg-emerald-400" : "bg-red-400"}`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? "bg-emerald-500" : "bg-red-500"}`}></span>
                </span>
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase tracking-wide">Status</div>
                  <div className={`text-sm font-bold ${isOpen ? "text-emerald-400" : "text-amber-500"}`}>
                    {isOpen ? "OPEN NOW • Till 10pm" : "CLOSED • Opens 4:30pm"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowHours(!showHours)}
                className="text-xs bg-slate-800 hover:bg-amber-500 hover:text-slate-950 px-2.5 py-1.5 rounded transition-all font-semibold font-mono"
              >
                Hours
              </button>
            </div>

            {/* Quick Contact buttons */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
              <a
                href={`tel:${contacts.phone}`}
                className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 py-2.5 px-3 rounded-lg transition-all shadow-md active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Shop</span>
              </a>

              <a
                href={contacts.mapUrl}
                target="_blank"
                rel="no-referrer noreferrer"
                className="flex items-center justify-center gap-1.5 bg-slate-905 hover:bg-slate-800 border border-slate-850 text-white py-2.5 px-3 rounded-lg transition-all"
              >
                <Map className="w-3.5 h-3.5 text-amber-500" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Opening hours overlay popup */}
      {showHours && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 max-w-md w-full rounded-xl p-6 shadow-2xl relative animate-fade-in text-slate-100">
            <h3 className="text-xl font-bold font-display text-amber-400 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              Opening Hours
            </h3>
            
            <div className="divide-y divide-slate-850">
              {openingHours.map((item) => {
                const isToday = new Date().toLocaleDateString('en-US', { weekday: 'long' }) === item.day;
                return (
                  <div key={item.day} className={`flex justify-between items-center py-2.5 text-sm ${isToday ? "bg-amber-500/10 px-2 rounded-md font-semibold text-amber-300" : "text-slate-300"}`}>
                    <span>{item.day}</span>
                    <span className="font-mono">{item.hours}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-slate-400 text-xs mt-4 text-center">
              * Delivery and collection orders accepted during opening hours.
            </p>

            <button
              onClick={() => setShowHours(false)}
              className="mt-6 w-full py-2.5 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 rounded-lg text-sm font-bold transition-all"
            >
              Close Hours
            </button>
          </div>
        </div>
      )}

      {/* Ribbon Address display */}
      <div className="bg-slate-900 border-t border-b border-slate-850 py-3.5 px-4 text-slate-300 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="font-mono">{contacts.addressAddressLine1}, {contacts.addressArea}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="font-semibold text-amber-400">Order Hot‑line: <a href={`tel:${contacts.phone}`} className="underline font-mono ml-1">{contacts.phone}</a></span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="text-slate-300">Fast Local Delivery & Quick Collection Available</span>
          </div>
        </div>
      </div>
    </header>
  );
}
