import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2 ">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="hr.svg" 
                        alt="Croatian" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded -md"
                        />
                    Croatian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="fr.svg" 
                        alt="French" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded -md"
                        />
                    French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="jp.svg" 
                        alt="Japan" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded -md"
                        />
                    Japan
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="it.svg" 
                        alt="Italy" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded -md"
                        />
                    Italian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="es.svg" 
                        alt="Spain" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded -md"
                        />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                        src="in.svg" 
                        alt="Hindi" 
                        height={32} 
                        width={40} 
                        className="mr-4 rounded -md"
                        />
                    Hindi
                </Button>
            </div>
        </footer>
    );
};