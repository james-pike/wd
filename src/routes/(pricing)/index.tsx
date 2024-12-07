import { component$ } from "@builder.io/qwik";

import GridTabs from "~/components/widgets/GridTabs";

export default component$(() => {
  return (
    <>
      <GridTabs highlight="Features"
        title="What you get with Qwind"
        subtitle="Sed ut perspiciatios unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
         items={[ {

          },
        ]}
      />
      
    </>
  );
});

