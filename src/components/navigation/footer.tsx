import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Contact2Icon, FileIcon, HomeIcon, IdCardIcon, LucideNewspaper, TwitterIcon} from "lucide-react";
import {EnvelopeOpenIcon} from "@radix-ui/react-icons";

function Footer() {
    return (
        <div className="fixed bottom-0 border-t-2 text-center pt-1.5 right-0 left-0 ">
            <div className="flex justify-center flex-col items-center ">
                <p className="text-gray-600 text-center justify-center w-3/4 flex-row flex gap-1 items-center ">
                    Vie Publique Bénin est un projet d'initiative citoyenne. <br/>
                    N'hésitez pas à y contribuer ou faire remonter des éventuelles erreurs. </p>
                <p className=" text-center font-bold ">
                    Vie Publique Bénin &copy; {new Date().getFullYear()}
                </p>
            </div>
            <div className="grid grid-rows-2 mt-2  grid-flow-col">
                <div className="row-span-3 col-span-2 bg-[#008751]   h-8 "></div>
                <div className="col-span-2 bg-[#FCD116]  h-4 "></div>
                <div className=" col-span-2 bg-[#E8112D] h-4 "></div>
            </div>
        </div>

    );
}

export default Footer;