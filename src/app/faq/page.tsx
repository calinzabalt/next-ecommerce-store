import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
    return (
        <div className="container max-w-3xl py-12">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h1>
                <p className="text-muted-foreground">
                    Find answers to common questions about our products and services.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is your return policy?</AccordionTrigger>
                    <AccordionContent>
                        We offer a 30-day return policy for all unused items in their original packaging.
                        Simply contact our support team to initiate a return.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                    <AccordionContent>
                        Standard shipping typically takes 3-5 business days within the US.
                        International shipping can take 7-14 business days depending on the location.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                    <AccordionContent>
                        Yes, we ship to most countries worldwide. Shipping costs and delivery times
                        will be calculated at checkout.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>How can I track my order?</AccordionTrigger>
                    <AccordionContent>
                        Once your order ships, you will receive a confirmation email with a tracking number.
                        You can use this number to track your package on our carrier's website.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
