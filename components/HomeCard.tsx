import React from 'react'
import Image from "next/image"
import { cn } from '@/lib/utils';
interface HomeCardProps{
    className:string,
    img:string,
    title:string,
    description:string,
    handleClick:()=>void;
}
const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <div
      className={cn(
        "group px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer " +
        "bg-white/5 backdrop-blur-sm transition-opacity duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-blue-400/30",
        className
      )}
      onClick={handleClick}
    >
      {/* Icon */}
      <div className='flex-center glassmorphism size-12 rounded-[10px] transition-transform duration-300 ease-out group-hover:scale-110'>
        <Image src={img} alt={title} width={27} height={27} />
      </div>

      {/* Text */}
      <div className='flex flex-col gap-2 mt-4'>
        <h1 className="text-2xl font-bold text-white transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-90">{title}</h1>
        <p className="text-lg text-gray-300 transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-80">{description}</p>
      </div>
    </div>
  )
}


export default HomeCard