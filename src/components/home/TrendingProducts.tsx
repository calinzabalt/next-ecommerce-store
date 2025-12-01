"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TrendingProducts() {
    const trendingProducts = products.filter((p) => p.trending).slice(0, 4);

    return (
        <section className="bg-secondary/20 py-20">
            <div className="container">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold">Trending Now</h2>
                        <p className="text-muted-foreground">
                            Discover what everyone is talking about.
                        </p>
                    </div>
                    <Button variant="outline" asChild className="hidden sm:flex">
                        <Link href="/shop">View All Products</Link>
                    </Button>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {trendingProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8 flex justify-center sm:hidden">
                    <Button variant="outline" asChild>
                        <Link href="/shop">View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
