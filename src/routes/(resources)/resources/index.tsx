import { component$ } from "@builder.io/qwik";
import Audit from "~/components/widgets/Audit";



export default component$(() => {
  return (
    <>
      <Audit highlight="Free Website Audit"
        title="Let's analyze your current site"
        subtitle="Enter your web domain and we'll email you a performance audit."
         items={[ {
          },
        ]}
      />

      
    </>
  );
});

