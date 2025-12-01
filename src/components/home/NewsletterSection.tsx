"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 lg:py-24">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                        Join Our Newsletter
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
                        Subscribe to get special offers, free giveaways, and once-in-a-lifetime
                        deals. plus, get 10% off your first order!
                    </p>
                    <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-primary-foreground text-primary placeholder:text-primary/60"
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                            className="whitespace-nowrap"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
