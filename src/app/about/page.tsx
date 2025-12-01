import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container py-12">
            <div className="mx-auto max-w-3xl space-y-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold">About LuxeStore</h1>
                    <p className="text-xl text-muted-foreground">
                        Redefining modern lifestyle through curated design and exceptional quality.
                    </p>
                </div>

                <div className="prose prose-lg mx-auto dark:prose-invert">
                    <p>
                        Founded in 2023, LuxeStore was born from a simple idea: that great design should be accessible to everyone. We believe that the objects we surround ourselves with shape our daily lives, and we're committed to bringing you products that combine form, function, and beauty.
                    </p>
                    <p>
                        Our team of curators scours the globe to find unique pieces that stand out from the crowd. From cutting-edge electronics to timeless fashion staples, every item in our collection is chosen for its quality, craftsmanship, and aesthetic appeal.
                    </p>
                    <h2>Our Mission</h2>
                    <p>
                        To inspire and elevate everyday living through exceptional design. We strive to create a shopping experience that is as enjoyable as the products we sell.
                    </p>
                    <h2>Sustainability</h2>
                    <p>
                        We are committed to reducing our environmental footprint. We work with suppliers who prioritize sustainable practices and use eco-friendly packaging whenever possible.
                    </p>
                </div>

                <div className="flex justify-center pt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
