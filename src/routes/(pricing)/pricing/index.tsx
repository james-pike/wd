import { component$ } from "@builder.io/qwik";

import GridTabs from "~/components/widgets/GridTabs";

export default component$(() => {
  return (
    <>
      <GridTabs highlight="Pricing"
        title="Flexible Pricing Options"
        subtitle="Etchy Sketchy doesn't need tabs, but another site might. "
         items={[ {

          },
        ]}
      />
      
    </>
  );
});

