"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { THEME_MODE } from "../themes/theme-toogle";

type CardProps = {
  card: {
    title: string;
    description: string;
    link?: {
      url: string;
      text: string;
    };
  };
};

function CardComponent({ card }: CardProps) {
  const { theme } = useTheme();
 /* console.log(theme);*/

  return (
    <Card className="basis-1/4 m-2 shadow-md  hover:cursor-pointer hover:bg-foreground hover:text-background  ">
      <CardHeader>
        <CardTitle className="text-2xl">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription
          className={
            theme === THEME_MODE.light
              ? " text-gray-600 text-lg"
              : " text-gray-300 text-lg "
          }
        >
          {card.description}
        </CardDescription>
      </CardContent>
      {card.link && (
        <CardFooter className="flex justify-center">
          <Button variant="secondary">
            <Link href={card.link.url}>{card.link.text} </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default CardComponent;
