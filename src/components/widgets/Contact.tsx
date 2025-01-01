import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { Separator } from '../ui/Separator';

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}


export default component$((props: Props) => {
  const { title = "", subtitle = "", highlight = "", classes = {} } = props;

  return (
    <div>
      <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 my-1 border-radius-dot-25 rounded-lg">
        <div class="relative max-w-4xl mx-auto px-1.5 py-1.5 lg:px-8">
          <div class="max-w-3xl mx-auto lg:mt-24 bg-white/95 dark:bg-slate-900/95 rounded-lg pt-6 p-3 border-radius-dot-25">
            <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
            <dl class="mt-10 flex flex-wrap gap-x-10 gap-y-6 text-base/7 text-gray-600">
  <div class="flex items-start gap-x-4">
    <dt class="flex-none">
      <span class="sr-only">Address</span>
      <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    </dt>
    <dd>545 Mavis Island<br/>Chicago, IL 99191</dd>
  </div>
  <div class="flex items-start gap-x-4">
    <dt class="flex-none">
      <span class="sr-only">Telephone</span>
      <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    </dt>
    <dd><a class="hover:text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
  </div>
  <div class="flex items-start gap-x-4">
    <dt class="flex-none">
      <span class="sr-only">Email</span>
      <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    </dt>
    <dd><a class="hover:text-gray-900" href="mailto:hello@example.com">hello@example.com</a></dd>
  </div>
  
</dl>



            <form action="#" class="grid max-w-screen-md pt-8 grid-cols-1 mx-auto gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  First name
                </label>
                <input type="text" id="first-name"
                  class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Bonnie" required />
              </div>

              <div>
                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Last name
                </label>
                <input type="text" id="last-name"
                  class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Green" required />
              </div>

              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input type="email" id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com" required />
              </div>

              <div>
                <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Phone number
                </label>
                <input type="number" id="phone-number"
                  class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="+(12) 345 6789" required />
              </div>

              <div>
                <div class="flex items-center gap-1.5 mb-2">
                  <label for="country" class="block text-sm font-medium text-gray-900 dark:text-gray-300">
                    Country
                  </label>
                  <button type="button" data-popover-target="country-description" class="w-4 h-4">
                    <svg aria-hidden="true" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Show information</span>
                  </button>
                  <div data-popover id="country-description" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                    <div class="p-3 space-y-2">
                      <h3 class="font-semibold text-gray-900 dark:text-white">Country based on fiscal residency</h3>
                      <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                      <h3 class="font-semibold text-gray-900 dark:text-white">Double citizenship</h3>
                      <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
                      <a href="#" class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Read more <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </div>
                <select id="country"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option>Select a country</option>
                  <option value="US" selected>United States</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="GB">United Kingdom</option>
                  <option value="ES">Spain</option>
                  <option value="CA">Canada</option>
                  <option value="JP">Japan</option>
                  <option value="CN">People's Republic of China</option>
                </select>
              </div>

              <div>
                <div class="flex items-center gap-1.5 mb-2">
                  <label for="language" class="block text-sm font-medium text-gray-900 dark:text-gray-300">
                    Language
                  </label>
                  <button type="button" data-popover-target="language-description" class="w-4 h-4">
                    <svg aria-hidden="true" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Show information</span>
                  </button>
                  <div data-popover id="language-description" role="tooltip" class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                    <div class="p-3 space-y-2">
                      <h3 class="font-semibold text-gray-900 dark:text-white">Choosing an international language</h3>
                      <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                      <a href="#" class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Read more <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </div>
                <select id="language"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option>Select a language</option>
                  <option value="US" selected>English (US)</option>
                  <option value="DE">German</option>
                  <option value="FR">French</option>
                  <option value="ES">Spanish</option>
                  <option value="JP">Japanese</option>
                  <option value="NL">Dutch</option>
                </select>
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea id="message" rows={6}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder=""></textarea>
              </div>

              <div class="sm:col-span-2">
                <div class="flex items-start">
                  <input type="checkbox" id="terms" value=""
                    class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="terms" class="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                    I confirm that you have read and agreed to
                    <a href="#" title="" class="font-medium text-gray-900 hover:no-underline underline dark:text-white">
                      Flowbite's Terms of Service
                    </a>
                    and
                    <a href="#" title="" class="font-medium text-gray-900 hover:no-underline underline dark:text-white">
                      Privacy Statement
                    </a>.
                  </label>
                </div>
              </div>

              <button type="submit"
                class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                message</button>
            </form>
        
          </div>

        
        </div>

      </div>
   
    </div>
  );
});
