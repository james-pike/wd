import { component$ } from "@builder.io/qwik";
import Contact from "~/components/widgets/Contact";


export default component$(() => {
  return (
    <>
      <Contact highlight="Contact Us"
        title="Get in Touch "
        subtitle="We're glad to learn about your business and discuss possible options."
         items={[ {

          },
        ]}
        
      />
      

    </>
  );
});

