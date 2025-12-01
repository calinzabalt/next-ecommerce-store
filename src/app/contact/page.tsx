"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container max-w-2xl py-12">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
                <p className="text-muted-foreground">
                    Have a question or feedback? We'd love to hear from you.
                </p>
            </div>

            {submitted ? (
                <div className="rounded-lg border bg-secondary/50 p-8 text-center">
                    <h2 className="mb-2 text-xl font-semibold">Message Sent!</h2>
                    <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)}>
                        Send Another Message
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Name
                            </label>
                            <Input id="name" required placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <Input id="email" type="email" required placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                        </label>
                        <Input id="subject" required placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Tell us more..."
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            )}
        </div>
    );
}
