import { component$ } from "@builder.io/qwik";
import Audit from "~/components/widgets/Audit";



export default component$(() => {
  return (
    <>
      <Audit highlight="Reviews"
        title="Reviews From Our Clients"
        subtitle="Case studies and testimonials from our past work."
         items={[ {

          },
        ]}
      />
      
    </>
  );
});

