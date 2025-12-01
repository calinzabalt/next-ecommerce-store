"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCart();

    return (
        <div className="group relative overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.trending && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground">
                        Trending
                    </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-black/40 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                    <Button
                        size="sm"
                        variant="secondary"
                        className="h-9 w-9 p-0"
                        onClick={() => addItem(product)}
                    >
                        <ShoppingBag className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                    </Button>
                    <Button size="sm" variant="secondary" className="h-9 w-9 p-0" asChild>
                        <Link href={`/product/${product.id}`}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View details</span>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold leading-tight">
                    <Link href={`/product/${product.id}`} className="hover:underline">
                        {product.name}
                    </Link>
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">{product.category}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">
                        {formatCurrency(product.price)}
                    </span>
                </div>
            </div>
        </div>
    );
}
