import { component$, useStore } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { Tabs } from '../Tabs';
import { Card } from '../Card';
import { Label } from '../Label';
import { Input } from '../Input';
import { Button } from '../button';

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
<div class="relative bg-white/80 dark:bg-gray-900 overflow-hidden flex items-center justify-center pt-2 pb-3">
<div class="grid-background absolute inset-0 p-1 -mt-16 grid grid-cols-6 gap-1 transform -skew-y-0 scale-100">
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

 

      <div class="relative max-w-4xl mx-auto px-3 lg:px-8">

        
      <div class="max-w-3xl mx-auto lg:mt-24 bg-white/95 dark:bg-slate-900/95 rounded-lg pt-8 p-6">
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />


      <Tabs.Root class="max-w-[400px]">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Tab>Account</Tabs.Tab>
        <Tabs.Tab>Password</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
    </Tabs.Root>
    </div>
      </div>
    </div>
  );
});