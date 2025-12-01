"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-secondary/30 py-20 lg:py-32">
            <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Elevate Your Style with <span className="text-primary">LuxeStore</span>
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                        Discover our curated collection of premium products designed for the
                        modern lifestyle. Quality, aesthetics, and functionality in every
                        detail.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" asChild>
                            <Link href="/shop">Shop Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/shop?category=new-arrivals">View New Arrivals</Link>
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative mx-auto aspect-square w-full max-w-[500px] lg:mx-0"
                >
                    <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-primary/10" />
                    <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
                            alt="Hero Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-secondary blur-3xl" />
        </section>
    );
}
