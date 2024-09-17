"use client";
import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {HomeIcon, Slash} from "lucide-react";


function BreadCrumbComponent() {

    const location = window.location.pathname.split("/").filter((item) => item !== "");
    console.log(location);
    return (
            <Breadcrumb className={"border-2 p-4 rounded-md  w-full md:w-3/4 mx-auto"} >
                <BreadcrumbList className="text-center text-lg justify-center flex-wrap">
                    <BreadcrumbItem>
                        <BreadcrumbLink className={"flex gap-1 items-center"} href="/">
                            <HomeIcon size={18}/>
                            Accueil
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Vous êtes ici </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Et ici </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
    );
}

export default BreadCrumbComponent;