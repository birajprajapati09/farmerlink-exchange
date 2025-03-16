
export type UserRole = "farmer" | "consumer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
  location?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  farmerId: string;
  farmerName: string;
  location: string;
  available: boolean;
  organic: boolean;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
