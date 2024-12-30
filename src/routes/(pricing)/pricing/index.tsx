import { component$ } from "@builder.io/qwik";

import PriceTabs from "~/components/widgets/PriceTabs";



export default component$(() => {
  return (
    <>
      <PriceTabs highlight="Pricing"
        title="Flexible Pricing Options"
        subtitle="Choose a one-time payment or pay it off over a longer period."
         items={[ {

          },
        ]}
      />


      
    </>
  );
});

