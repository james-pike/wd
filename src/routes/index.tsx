import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/widgets/Hero";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>

<Hero />


      {/* <Memes highlight="Froppy Memes"
        title="Share Memes & Win Prizes"
        subtitle="Top Raiders receive bonus Froppy every week"
         items={[ {

          },
        ]}
      /> */}


      
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
