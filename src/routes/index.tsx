import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Features from "~/components/widgets/Features";

import Hero from "~/components/widgets/Hero";

// import Features from "~/components/widgets/Features";
// import Steps from "~/components/widgets/Steps";
// import FAQs from "~/components/widgets/FAQs";
// import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";

// import { qwikSerialized } from "~/utils/qwikSerialized";

// const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
// const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
// const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
// const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
// const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>

<Hero />
   <Features highlight="Get In Touch"
        title="Contact Us For A Consultation"
        subtitle="We're glad to learn about your business and discuss possible options."
         items={[ {

          },
        ]}
        
      />

{/* <TestimonialCarousel  />
<FAQ />
<div class="px-40">
<AuditPopover/>
</div> */}

      
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
