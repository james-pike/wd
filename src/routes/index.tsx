import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Bento from "~/components/widgets/Bento";
import Hero from "~/components/widgets/Hero";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>

<Hero />
<Bento/>




      
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
