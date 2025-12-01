"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, CreditCard, Truck, CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
    const [isLoading, setIsLoading] = useState(false);

    const handleShippingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("payment");
        window.scrollTo(0, 0);
    };

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate processing
        setTimeout(() => {
            setIsLoading(false);
            setStep("confirmation");
            clearCart();
            window.scrollTo(0, 0);
        }, 2000);
    };

    if (items.length === 0 && step !== "confirmation") {
        return (
            <div className="container flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
                <h1 className="mb-4 text-3xl font-bold">Your cart is empty</h1>
                <p className="mb-8 text-muted-foreground">
                    Add some items to your cart to proceed to checkout.
                </p>
                <Button asChild>
                    <Link href="/shop">Continue Shopping</Link>
                </Button>
            </div>
        );
    }

    if (step === "confirmation") {
        return (
            <div className="container flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                    className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600"
                >
                    <CheckCircle className="h-12 w-12" />
                </motion.div>
                <h1 className="mb-4 text-3xl font-bold">Order Confirmed!</h1>
                <p className="mb-8 max-w-md text-muted-foreground">
                    Thank you for your purchase. We've sent a confirmation email to your
                    inbox. Your order will be shipped shortly.
                </p>
                <Button asChild>
                    <Link href="/">Return Home</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container py-12">
            <div className="mb-8">
                <Link
                    href="/shop"
                    className="flex items-center text-sm text-muted-foreground hover:text-primary"
                >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Continue Shopping
                </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-12">
                {/* Main Content */}
                <div className="lg:col-span-7">
                    <div className="mb-8 flex items-center gap-4">
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step === "shipping"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-primary/20 text-primary"
                                }`}
                        >
                            1
                        </div>
                        <span
                            className={`font-medium ${step === "shipping" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            Shipping
                        </span>
                        <div className="h-px w-8 bg-border" />
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step === "payment"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-muted-foreground"
                                }`}
                        >
                            2
                        </div>
                        <span
                            className={`font-medium ${step === "payment" ? "text-foreground" : "text-muted-foreground"
                                }`}
                        >
                            Payment
                        </span>
                    </div>

                    {step === "shipping" ? (
                        <motion.form
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onSubmit={handleShippingSubmit}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-bold">Shipping Details</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">
                                        First Name
                                    </label>
                                    <Input id="firstName" required placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">
                                        Last Name
                                    </label>
                                    <Input id="lastName" required placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input id="email" type="email" required placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="address" className="text-sm font-medium">
                                    Address
                                </label>
                                <Input id="address" required placeholder="123 Main St" />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-sm font-medium">
                                        City
                                    </label>
                                    <Input id="city" required placeholder="New York" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="state" className="text-sm font-medium">
                                        State
                                    </label>
                                    <Input id="state" required placeholder="NY" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="zip" className="text-sm font-medium">
                                        ZIP Code
                                    </label>
                                    <Input id="zip" required placeholder="10001" />
                                </div>
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                Continue to Payment
                            </Button>
                        </motion.form>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onSubmit={handlePaymentSubmit}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-bold">Payment Details</h2>
                            <div className="rounded-lg border p-4">
                                <div className="flex items-center gap-4">
                                    <CreditCard className="h-6 w-6" />
                                    <div>
                                        <p className="font-medium">Credit Card</p>
                                        <p className="text-sm text-muted-foreground">
                                            Secure encrypted payment
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="cardNumber" className="text-sm font-medium">
                                    Card Number
                                </label>
                                <Input id="cardNumber" required placeholder="0000 0000 0000 0000" />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="expiry" className="text-sm font-medium">
                                        Expiry Date
                                    </label>
                                    <Input id="expiry" required placeholder="MM/YY" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="cvc" className="text-sm font-medium">
                                        CVC
                                    </label>
                                    <Input id="cvc" required placeholder="123" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="cardName" className="text-sm font-medium">
                                    Name on Card
                                </label>
                                <Input id="cardName" required placeholder="John Doe" />
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="lg"
                                    className="flex-1"
                                    onClick={() => setStep("shipping")}
                                >
                                    Back
                                </Button>
                                <Button type="submit" size="lg" className="flex-1" disabled={isLoading}>
                                    {isLoading ? "Processing..." : `Pay ${formatCurrency(cartTotal)}`}
                                </Button>
                            </div>
                        </motion.form>
                    )}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-5">
                    <div className="rounded-xl border bg-secondary/20 p-6">
                        <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
                        <ul className="mb-6 space-y-4">
                            {items.map((item) => (
                                <li key={item.id} className="flex gap-4">
                                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border bg-background">
                                        <Image
                                            src={item.images[0]}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-center">
                                        <span className="font-medium">{item.name}</span>
                                        <span className="text-sm text-muted-foreground">
                                            Qty: {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-medium">
                                            {formatCurrency(item.price * item.quantity)}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-2 border-t pt-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>{formatCurrency(cartTotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between border-t pt-2 text-lg font-bold">
                                <span>Total</span>
                                <span>{formatCurrency(cartTotal)}</span>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <Truck className="h-4 w-4" />
                            <span>Free shipping on all orders</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
