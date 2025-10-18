"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex- flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive = pathname == link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start relative transition-all duration-300 ease-out group",
                {
                  "bg-blue-1": isActive,
                  "hover:bg-white/10 hover:translate-x-1": !isActive,
                }
              )}
            >
              {!isActive && (
                <div
                  className="absolute left-0 top-0 h-full w-0 bg-blue-1 opacity-0 
      transition-all duration-300 group-hover:opacity-100 group-hover:w-1 rounded-r-md"
                ></div>
              )}

              <div
                className={cn("transition-transform duration-300", {
                  "group-hover:scale-110 group-hover:text-blue-400": !isActive,
                })}
              >
                <Image
                  src={link.imgUrl}
                  alt={link.label}
                  width={24}
                  height={24}
                />
              </div>

              <p
                className={cn(
                  "text-lg font-semibold max-lg:hidden transition-colors duration-300",
                  { "group-hover:text-blue-400": !isActive }
                )}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
