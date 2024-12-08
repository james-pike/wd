import { component$, useStore } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';

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

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default component$((props: Props) => {
    const { title = "", subtitle = "", highlight = "", classes = {} } = props;
  const gridItemsStore = useStore({
    gridItems: new Array(30).fill(null).map(() => ({
      animationDelay: `${getRandomInt(0, 5)}s`,
      animationDuration: `${getRandomInt(3, 6)}s`,
    })),
  });

  return (
<div class="relative bg-white/80 dark:bg-gray-900 overflow-hidden flex items-center justify-center pt-4 pb-6">
<div class="grid-background absolute inset-0 p-2 -mt-16 grid grid-cols-6 gap-1 transform -skew-y-0 scale-100">
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

 

      <div class="relative max-w-4xl mx-auto px-4 lg:px-8">

        
      <div class="max-w-3xl mx-auto lg:mt-24 bg-white/95 dark:bg-slate-900/95 rounded-lg pt-8 p-6">
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      <form action="#" class="grid max-w-screen-md grid-cols-1 mx-auto gap-x-8 gap-y-6 pt-0 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Names
          </label>
          <input type="text" id="first-name"
            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="James Pike" required/>
        </div>

        {/* <div>
          <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Last name
          </label>
          <input type="text" id="last-name"
            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Green" required/>
        </div> */}

        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input type="email" id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="james@webdev.ca" required/>
        </div>

        <div>
          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Phone number
          </label>
          <input type="number" id="phone-number"
            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="(613) 345-6789" required/>
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
            <option value="US" selected>Canada</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
            <option value="GB">United Kingdom</option>
            <option value="ES">Spain</option>
            <option value="CA">United States</option>
            <option value="JP">Japan</option>
            <option value="CN">People's Republic of China</option>
          </select>
        </div>

        {/* <div>
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
        </div> */}

        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Your message
          </label>
          <textarea id="message" rows={2}
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="I need a website for my business, it's.."></textarea>
        </div>

        <div class="sm:col-span-2"> 
          <div class="flex items-start">
            <input type="checkbox" id="terms" value=""
              class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="terms" class="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
              I confirm that you have read and agreed to
              <a href="#" title="" class="font-medium text-gray-900 hover:no-underline underline dark:text-white">
                Terms of Service
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
  );
});