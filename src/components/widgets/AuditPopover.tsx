import { component$ } from '@builder.io/qwik';
import { Popover } from './Popover';
import { buttonVariants } from '../button';
import { Label } from '../Label';
import { Input } from '../Input';


export default component$(() => {
  return (
    <Popover.Root flip={false} gutter={8}>
      <Popover.Trigger class={buttonVariants({ look: 'outline' })}>
        Open popover.
      </Popover.Trigger>
      <Popover.Panel>
        <div class="grid gap-4">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Dimensions</h4>
            <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right">
              Name
            </Label>
            <Input name="name" id="name" defaultValue="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right">
              Username
            </Label>
            <Input
              name="username"
              id="username"
              defaultValue="@peduarte"
              class="col-span-3"
            />
          </div>
        </div>
        </div>
      </Popover.Panel>
    </Popover.Root>
  );
});



