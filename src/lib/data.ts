import { Product, Category, BlogPost } from "./types";

export const categories: Category[] = [
    {
        id: "1",
        name: "Electronics",
        imageUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
        slug: "electronics",
    },
    {
        id: "2",
        name: "Fashion",
        imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800",
        slug: "fashion",
    },
    {
        id: "3",
        name: "Home & Living",
        imageUrl: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=800",
        slug: "home-living",
    },
    {
        id: "4",
        name: "Accessories",
        imageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
        slug: "accessories",
    },
];

export const products: Product[] = [
    {
        id: "1",
        name: "Premium Wireless Headphones",
        description: "Experience crystal clear sound with our premium wireless headphones. Featuring noise cancellation and 30-hour battery life.",
        price: 299.99,
        category: "Electronics",
        images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"],
        featured: true,
        trending: true,
    },
    {
        id: "2",
        name: "Minimalist Watch",
        description: "A timeless classic. This minimalist watch features a genuine leather strap and a durable stainless steel case.",
        price: 149.50,
        category: "Accessories",
        images: ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800"],
        trending: true,
    },
    {
        id: "3",
        name: "Smart Speaker",
        description: "Control your home with your voice. High-fidelity sound meets smart assistant technology.",
        price: 99.00,
        category: "Electronics",
        images: ["https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=800"],
    },
    {
        id: "4",
        name: "Designer Backpack",
        description: "Stylish and functional. Perfect for your daily commute or weekend getaways.",
        price: 120.00,
        category: "Fashion",
        images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"],
        featured: true,
    },
    {
        id: "5",
        name: "Modern Desk Lamp",
        description: "Illuminate your workspace with this sleek, adjustable desk lamp. LED technology for energy efficiency.",
        price: 45.00,
        category: "Home & Living",
        images: ["https://images.unsplash.com/photo-1507473888900-52e1adad5420?auto=format&fit=crop&q=80&w=800"],
    },
    {
        id: "6",
        name: "Running Shoes",
        description: "Hit the ground running with these lightweight, high-performance running shoes.",
        price: 89.99,
        category: "Fashion",
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"],
        trending: true,
    },
];

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Smart Home Technology",
        excerpt: "Discover how smart devices are transforming the way we live and interact with our homes.",
        date: "Oct 15, 2023",
        imageUrl: "https://images.unsplash.com/photo-1558002038-10917738179d?auto=format&fit=crop&q=80&w=800",
        slug: "future-smart-home",
    },
    {
        id: "2",
        title: "Minimalism in Fashion: Less is More",
        excerpt: "Explore the rising trend of minimalism in the fashion industry and how to build a capsule wardrobe.",
        date: "Oct 22, 2023",
        imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
        slug: "minimalism-fashion",
    },
    {
        id: "3",
        title: "Top 10 Gadgets for 2024",
        excerpt: "A look ahead at the most anticipated tech gadgets releasing in the coming year.",
        date: "Nov 05, 2023",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        slug: "top-gadgets-2024",
    },
];
