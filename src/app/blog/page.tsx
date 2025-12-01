"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
    return (
        <div className="container py-12">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Our Blog</h1>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                    Insights, trends, and stories from the world of modern lifestyle and
                    design.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group flex flex-col overflow-hidden rounded-xl border bg-card"
                    >
                        <Link
                            href={`/blog/${post.slug}`}
                            className="relative aspect-video overflow-hidden bg-secondary"
                        >
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </Link>
                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4 text-sm text-muted-foreground">
                                {post.date}
                            </div>
                            <h2 className="mb-2 text-xl font-bold leading-tight group-hover:text-primary">
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className="mb-4 flex-1 text-muted-foreground">{post.excerpt}</p>
                            <Button variant="link" className="w-fit p-0" asChild>
                                <Link href={`/blog/${post.slug}`}>Read More &rarr;</Link>
                            </Button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
