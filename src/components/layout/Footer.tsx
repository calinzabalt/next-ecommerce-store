import Link from "next/link";
import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="border-t bg-secondary/30">
            <div className="container py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <ShoppingBag className="h-4 w-4" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">LuxeStore</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Premium products for your modern lifestyle. Quality meets design in
                            every item we curate.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Facebook className="h-4 w-4" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                                <span className="sr-only">X (formerly Twitter)</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Instagram className="h-4 w-4" />
                                <span className="sr-only">Instagram</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Shop</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/shop" className="hover:text-primary">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=electronics" className="hover:text-primary">
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=fashion" className="hover:text-primary">
                                    Fashion
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=home-living" className="hover:text-primary">
                                    Home & Living
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/contact" className="hover:text-primary">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-primary">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="hover:text-primary">
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Newsletter</h3>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime
                            deals.
                        </p>
                        <form className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background"
                            />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} LuxeStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
