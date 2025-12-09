"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Info, Bot, Box, Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PreviewNotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 15000); // 15 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                className="fixed bottom-4 right-4 z-50 w-full max-w-sm px-4 sm:px-0"
            >
                <Card className="border-primary/20 shadow-2xl backdrop-blur-sm">
                    <CardHeader className="relative pb-2">
                        <div className="flex items-center gap-2">
                            <Info className="h-5 w-5 text-primary" />
                            <CardTitle className="text-lg">Preview Mode</CardTitle>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8"
                            onClick={() => setIsVisible(false)}
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                        <div className="space-y-2">
                            <p className="font-medium text-foreground">
                                Built by: <span className="text-primary"><a href="https://webuilders.dev/" target="_blank">webuilders.dev</a></span>
                            </p>
                            <p className="text-muted-foreground">
                                This is a preview site and not live. It demonstrates how your e-commerce store could look.
                            </p>
                        </div>

                        <div className="space-y-2 rounded-lg bg-secondary/50 p-3">
                            <p className="font-semibold">Advanced Features Available:</p>
                            <ul className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <Bot className="h-3 w-3" /> AI Product Recommendations
                                </li>
                                <li className="flex items-center gap-2">
                                    <Box className="h-3 w-3" /> 3D Product Gallery
                                </li>
                                <li className="flex items-center gap-2">
                                    <Bell className="h-3 w-3" /> Smart Alerts & Notifications
                                </li>
                                <li className="flex items-center gap-2">
                                    <Mail className="h-3 w-3" /> Custom Newsletters & Emails
                                </li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
