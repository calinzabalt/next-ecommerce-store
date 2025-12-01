import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShippingPage() {
    return (
        <div className="container max-w-3xl py-12">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-3xl font-bold">Shipping & Support</h1>
                <p className="text-muted-foreground">
                    Everything you need to know about delivery and customer support.
                </p>
            </div>

            <div className="space-y-8">
                <section>
                    <h2 className="mb-4 text-2xl font-semibold">Shipping Information</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            We offer free standard shipping on all orders over $50. For orders under $50, a flat rate of $5.99 applies.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Standard Shipping: 3-5 business days</li>
                            <li>Express Shipping: 1-2 business days (additional cost)</li>
                            <li>International Shipping: 7-14 business days</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">Returns & Exchanges</h2>
                    <p className="text-muted-foreground">
                        We want you to love your purchase. If you are not completely satisfied, you may return items within 30 days of delivery for a full refund or exchange. Items must be unused and in their original packaging.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">Need Help?</h2>
                    <p className="mb-4 text-muted-foreground">
                        Our support team is available Monday through Friday, 9am to 5pm EST.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild>
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/faq">View FAQ</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
