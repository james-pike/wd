import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
import Grid2 from "~/components/widgets/Grid2";
import Footer from "~/components/widgets/Footer";

export default component$(() => {
  return (
    <>
      <Grid2 highlight="Features"
        title="What you get with Qwind"
        subtitle="Sed ut perspiciatios unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
         items={[ {
          //   title: "Qwik + Tailwind CSS Integration",
          //   description:
          //     "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
          //   icon: IconBrandTailwind,
          // },
          // {
          //   title: "Ready-to-use Components",
          //   description:
          //     "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
          //   icon: IconApps,
          // },
          // {
          //   title: "Best Practices",
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          // },
          // {
          //   title: "Excellent Page Speed",
          //   description:
          //     "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
          //   icon: IconRocket,
          // },
          // {
          //   title: "Search Engine Optimization (SEO)",
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          //   icon: IconBrandGoogle,
          // },
          // {
          //   title: "Open to new ideas and contributions",
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          //   icon: IconBulb
          },
        ]}
      />

      <Footer/>

      
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
