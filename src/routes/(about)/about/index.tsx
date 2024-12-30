import { component$ } from "@builder.io/qwik";
import About from "~/components/widgets/About";


export default component$(() => {
  return (
    <>
      <About highlight="About Us"
        title="Flexible Pricing Options"
        subtitle="Choose a one-time payment or pay it off over a longer period."
         items={[ {

          },
        ]}
      />
      
    </>
  );
});

