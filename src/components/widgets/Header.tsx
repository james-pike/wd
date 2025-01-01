import { component$, useStore } from "@builder.io/qwik";
import IconMenu from "~/components/icons/IconMenu";

import { Logo } from "../common/Logo";
import FAQ from "./FAQ";

export default component$(() => {
  const store = useStore({
    isExpanded: false,
  });

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about", children: [{ text: "Team", href: "/about/team" }] },
    { text: "Services", href: "/services", children: [{ text: "Web Development", href: "/services/web" }] },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 flex-none w-full border-b transition ${
        store.isExpanded ? "h-screen" : ""
      }`}
    >
      <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center py-3 px-4 md:px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" class="flex items-center">
            <Logo />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            class="md:hidden text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none"
            onClick$={() => {
              store.isExpanded = !store.isExpanded;

              // Toggle body overflow for mobile
              document.body.classList.toggle("overflow-hidden", store.isExpanded);
            }}
          >
            <IconMenu />
          </button>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex space-x-4">
            {/* Map your navigation items for desktop */}
            {menuItems.map((item, index) => (
              <a key={index} href={item.href} class="hover:text-primary dark:hover:text-primary-light">
                {item.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Items */}
        {store.isExpanded && (
          <div class="md:hidden px-4 py-4">
            <FAQ />
          </div>
        )}
      </div>
    </header>
  );
});
