"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/data";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const { openCart, cartCount } = useCart();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
    }, [pathname]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

    return (
        <header
            className={cn(
                "sticky top-0 z-40 w-full transition-all duration-300",
                isScrolled
                    ? "border-b bg-background/80 backdrop-blur-md"
                    : "bg-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between gap-4">
                {/* Mobile Menu Trigger */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden flex-shrink-0"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                </Button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <ShoppingBag className="h-4 w-4" />
                    </div>
                    <span className="text-xl font-bold tracking-tight hidden sm:inline-block">LuxeStore</span>
                    <span className="text-xl font-bold tracking-tight sm:hidden">Luxe</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:gap-8 lg:flex-1 lg:justify-center">
                    <Link
                        href="/"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname === "/" ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        Home
                    </Link>

                    {/* Mega Menu Trigger (Simplified for now as a dropdown/link) */}
                    <div className="group relative">
                        <Link
                            href="/shop"
                            className={cn(
                                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                                pathname.startsWith("/shop")
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            Shop
                            <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                        </Link>

                        {/* Mega Menu Dropdown */}
                        <div className="invisible absolute top-full -left-4 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <div className="w-[600px] rounded-xl border bg-background p-6 shadow-lg ring-1 ring-black/5">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="mb-3 text-sm font-semibold leading-none text-foreground">
                                            Categories
                                        </h4>
                                        <ul className="space-y-2">
                                            {categories.map((category) => (
                                                <li key={category.id}>
                                                    <Link
                                                        href={`/shop?category=${category.slug}`}
                                                        className="block rounded-md p-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-lg bg-secondary/50 p-4">
                                        <h4 className="mb-2 text-sm font-semibold">New Arrivals</h4>
                                        <p className="mb-4 text-sm text-muted-foreground">
                                            Check out the latest trends for this season.
                                        </p>
                                        <Button size="sm" asChild>
                                            <Link href="/shop">View All</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/blog"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname.startsWith("/blog")
                                ? "text-primary"
                                : "text-muted-foreground"
                        )}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname === "/about" ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        About
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <AnimatePresence>
                        {isSearchOpen ? (
                            <motion.form
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100%", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                className="absolute left-0 right-0 top-0 flex h-16 items-center bg-background px-4 lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:px-0"
                                onSubmit={handleSearch}
                            >
                                <div className="relative flex w-full items-center gap-2">
                                    <Input
                                        placeholder="Search..."
                                        className="h-9 w-full lg:w-[200px]"
                                        autoFocus
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onBlur={() => {
                                            // Small delay to allow form submission if clicking enter
                                            setTimeout(() => {
                                                if (!searchQuery) setIsSearchOpen(false)
                                            }, 100)
                                        }}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="lg:hidden"
                                        onClick={() => setIsSearchOpen(false)}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>
                            </motion.form>
                        ) : (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search</span>
                            </Button>
                        )}
                    </AnimatePresence>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                        onClick={openCart}
                    >
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Open cart</span>
                        {cartCount > 0 && (
                            <Badge
                                variant="default"
                                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-[10px]"
                            >
                                {cartCount}
                            </Badge>
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-50 flex h-full w-3/4 max-w-xs flex-col bg-background shadow-xl lg:hidden"
                        >
                            <div className="flex items-center justify-between border-b px-6 py-4">
                                <span className="text-lg font-bold">Menu</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                            <div className="flex-1 overflow-y-auto px-6 py-4">
                                <nav className="flex flex-col gap-4">
                                    <Link
                                        href="/"
                                        className="text-lg font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/shop"
                                        className="text-lg font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Shop
                                    </Link>
                                    <div className="pl-4">
                                        {categories.map((category) => (
                                            <Link
                                                key={category.id}
                                                href={`/shop?category=${category.slug}`}
                                                className="block py-2 text-muted-foreground"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <Link
                                        href="/blog"
                                        className="text-lg font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="text-lg font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-lg font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
