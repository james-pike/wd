import { component$ } from "@builder.io/qwik";

import GridTabs from "~/components/widgets/GridTabs";

export default component$(() => {
  return (
    <>
      <GridTabs highlight="Client Reviews"
        title="Flexible Pricing Options"
        subtitle="Choose a one-time payment or pay it off over a longer period."
         items={[ {

          },
        ]}
      />
      
    </>
  );
});

