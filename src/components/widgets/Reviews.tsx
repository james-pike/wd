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
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 my-1 border-radius-dot-25 rounded-lg">
      <div class="relative max-w-4xl mx-auto px-1.5 py-1.5 lg:px-8">
        <div class="max-w-3xl mx-auto lg:mt-24 bg-white/95 dark:bg-slate-900/95 rounded-lg pt-8 p-3 border-radius-dot-25">
          <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />

          {/* Centering the Tabs */}
        </div>
      </div>
    </div>
  );
});
