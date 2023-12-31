"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";

interface modalProps {
     open: boolean;
     onClose: () => void;
     children: React.ReactNode;
};

const Modal: React.FC<modalProps> = ({
    open,
    onClose,
    children
}) => {
    return ( 
        <Transition show={open} appear as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <div className="fixed inset-0 bg-black bg-opacity-50"/>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl overflow-hidden 
                            rounded-lg text-left align-middle">
                                <div className="relative flex w-full items-center
                                overflow-hidden bg-red-800 px-4 pb-8 pt-14 shadow-lg
                                sm:px-6 sm:pt-8 md:p-4 justify-end">
                                    <IconButton onClick={onClose} icon={<X size={15}/>} />
                                </div>
                                {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
 
export default Modal;