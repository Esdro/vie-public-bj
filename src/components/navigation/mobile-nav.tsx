import {Button} from "@/components/ui/button"
import {Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger,} from "@/components/ui/sheet"
import {FileIcon, HomeIcon, IdCardIcon, LucideNewspaper, MenuIcon} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";
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
                          <NavigationMenuItem >
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
              </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Fermer</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
