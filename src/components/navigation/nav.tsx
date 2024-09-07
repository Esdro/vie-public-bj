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
        <NavigationMenu>
            <NavigationMenuList className="gap-3">
                <NavigationMenuItem>
                    <Link href="/" className="flex gap-2 justify-between items-center flex-row">
                        <HomeIcon size={20}/>
                        <NavigationMenuLink>
                            Accueil
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" className="flex gap-2 justify-between items-center flex-row">
                        <LucideNewspaper size={20}/>
                        <NavigationMenuLink>
                            Actualités
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" className="flex gap-2 justify-between items-center flex-row">
                        <IdCardIcon size={20}/>
                        <NavigationMenuLink>
                            Annuaires
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" className="flex gap-2 justify-between items-center flex-row">
                        <FileIcon size={20}/>
                        <NavigationMenuLink>
                            Documents
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Nav;