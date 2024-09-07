"use client"
import React from 'react';
import Image from "next/image";
import {ModeToggle} from "@/components/themes/theme-toogle";
import {useMediaQuery} from "usehooks-ts";
import MobileNav from "@/components/navigation/mobile-nav";
import Nav from "@/components/navigation/nav";
import {Separator} from "@/components/ui/separator";


function Header() {
    const matchesMobile = useMediaQuery('(max-width: 768px)')
    const matchesTablet = useMediaQuery('(max-width: 991px)')
    return (
        <div
            className={matchesMobile ? "fixed z-[20]  justify-between left-0 right-0 top-0 p-4 bg-background/80" +
                " backdrop-blur-md" +
                " flex  gap-4 items-center border-b-[1px] " : "fixed z-[20]  justify-around left-0 right-0 top-0 p-4" +
                " bg-background/80" +
                " backdrop-blur-md" +
                " flex  gap-4 items-center border-b-[1px] "}>

            <div className="site_logo flex flex-row gap-2 items-center justify-between">
                <Image
                    className="hover:cursor-not-allowed"
                    src={"/assets/armoiries.png"}
                    width={60}
                    height={60}
                    alt={"Armoirie de la Rép du Bénin "}
                />
                {matchesTablet ?
                    <>
                        <div className=" font-bold flex flex-col">
                            <span>Vie Publique BJ</span>
                            <span>Pour la transparence ...</span>
                        </div>

                    </> :
                    <div className=" font-bold flex flex-col">
                        <span>Vie Publique Bénin</span>
                        <span>Pour la transparence et l'information</span>
                    </div>
                }
            </div>

            <div className="extra flex flex-row h-12 gap-4 items-center justify-between">

                <>
                    {matchesMobile ? <MobileNav/> :<Nav/> }
                </>
                <Separator orientation="vertical"/>
                <ModeToggle/>

            </div>
        </div>

    );
}

export default Header;


