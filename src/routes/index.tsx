import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/widgets/Hero";
import Memes from "~/components/widgets/Memes";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>

<Hero />


      <Memes highlight="Froppy Memes"
        title="Share Memes & Win Prizes"
        subtitle="Top Raiders receive bonus Froppy weekly (could be tracked in a data table below)"
         items={[ {

          },
        ]}
      />


      
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
