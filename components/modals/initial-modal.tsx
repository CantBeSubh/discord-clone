"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";


const InitialModal = () => {
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

            </DialogContent>
        </Dialog>
    );
}

export default InitialModal;