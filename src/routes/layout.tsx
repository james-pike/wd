import { component$, Slot, useContextProvider } from "@builder.io/qwik";
import { APP_STATE_CONTEXT_ID } from "~/_state/app-state-context-id";
import { AppState } from "~/_state/app-state.type";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

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
      <Header />
    
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
