"use client"
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-full flex justify-center items-center mt-8 mt-28">
      <div>
        <div className="flex justify-center items-center">
        <h1 className=" text-3xl font-bold ">This Page Coming Soon</h1>
        </div>
        <Image
         src={'/comingSoon.jpeg'}
         alt="Under Construction"
         width={500}
         height={500}
         />
      </div>
    </div>
  );
}
