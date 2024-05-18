import Image from "next/image";

import { cn } from "@/lib/utils";
import { InfinityIcon } from "lucide-react";

type Props = {
    value: number | string;
    variant: "points" | "hearts";
};


export const ResultCard = ({
    value,
    variant,
    userSubscription
}: Props & { userSubscription?: boolean }) => {
    const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

    return (
        <div className={cn(
            "rounded-2xl border-2 w-full",
            variant === "points" && "bg-orange-400 border-orange-400",
            variant === "hearts" && "bg-rose-500 border-rose-500",
        )}>
            <div className={cn(
                "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
                variant === "hearts" && "bg-rose-500",
                variant === "points" && "bg-orange-400"
            )}>
                {variant === "hearts" ? "Hearts Left" : "Total XP"}
            </div>
            <div className={cn(
                "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-xl",
                variant === "hearts" && "text-rose-500",
                variant === "points" && "text-orange-500",
            )}>
                <Image
                    alt="icon"
                    src={imageSrc}
                    height={30}
                    width={30}
                    className="mr-1.5"
                />
                {userSubscription ? (
                    <InfinityIcon className="h-6 w-6 stroke-[3] shrink-0" />
                ) : (
                    value
                )}
            </div>
        </div>
    );
};