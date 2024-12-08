import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter";
import IconInstagram from "~/components/icons/IconInstagram";
import IconFacebook from "~/components/icons/IconFacebook";
import IconGithub from "~/components/icons/IconGithub";


export default component$(() => {
  const links = [
    {
      title: "Services",
      items: [
        { title: "Web Design", href: "#" },
        { title: "Development", href: "#" },
        { title: "Hosting Solutions", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Case Studies", href: "#" },
        { title: "Client Testimonials", href: "#" },
        { title: "Blog", href: "#" },
      ],
    },
    // {
    //   title: "Support",
    //   items: [
    //     { title: "Contact Us", href: "#" },
    //     { title: "FAQs", href: "#" },
    //   ],
    // },
    // {
    //   title: "Company",
    //   items: [
    //     { title: "About Us", href: "#" },
    //     { title: "Privacy Policy", href: "#" },
    //   ],
    // },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    { label: "Github", icon: IconGithub, href: "#" },
  ];

  return (
    <footer class="py-3 bg-gradient-to-r from-bgAccent via-secondary to-bgLight px-3">
      <div class="max-w-7xl mx-auto px-4 bg-bgAccent dark:bg-gray-900 rounded-lg shadow-lg">
        <div class="grid grid-cols-12 gap-4 gap-y-4 sm:gap-8 pt-6 pb-2 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-4">
              <Link class="inline-block font-bold text-2xl" href={"/"}>
                Webdev.ca
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Transform your online presence with our custom web design and development services. We help businesses create stunning, fast, and secure websites.
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-3">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-1">
                      <Link
                        class="text-gray-600 hover:text-primary hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between pb-2 md:py-8">
          <ul class="flex mb-2 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>
          <div class="text-sm text-gray-700 mr-4 pb-2 dark:text-slate-400 flex items-center">
            {/* Replace favicon span with your Logo component */}
         
            Made with {" "}<span class="text-primary mx-1">♥</span> by&nbsp;
            <a class="text-gray-900 underline dark:text-gray-200" href="#">
              Webdev.ca
            </a>{" "}
            <span class="hidden md:inline"> · All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
});