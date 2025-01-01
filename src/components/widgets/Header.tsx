import { $, component$, useComputed$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import { Logo } from "../common/Logo";
import {
  ThemeConfig,
  ThemeFonts,
  ThemeStyles,
  ThemeBaseColors,
  ThemePrimaryColors,
  ThemeBorderRadiuses,
} from "@qwik-ui/utils";
import { useTheme } from "~/lib/provider";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

import FAQ from "./FAQ";

export default component$(() => {
  const { themeSig } = useTheme();
  const { menu } = useContent();

  const store = useStore({
    theme: (typeof window !== "undefined" && window.localStorage.theme) || "light",
    primaryColor: (typeof window !== "undefined" && window.localStorage.primaryColor) || ThemePrimaryColors.CYAN600,
    isScrolling: false,
    isExpanded: false,
  });

  const themeComputedObjectSig = useComputed$((): ThemeConfig => {
    if (!store.theme || store.theme === "light") {
      return {
        font: ThemeFonts.SANS,
        mode: store.theme,
        style: ThemeStyles.SIMPLE,
        baseColor: ThemeBaseColors.SLATE,
        primaryColor: store.primaryColor,
        borderRadius: ThemeBorderRadiuses["BORDER-RADIUS-0"],
      };
    }

    if (store.theme === "dark") {
      return {
        font: ThemeFonts.SANS,
        mode: store.theme,
        style: ThemeStyles.SIMPLE,
        baseColor: ThemeBaseColors.SLATE,
        primaryColor: store.primaryColor,
        borderRadius: ThemeBorderRadiuses["BORDER-RADIUS-0"],
      };
    }

    let themeArray: string[] = [];
    if (themeSig?.value) {
      themeArray = Array.isArray(themeSig.value)
        ? themeSig.value
        : themeSig.value.split(" ");
    }

    return {
      font: themeArray[0],
      mode: themeArray[1],
      style: themeArray[2],
      baseColor: themeArray[3],
      primaryColor: themeArray[4],
      borderRadius: themeArray[5],
    };
  });

  useVisibleTask$(() => {
    store.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    const storedPrimaryColor = localStorage.getItem("primaryColor");
    store.primaryColor = storedPrimaryColor || "defaultColor";
  });

  const themeStoreToThemeClasses$ = $((): string => {
    const { font, mode, style, baseColor, primaryColor, borderRadius } =
      themeComputedObjectSig.value;
    return [font, mode, style, baseColor, primaryColor, borderRadius].join(" ");
  });

 

  return (
    <>
<div class="relative">
  {/* Header */}
  <header
    id="header"
    class={`sticky top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out ${
      store.isScrolling
        ? " md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900"
        : ""
    }`}
    window:onScroll$={() => {
      if (!store.isScrolling && window.scrollY >= 10) {
        store.isScrolling = true;
      } else if (store.isScrolling && window.scrollY < 10) {
        store.isScrolling = false;
      }
    }}
  >
    <div class="border-radius-dot-25 bg-white/90 dark:bg-gray-900/90">
      <div class="relative text-default py-3 sm:py-2 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center" href={"/"}>
            <Logo />
          </a>
          <div class="flex items-center md:hidden">
            <button
              type="button"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
              aria-label="Toggle menu"
              onClick$={() => {
                store.isExpanded = !store.isExpanded;
                document.body.classList.toggle("overflow-hidden", store.isExpanded);
              }}
            >
              {store.isExpanded ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button
            class="p-2 rounded focus:outline-none focus:ring focus:ring-gray-300 dark:focus:ring-gray-700"
        
          >
            {store.theme === "light" ? <IconMoon /> : <IconSun />}
          </button>
        </div>
      </div>
    </div>
  </header>

  {/* Overlay Accordion */}
  {store.isExpanded && (
    <div
      class={`absolute inset-x-0 top-[calc(var(--header-height))] z-30 bg-white dark:bg-gray-900 transition-transform duration-300 ${
        store.isExpanded ? "translate-y-0" : "-translate-y-full"
      }`}
      style="--header-height: 4rem;" // Adjust based on your header's height
    >
      <div class="relative">
        <button
          type="button"
          class="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          aria-label="Close menu"
          onClick$={() => {
            store.isExpanded = false;
            document.body.classList.remove("overflow-hidden");
          }}
        >
          Close
        </button>
        <FAQ />
      </div>
    </div>
  )}

  {/* Hero Section */}
  <div class="relative">
  
  </div>
</div>


    </>
  );
});
