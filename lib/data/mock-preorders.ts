export type PreOrderStatus = "Pending" | "Accepted" | "Declined";
export type PreOrderGender = "Male" | "Female" | "Unisex";
export type PreOrderType = "Palms" | "Shoes";

export interface PreOrder {
  id: string;
  customerName: string;
  contact: string;
  gender: PreOrderGender;
  type: PreOrderType;
  size: number;
  color: string;
  deliveryDate: string;
  imageUrl: string;
  status: PreOrderStatus;
}

export const mockPreOrders: PreOrder[] = [
  {
    id: "ZF-001",
    customerName: "Chukwuemeka Obi",
    contact: "chukwu@email.com",
    gender: "Male",
    type: "Palms",
    size: 43,
    color: "Chocolate",
    deliveryDate: "2025-07-15",
    imageUrl:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=200&q=80",
    status: "Pending",
  },
  {
    id: "ZF-002",
    customerName: "Adaeze Nwosu",
    contact: "+234 803 456 7890",
    gender: "Female",
    type: "Shoes",
    size: 38,
    color: "Tan",
    deliveryDate: "2025-07-20",
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&q=80",
    status: "Accepted",
  },
  {
    id: "ZF-003",
    customerName: "Tunde Bello",
    contact: "tunde.b@gmail.com",
    gender: "Male",
    type: "Shoes",
    size: 44,
    color: "Mahogany",
    deliveryDate: "2025-08-01",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80",
    status: "Declined",
  },
  {
    id: "ZF-004",
    customerName: "Ngozi Eze",
    contact: "ngozi.eze@yahoo.com",
    gender: "Female",
    type: "Palms",
    size: 37,
    color: "Ivory",
    deliveryDate: "2025-07-28",
    imageUrl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200&q=80",
    status: "Pending",
  },
  {
    id: "ZF-005",
    customerName: "Emeka Dike",
    contact: "+234 701 234 5678",
    gender: "Unisex",
    type: "Palms",
    size: 41,
    color: "Sand",
    deliveryDate: "2025-08-10",
    imageUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200&q=80",
    status: "Pending",
  },
  {
    id: "ZF-006",
    customerName: "Chioma Okafor",
    contact: "chioma.ok@email.com",
    gender: "Female",
    type: "Shoes",
    size: 39,
    color: "Tan",
    deliveryDate: "2025-07-18",
    imageUrl:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=200&q=80",
    status: "Accepted",
  },
  {
    id: "ZF-007",
    customerName: "Babatunde Adeyemi",
    contact: "bade@protonmail.com",
    gender: "Male",
    type: "Palms",
    size: 45,
    color: "Chocolate",
    deliveryDate: "2025-08-05",
    imageUrl:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&q=80",
    status: "Pending",
  },
  {
    id: "ZF-008",
    customerName: "Amaka Igwe",
    contact: "+234 802 987 6543",
    gender: "Unisex",
    type: "Shoes",
    size: 40,
    color: "Ivory",
    deliveryDate: "2025-08-20",
    imageUrl:
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=200&q=80",
    status: "Declined",
  },
];
