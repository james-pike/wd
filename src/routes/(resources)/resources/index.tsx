import { component$ } from "@builder.io/qwik";
import Audit from "~/components/widgets/Audit";



export default component$(() => {
  return (
    <>
      <Audit highlight="Reviews"
        title="Reviews From Our Clients"
        subtitle="Choose a one-time payment or pay it off over a longer period."
         items={[ {

          },
        ]}
      />
      
    </>
  );
});

