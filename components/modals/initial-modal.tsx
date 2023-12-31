"use client";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const formSchema = z.object({
    name: z.string().min(1, { message: "Server name is required" }),
    imageUrl: z.string().min(1, { message: "Server image is required" })
})


const InitialModal = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, [])


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: ""
        }
    });
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    if (!isMounted) return null;
    return (
        <Dialog open>
            <DialogContent className="p-0 overflow-hidden text-black bg-white">
                <DialogHeader className="px-6 pt-8">
                    <DialogTitle className="text-2xl text-center">
                        Customize your Server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        You can always change these settings later.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="px-6 space-y-8">
                            <div className="flex items-center justify-center text-center">
                                !Image Upload
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-secondary/70">
                                            Server Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="text-black border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                                                placeholder="Enter a server name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter className="px-6 py-4 bg-gray-100">
                            <Button disabled={isLoading} variant="primary">
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default InitialModal;