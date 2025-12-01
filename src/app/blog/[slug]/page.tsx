"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container max-w-4xl py-12">
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                    <Link href="/blog">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            Admin
                        </div>
                    </div>
                </div>

                <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-secondary">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
                    <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <h2>The Rise of Modern Design</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <blockquote>
                        "Design is not just what it looks like and feels like. Design is how
                        it works."
                    </blockquote>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                    </p>
                    <h3>Key Takeaways</h3>
                    <ul>
                        <li>Focus on functionality first</li>
                        <li>Minimalism reduces cognitive load</li>
                        <li>Quality materials last longer</li>
                    </ul>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                    </p>
                </div>
            </motion.div>
        </article>
    );
}
