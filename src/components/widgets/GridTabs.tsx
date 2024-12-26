import { component$, useStore } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { Tabs } from '../Tabs';
import { Card } from '../Card';


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
<div class="relative bg-white/80 dark:bg-gray-900 overflow-hidden flex items-center justify-center mx-2 my-2 pt-2 pb-3">


 

      <div class="relative max-w-4xl mx-auto px-3 lg:px-8">

        
      <div class="max-w-3xl mx-auto lg:mt-24 bg-white/95 dark:bg-slate-900/95 rounded-lg pt-8 p-6">
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />


      <Tabs.Root class="max-w-[400px]">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Tab>Custom Site - $5000</Tabs.Tab>
        <Tabs.Tab>Monthly Plan - $250</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel>
        <Card.Root>
        <Card.Header>
              <Card.Title class="text-primary">Complete Project - $5000 + hosting</Card.Title>
              <Card.Description>
                A one-time payment covering all services for your custom website:
                design, development, security, and initial setup.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Custom design and development</li>
                <li>Responsive and accessible layout</li>
                <li>SEO optimization</li>
                <li>Initial hosting setup</li>
              </ul>
            </Card.Content>
            <Card.Footer>
              <button class="btn w-full p-2 bg-primary text-white hover:bg-primary-dark">
                Get Started
              </button>
            </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
        <Card.Header>
              <Card.Title class="text-primary">Monthly Plan - $250/month</Card.Title>
              <Card.Description>
                A recurring plan that ensures your website is up-to-date and secure:
                hosting, maintenance, and ongoing support.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Premium hosting services</li>
                <li>Regular updates and backups</li>
                <li>24/7 security monitoring</li>
                <li>Priority customer support</li>
              </ul>
            </Card.Content>
            <Card.Footer>
              <button class="btn w-full p-2 bg-secondary text-white hover:bg-secondary-dark">
                Subscribe Now
              </button>
            </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
    </Tabs.Root>
    </div>
      </div>
    </div>
  );
});