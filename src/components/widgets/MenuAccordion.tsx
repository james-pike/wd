import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

export default component$(() => {
  return (
    <Accordion.Root class="w-full px-5 dark:text-gray-50 ">
      {/* Services Section */}
      <Accordion.Item>
        <Accordion.Trigger class="text-xl flex justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-primary">
          <span>About</span>
        </Accordion.Trigger>
        <Accordion.Content class=" py-2">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/about" class="block text-lg py-3 px-2">Web Design</a>
          </div>
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/development" class="block text-lg py-3 px-2">Development</a>
          </div>
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/seo" class="block text-lg py-3 px-2">SEO Optimization</a>
          </div>
          <div class="hover:bg-primary/35 transition">
            <a href="/branding" class="block text-lg py-3 px-2">Brand Strategy</a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Trigger class="text-xl flex justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-primary">
          <span>About</span>
        </Accordion.Trigger>
        <Accordion.Content class=" py-2">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/about" class="block text-lg py-3 px-2">Web Design</a>
          </div>
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/development" class="block text-lg py-3 px-2">Development</a>
          </div>
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/seo" class="block text-lg py-3 px-2">SEO Optimization</a>
          </div>
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition">
            <a href="/branding" class="block text-lg py-3 px-2">Brand Strategy</a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Trigger class="text-xl flex justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-primary">
          <span>About</span>
        </Accordion.Trigger>
        <Accordion.Content class=" py-2">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/about" class="block text-lg py-3 px-2">Web Design</a>
          </div>
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/development" class="block text-lg py-3 px-2">Development</a>
          </div>
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/seo" class="block text-lg py-3 px-2">SEO Optimization</a>
          </div>
          <div class="hover:bg-gray-100 dark:hover:bg-primary transition">
            <a href="/branding" class="block text-lg py-3 px-2">Brand Strategy</a>
          </div>
        </Accordion.Content>
      </Accordion.Item>

    </Accordion.Root>
  );
});
