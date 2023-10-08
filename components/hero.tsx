"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
 
import hero from "@/public/Akko.webp";
import Image from "next/image";
 
const Hero = () => {
   return (
       <div className='w-full mt-0 px-4 flex ...(truncated)'>
           <div className='flex flex-col justify-center lg:w-[60%] w-full lg:px-6 lg:pr-14 lg:pl-24'>
               <Typography className='mb-4 font-semibold text-3xl ...(truncated)'>
               Aluminum DIY kits are now more accessible than ever!
               </Typography>
               <Typography className='font-poppins mb-6 pr-20'>
Even at only 99$ it’s still the best premium option to begin your custom mechanical keyboard journey with.

It comes with extra teflon pads (in case you want to perform the Force Break mod) and tape (in case you want to perform a Tape mod). The M1 offers flexibility for you to modify it and make it truly yours while also offering a great out-of-the-box experience with MonsGeek’s custom foam and gasket mount.
               </Typography>
               <div className=""> 
                    <a href="" className="bg-red-700 inline-block px-8 py-2 rounded-2xl text-white hover:text-black">Shop now!</a>
               </div>
           </div>
           <div className='lg:w-[40%] w-full lg:block hidden '>
               <Image src={hero} alt="hero" />
           </div>
       </div>
   );
};
 
export default Hero;