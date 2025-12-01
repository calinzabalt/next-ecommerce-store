"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";
import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ui/ProductCard";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const product = products.find((p) => p.id === id);
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem(product);
        }
    };

    return (
        <div className="container py-12">
            <div className="grid gap-12 lg:grid-cols-2">
                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                >
                    <div className="relative aspect-square overflow-hidden rounded-xl border bg-secondary">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Thumbnail gallery would go here if we had multiple images */}
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <Link
                                href={`/shop?category=${product.category.toLowerCase().replace(/ /g, "-")}`}
                                className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline"
                            >
                                {product.category}
                            </Link>
                            {product.trending && (
                                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                    Trending
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold sm:text-4xl">{product.name}</h1>
                        <div className="mt-4 flex items-center gap-4">
                            <span className="text-2xl font-bold">
                                {formatCurrency(product.price)}
                            </span>
                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <Star className="h-4 w-4 fill-current" />
                                <span className="ml-1 text-sm text-muted-foreground">
                                    (4.9)
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-muted-foreground">{product.description}</p>

                    <div className="space-y-4 border-y py-6">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium">Quantity</span>
                            <div className="flex items-center rounded-md border">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-9 w-9 rounded-none"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center text-sm font-medium">
                                    {quantity}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-9 w-9 rounded-none"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <Button size="lg" className="w-full sm:w-auto" onClick={handleAddToCart}>
                            <ShoppingBag className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-lg border p-4">
                            <Truck className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <p className="font-medium">Free Shipping</p>
                                <p className="text-xs text-muted-foreground">
                                    On orders over $100
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg border p-4">
                            <ShieldCheck className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <p className="font-medium">2 Year Warranty</p>
                                <p className="text-xs text-muted-foreground">
                                    Full coverage included
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mt-20">
                    <h2 className="mb-8 text-2xl font-bold">You might also like</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {relatedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
