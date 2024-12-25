import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import { APP_STATE_CONTEXT_ID } from "~/_state/app-state-context-id";
import { AppState } from "~/_state/app-state.type";
import Footer from "~/components/widgets/Footer";

// import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

const gridItemsHTML = new Array(30)
  .fill(null)
  .map(
    () =>
      `<div class="bg-primary animate-pulse" style="animation-delay: ${Math.random() * 5}s; 
    animation-duration: ${3 + Math.random() * 3}s"></div>`
  )
  .join("");

export default component$(() => {
  const appState: AppState = {
    featureFlags: {
      showStyled: true,
      showNeumorphic: false,
    },
  };

  useContextProvider(APP_STATE_CONTEXT_ID, appState);

  return (
    <>
        <div
        class="grid-background dark:bg-black absolute inset-0 p-1 -z-10 grid grid-cols-6 gap-1"
        dangerouslySetInnerHTML={gridItemsHTML}
      ></div>
      <Header />
    
      <main>
        <Slot />
      </main>
      <Footer/>
    </>
  );
});
