import {Button} from "@/components/ui/button"
import {Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger,} from "@/components/ui/sheet"
import {FileIcon, HomeIcon, IdCardIcon, LucideNewspaper, MenuIcon} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import React from "react";

export default function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" asChild>
                    <div className="flex items-center gap-2 hover:cursor-pointer">
                        <MenuIcon/>
                        <span>Menu</span>
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className={"my-4 mb-20 w-full"}>
                    <NavigationMenu className="w-full ">
                        <NavigationMenuList className=" w-full  gap-5 flex flex-col items-baseline justify-center">
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
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button className="w-full" type="submit">Fermer</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
