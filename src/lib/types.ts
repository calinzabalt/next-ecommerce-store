export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
    featured?: boolean;
    trending?: boolean;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    slug: string;
}

export interface Category {
    id: string;
    name: string;
    imageUrl: string;
    slug: string;
}
