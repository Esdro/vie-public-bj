"use client";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/themes/theme-toogle";
import { useMediaQuery } from "usehooks-ts";
import MobileNav from "@/components/navigation/mobile-nav";
import Nav from "@/components/navigation/nav";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Header() {
  const matchesMobile = useMediaQuery("(max-width: 768px)");
  const matchesTablet = useMediaQuery("(max-width: 991px)");
  return (
    <>
      <div
        className={
          matchesMobile
            ? "  justify-between  p-4 bg-background/80" +
              " backdrop-blur-md" +
              " flex  gap-4 items-center border-b-[1px] "
            : " justify-around  p-4" +
              " bg-background/80" +
              " backdrop-blur-md" +
              " flex  gap-4 items-center border-b-[1px] "
        }
      >
        <div className="site_logo ">
          <Link
            href="/"
            className="flex flex-row gap-2 items-center justify-between"
          >
            <Image
              src={"/assets/armoiries.png"}
              width={60}
              height={60}
              alt={"Armoirie de la Rép du Bénin "}
            />

            <div className=" font-bold flex flex-col">
              <span className="text-xs md:text-base  ">Vie Publique Bénin</span>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span className="text-xs md:text-base  ">
                Pour la transparence et l&apos;information.
              </span>
            </div>
          </Link>
        </div>

        <div className="extra flex flex-row h-12 gap-4 items-center justify-between">
          <>{matchesMobile ? <MobileNav /> : <Nav />}</>
          <Separator orientation="vertical" />
          <ModeToggle />
        </div>
      </div>
      <div className="grid grid-rows-2  grid-flow-col">
        <div className="row-span-3 col-span-2 bg-[#008751]   h-[8px] "></div>
        <div className="col-span-2 bg-[#FCD116]  h-[4px] "></div>
        <div className=" col-span-2 bg-[#E8112D] h-[4px] "></div>
      </div>
    </>
  );
}

export default Header;
