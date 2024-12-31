import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
       <div class="relative bg-white/80 rounded-t-sm dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 border-radius-dot-25 rounded-b-xl">


    <section class="relative rounded-b-xl rounded-t-sm  md:-mt-[76px] not-prose mx-1.5 my-1.5 bg-white/90 dark:bg-gray-900/90 border-radius-dot-25">
        
      
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-10 ">
          <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
          <div class="pt-8 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
            <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
              <h1 class="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter text-primary mb-4 font-heading dark:text-gray-200">
                Build A Better Website <br class="hidden lg:block" />{" "}
                {/* <span class="text-sky-500">The Kaspian Frog</span> */}
              </h1>
              <div class="max-w-3xl mx-auto lg:max-w-none">
                <p class="text-xl mb-6 dark:text-slate-300">
                  Join the fun with <span class="font-semibold">Froppy</span>—the hottest memecoin on the Kaspa chain. Fast, fun, and ready for the next big trend.
                </p>

                <div class=" sm:max-w-md m-auto grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl">
                  <div class="flex w-full">
                    <button class="btn w-full bg-blue-200 py-1 dark:bg-blue-400">
                      Design
                    </button>
                  </div>
                  <div class="flex w-full">
                    <button class="btn w-full bg-red-200 py-1 dark:bg-red-400">
                      Development
                    </button>
                  </div>
                  <div class="flex w-full">
                    <button class="btn w-full bg-green-200 p-1 dark:bg-green-400">
                      Branding
                    </button>
                  </div>
                  <div class="flex w-full">
                    <button class="btn w-full bg-yellow-200 p-1 dark:bg-yellow-400">
                      Marketing
                    </button>
                  </div>
                </div>

              </div>
            </div>




            <div class="basis-1/2 ">
              {/* <Image
    src="/images/froppy.png"
    layout="intrinsic" 
    width={443.7}
    height={554.4}
    alt="Kroppy Hero Image (Fun Dog)"
    class="mx-auto lg:mr-0 w-full max-w-[90%] sm:max-w-[70%] drop-shadow-2xl rounded-md"
    priority={true}
    breakpoints={[320, 480, 640, 768, 1024]}
  /> */}
            </div>

          </div>
        
        </div>


    </section>
    </div>
  );
});