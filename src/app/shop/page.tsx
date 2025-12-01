"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X } from "lucide-react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Separate component for the content that uses useSearchParams
function ShopContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sort, setSort] = useState("featured");

    const categoryParam = searchParams.get("category");

    useEffect(() => {
        let result = [...products];

        // Filter by category
        if (categoryParam) {
            result = result.filter((p) => p.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-") === categoryParam);
        }

        // Sort
        if (sort === "price-asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (sort === "price-desc") {
            result.sort((a, b) => b.price - a.price);
        } else if (sort === "newest") {
            // Mock newest sort by reversing
            result.reverse();
        }

        setFilteredProducts(result);
    }, [categoryParam, sort]);

    const handleCategoryChange = (slug: string | null) => {
        if (slug) {
            router.push(`/shop?category=${slug}`);
        } else {
            router.push("/shop");
        }
        setIsFilterOpen(false);
    };

    return (
        <div className="container py-12">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-3xl font-bold">Shop</h1>
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        className="lg:hidden"
                        onClick={() => setIsFilterOpen(true)}
                    >
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Sort by:</span>
                        <select
                            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="newest">Newest Arrivals</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex gap-8">
                {/* Sidebar Filters (Desktop) */}
                <aside className="hidden w-64 flex-shrink-0 lg:block">
                    <div className="sticky top-24 space-y-8">
                        <div>
                            <h3 className="mb-4 text-sm font-semibold">Categories</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => handleCategoryChange(null)}
                                        className={cn(
                                            "text-sm hover:text-primary hover:underline",
                                            !categoryParam ? "font-medium text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        All Products
                                    </button>
                                </li>
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <button
                                            onClick={() => handleCategoryChange(category.slug)}
                                            className={cn(
                                                "text-sm hover:text-primary hover:underline",
                                                categoryParam === category.slug
                                                    ? "font-medium text-primary"
                                                    : "text-muted-foreground"
                                            )}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Mobile Filter Drawer */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsFilterOpen(false)}
                                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 right-0 z-50 flex h-full w-3/4 max-w-xs flex-col bg-background shadow-xl lg:hidden"
                            >
                                <div className="flex items-center justify-between border-b px-6 py-4">
                                    <span className="text-lg font-bold">Filters</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsFilterOpen(false)}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-4 text-sm font-semibold">Categories</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <button
                                                onClick={() => handleCategoryChange(null)}
                                                className={cn(
                                                    "text-sm",
                                                    !categoryParam ? "font-medium text-primary" : "text-muted-foreground"
                                                )}
                                            >
                                                All Products
                                            </button>
                                        </li>
                                        {categories.map((category) => (
                                            <li key={category.id}>
                                                <button
                                                    onClick={() => handleCategoryChange(category.slug)}
                                                    className={cn(
                                                        "text-sm",
                                                        categoryParam === category.slug
                                                            ? "font-medium text-primary"
                                                            : "text-muted-foreground"
                                                    )}
                                                >
                                                    {category.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Product Grid */}
                <div className="flex-1">
                    {filteredProducts.length === 0 ? (
                        <div className="flex h-64 flex-col items-center justify-center text-center">
                            <p className="text-lg font-medium">No products found</p>
                            <p className="text-muted-foreground">
                                Try adjusting your filters or search query.
                            </p>
                            <Button
                                variant="link"
                                onClick={() => handleCategoryChange(null)}
                                className="mt-2"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="container py-12">Loading...</div>}>
            <ShopContent />
        </Suspense>
    );
}
