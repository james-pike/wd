import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
  const images = ['meme1.jpg', 'meme2.jpg', 'meme3.jpg'];
  const isPlaying = useSignal<boolean>(false);
  const isMobile = useSignal<boolean>(false); // Signal to track mobile status


  

  


  const shareOnTwitter = $(() => {

    const twitterUrl = `https://twitter.com/intent/retweet?tweet_id=463440424141459456`;
    window.open(twitterUrl, '_blank');
  });


  useVisibleTask$(() => {
    isPlaying.value = true;
  });

  return (
    <Carousel.Root class="carousel-root max-w-6xl mx-auto " draggable={false} autoPlayIntervalMs={2500}
    bind:autoplay={isPlaying} slidesPerView={isMobile.value ? 1 : 1} gap={8}>
    
      <Carousel.Scroller class="carousel-scroller ">
          {/* Carousel slides */}
          {images.map((image, index) => (
          <Carousel.Slide key={image} class="carousel-slide ">
            <img height={400} width={400} src={`/images/${image}`} alt={`Meme ${index + 1}`} />
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      {/* <Carousel.Pagination class="carousel-pagination">
        {images.map((color, index) => (
          <Carousel.Bullet class="carousel-pagination-bullet" key={color}>
            {index + 1}
          </Carousel.Bullet>
        ))}
      </Carousel.Pagination> */}
  <div class="carousel-buttons flex justify-between bg-primary/30 items-center w-full p-4">
  <div class="flex items-center space-x-4">
    {/* Left buttons for navigation */}
    <Carousel.Previous>Prev</Carousel.Previous>
    <Carousel.Next>Next</Carousel.Next>
    <button
      class="carousel-btn flex items-center space-x-2"
      aria-label="Share on Twitter"
      onClick$={() => shareOnTwitter()}
    >
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg>
    </button>
  </div>
  <div class="flex items-center space-x-4">
    {/* Right buttons for sharing */}
    <button
      class="carousel-btn flex items-center space-x-2"
      aria-label="Share on Twitter"
      onClick$={() => shareOnTwitter()}
    >
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-contract"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 21h-2a3 3 0 0 1 -3 -3v-1h5.5" /><path d="M17 8.5v-3.5a2 2 0 1 1 2 2h-2" /><path d="M19 3h-11a3 3 0 0 0 -3 3v11" /><path d="M9 7h4" /><path d="M9 11h4" /><path d="M18.42 12.61a2.1 2.1 0 0 1 2.97 2.97l-6.39 6.42h-3v-3z" /></svg>
    </button>
    <button
      class="carousel-btn flex items-center space-x-2"
      aria-label="Share on Twitter"
      onClick$={() => shareOnTwitter()}
    >
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
    </button>

    <button
      class="carousel-btn flex items-center space-x-2"
      aria-label="Share on Twitter"
      onClick$={() => shareOnTwitter()}
    >
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-repeat"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /></svg>
    </button>
  </div>
</div>

    </Carousel.Root>
  );
});