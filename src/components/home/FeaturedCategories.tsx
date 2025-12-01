"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";

export function FeaturedCategories() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold">Shop by Category</h2>
                    <p className="text-muted-foreground">
                        Explore our wide range of premium collections.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/shop?category=${category.slug}`}
                                className="group relative block overflow-hidden rounded-xl bg-secondary"
                            >
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <h3 className="text-xl font-bold">{category.name}</h3>
                                        <span className="mt-2 inline-block text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                                            Shop Now &rarr;
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
