export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  allergens?: string[];
  outOfStock?: boolean;
  notes?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  tags?: string[];
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedSauce?: string;
  specialInstructions?: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}
