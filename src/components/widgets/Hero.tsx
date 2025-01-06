import { component$, } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 border-radius-dot-25 rounded-lg">


      <section class="relative rounded-lg  md:-mt-[76px] not-prose mx-1.5 my-1.5 bg-white/90 dark:bg-gray-900/90 border-radius-dot-25">



        <div class="relative max-w-7xl mx-auto px-4 sm:px-10 ">
          <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
          <div class="pt-6 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
            <div class="basis-1/2 text-center lg:text-left pb-8 md:pb-16 mx-auto">
            <a href="/resources" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Free Website Audit & SEO Report</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
              <h1 class="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter text-primary mb-4 font-heading dark:text-gray-200">
              
                <span class="text-primary">Build A Better Website</span>
              </h1>
              <div class="max-w-3xl mx-auto lg:max-w-none">
                <p class="text-xl mb-6 dark:text-slate-300">
                  Join the fun with <span class="font-semibold">Froppy</span>—the hottest memecoin on the Kaspa chain. Fast, fun, and ready for the next big trend.
                </p>

                <div class=" sm:max-w-md m-auto grid grid-cols-1 border-radius-dot-25 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-7xl">
                  <div class="flex w-full">
                    <button class="btn w-full bg-primary/20 py-1 rounded-sm dark:bg-primary/40">
                      Learn More
                    </button>
                  </div>
                  <div class="flex w-full">
                    <button class="btn w-full bg-sky-200 py-1 rounded-sm dark:bg-sky-400">
                      Get Started
                    </button>
                  </div>
                  {/* <div class="flex w-full">
                    <button class="btn w-full bg-green-200 p-1 rounded-sm dark:bg-green-400">
                      Share on X
                    </button>
                  </div>
                  <div class="flex w-full">
                    <button class="btn w-full bg-yellow-200 p-1 rounded-sm dark:bg-yellow-400">
                      Partnerships
                    </button>
                  </div> */}
                </div>

              </div>
            </div>




            <div class="basis-1/2 ">
            {/* <object type="image/svg+xml" class="border-radius-dot-25 rounded-md" data="https://cdn.svgator.com/images/2021/10/animated-astronaut-illustration.svg" width="100%"></object> */}
            {/* <img src="https://cdn.svgator.com/images/2021/10/solar-system-animation.svg" width="700" height="400" fetchPriority="high" alt="Animated Vectors Flying to the Moon and Back: About the Space Animation Trend"/> */}
            </div>

          </div>

        </div>

      </section>
    </div>
  );
});
