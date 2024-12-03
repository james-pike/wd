import { component$, useStore} from '@builder.io/qwik';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default component$(() => {
    const gridItemsStore = useStore({
      gridItems: new Array(30).fill(null).map(() => ({
        animationDelay: `${getRandomInt(0, 5)}s`,
        animationDuration: `${getRandomInt(3, 6)}s`,
      })),
    });
  
    return (
      <div class="relative min-h-screen flex items-center -mt-10 justify-center bg-gradient-to-b from-primary via-white to-primary overflow-hidden">
        {/* Grid background with glowing gaps */}
        <div class="grid-background absolute inset-0 p-2 grid grid-cols-6 gap-1 transform -skew-y-6 scale-100">
          {gridItemsStore.gridItems.map((item, index) => (
            <div
              key={index}
              class="bg-primary rounded animate-pulse"
              style={{
                animationDelay: item.animationDelay,
                animationDuration: item.animationDuration,
              }}
            />
          ))}
        </div>
  
        {/* Moving light effect */}
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-gradient-move" />
  
        {/* Content */}
        <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
          <div class="lg:basis-1/2 pb-10 md:pb-16">
            <h1 class="text-6xl md:text-6xl text-tBase font-bold leading-tighter tracking-tighter mb-4 font-heading">
              Build A Better {" "}
              <br class="hidden lg:block" />
              <span class="text-primary">Website</span>
            </h1>
            <p class="text-xl text-muted text-tBase mb-6 text-gray-900 max-w-3xl mx-auto lg:max-w-none">
              Master the lines, embrace the quirks, and turn every twist into a masterpiece—because
              art's all about the journey, not the perfect line.
            </p>
            <div class="sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
              <a
                class="btn bg-primary text-white font-bold w-full p-2"
                href="https://aymansor.github.io/Etch-a-Sketch/"
                target="_blank"
                rel="noopener"
              >
                Start Etching
              </a>
              <button class="btn w-full bg-secondary p-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  