import { component$ } from "@builder.io/qwik";
import Reviews from "~/components/widgets/Reviews";
import TestimonialCarousel from "~/components/widgets/TestimonialCarousel";



export default component$(() => {
  return (
    <>
      <Reviews highlight="Pricing"
        title="Flexible Pricing Options"
        subtitle="Choose a one-time payment or pay it off over a longer period."
         items={[ {

          },
        ]}
      />
      <TestimonialCarousel/>
    </>
  );
});

