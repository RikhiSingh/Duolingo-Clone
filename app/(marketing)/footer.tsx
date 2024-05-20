import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2 ">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Link href="https://github.com/RikhiSingh" target="_blank" passHref>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image
                            src="/github.svg"
                            alt="Github"
                            height={40}
                            width={40}
                            className="mr-4 rounded -md"
                        />
                        RikhiSingh
                    </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/rikhi-singh/" target="_blank" passHref>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image
                            src="/linkedIn.png"
                            alt="LinkedIn"
                            height={43}
                            width={43}
                            className="mr-4 rounded -md"
                        />       
                        rikhi-singh                 
                    </Button>
                </Link>
                <Link href="https://www.instagram.com/rikhi_singh/" target="_blank" passHref>
                    <Button size="lg" variant="ghost" className="w-full">
                        <Image
                            src="/igLogo.svg"
                            alt="Instagram"
                            height={40}
                            width={40}
                            className="mr-4 rounded -md"
                        />    
                        rikhi_singh                    
                    </Button>
                </Link>
            </div>
        </footer>
    );
};