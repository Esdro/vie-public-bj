import { useMediaQuery } from 'usehooks-ts'
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {FileIcon, HomeIcon, IdCardIcon, LucideNewspaper} from "lucide-react";

function Nav() {

    return (
        <NavigationMenu className="w-full ">
            <NavigationMenuList className=" w-full  gap-5 flex flex-row items-baseline justify-center">
                <NavigationMenuItem className="flex gap-2 justify-between items-center flex-row">
                    <HomeIcon size={20}/>
                    <NavigationMenuLink href="/">
                        Accueil
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex gap-2 justify-between items-center flex-row">
                    <LucideNewspaper size={20}/>
                    <NavigationMenuLink href="/actualites">
                        Actualités
                    </NavigationMenuLink>

                </NavigationMenuItem>
                <NavigationMenuItem className="flex gap-2 justify-between items-center flex-row">
                    <IdCardIcon size={20}/>
                    <NavigationMenuLink href="/annuaires">
                        Annuaires
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex gap-2 justify-between items-center flex-row">
                    <FileIcon size={20}/>
                    <NavigationMenuLink href="/documents">
                        Documents
                    </NavigationMenuLink>

                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Nav;