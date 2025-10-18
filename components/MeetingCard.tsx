"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "./ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
            +5
          </div>
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            {/* Primary Button */}
            <Button
              onClick={handleClick}
              className="
      group relative rounded px-6 py-3 font-medium text-white
      bg-gradient-to-b from-blue-500 to-blue-600
      transition-transform transition-shadow transition-colors duration-300
      ease-out hover:scale-103 hover:shadow-[0_8px_20px_rgba(59,130,246,0.35)]
      hover:from-blue-500 hover:to-blue-700 active:scale-97 active:shadow-[0_4px_12px_rgba(59,130,246,0.25)]
    "
            >
              {buttonIcon1 && (
                <Image
                  src={buttonIcon1}
                  alt="feature"
                  width={20}
                  height={20}
                  className="inline-block transition-transform duration-300 ease-out group-hover:translate-y-[-2px] group-hover:scale-110"
                />
              )}
              &nbsp; {buttonText}
            </Button>

            {/* Copy Button */}
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({ title: "Link Copied" });
              }}
              className="
      group relative rounded px-6 py-3 font-medium text-white
      bg-gray-800
      transition-transform transition-shadow transition-colors duration-300
      ease-out hover:scale-103 hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)]
      hover:bg-gray-700 active:scale-97 active:shadow-[0_4px_12px_rgba(255,255,255,0.1)]
    "
            >
              <Image
                src="/icons/copy.svg"
                alt="copy link icon"
                width={20}
                height={20}
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-y-[-2px] group-hover:scale-110"
              />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
