import React from "react";
import { SUJETS } from "@/lib/sujets-themes";
import CardList from "@/components/cards/card-lists";

export default function Home() {
  return (
    <main className={" w-full text-center text-4xl p-4  "}>
      <section>
        <h2 className={"text-4xl text-center"}>
          Bienvenue sur Vie Publique Bénin !
        </h2>
        <CardList data={SUJETS} />
      </section>
    </main>
  );
}
