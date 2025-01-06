import { component$ } from '@builder.io/qwik';
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

export default component$((props: Props) => {
  const { title = "", subtitle = "", highlight = "", classes = {} } = props;

  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-1.5 border-radius-dot-25 rounded-lg">
      <div class="relative max-w-7xl mx-auto px-1.5 py-1.5 lg:px-8">
        <div class="max-w-7xl mx-auto lg:mt-24 bg-white/95 dark:bg-slate-900/95 rounded-lg pt-6 p-3 border-radius-dot-25">
          <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />

          <form action="#" class="grid max-w-screen-md pt-2 grid-cols-1 mx-auto gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Website URL
                </label>
                <input type="text" id="first-name"
                  class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="webdev.ca" required />
              </div>
             
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input type="email" id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="james@webdev.ca" required />
              </div>


              <button type="submit"
                class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Generate Website Audit</button>
            </form>
        </div>
      </div>
    </div>
  );
});
