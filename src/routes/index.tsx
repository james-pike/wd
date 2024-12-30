import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AuditPopover from "~/components/widgets/AuditPopover";
import FAQ from "~/components/widgets/FAQ";
import Hero from "~/components/widgets/Hero";
import TestimonialCarousel from "~/components/widgets/TestimonialCarousel";

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
<div class="px-40">
<AuditPopover/>
</div>
<Hero />

<TestimonialCarousel  />
<FAQ />

      
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
