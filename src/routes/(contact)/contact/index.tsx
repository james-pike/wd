import { component$ } from "@builder.io/qwik";
import GridTabs from "~/components/widgets/PriceTabs";


export default component$(() => {
  return (
    <>
      <GridTabs highlight="Get In Touch"
        title="Contact Us For A Consultation"
        subtitle="We're glad to learn about your business and discuss possible options."
         items={[ {

          },
        ]}
      />
      
    </>
  );
});

