"use client";

import { HelpingHand, Inbox, Star, Truck } from "lucide-react";

const Warranty = () => {
    return ( 
        <section className="mx-auto mb-8">
            <div className="flex justify-center items-baseline gap-8">
                <div className="max-w-xs">
                    <span className="flex gap-4 items-center" >
                        <Truck  size={60}  color="#242424" />
                        <div className="tt-col-description">
                            <h4 className="font-semibold">FREE SHIPPING</h4>
                            <p className="text-sm">Free shipping for the second SAME item</p>
                        </div>
                    </span>
                </div>
                <div className="max-w-xs">
                    <span className="flex gap-4 items-center" >
                        <Inbox  size={60} color="#242424" />
                        <div className="tt-col-description">
                            <h4 className="font-semibold">Global Delivery</h4>
                            <p className="text-sm">We are doing worldwide business!</p>
                        </div>
                    </span >
                </div>
                <div className="max-w-xs">
                    <span className="flex gap-4 items-center" >
                        <Star  size={60} color="#242424" />
                        <div className="tt-col-description">
                            <h4 className="font-semibold">Warranty</h4>
                            <p className="text-sm">All keyboards are covered by 12 month warranty.</p>
                        </div>
                    </span >
                </div>
                <div className="max-w-xs">
                    <span className="flex gap-4 items-center" >
                        <HelpingHand  size={60} color="#242424" />
                        <div className="tt-col-description">
                        <h4 className="font-semibold">Secure Payment</h4>
                        <p className="text-sm">Protect your personal information and money all the way</p>
                        </div>
                    </span >
                </div>
            </div>
        </section>
    );
}
 
export default Warranty;