import { component$ } from '@builder.io/qwik';
import { Popover } from '../ui/Popover';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';


export default component$(() => {
  return (
    <Popover.Root flip={false} gutter={8}>
      <Popover.Trigger >
      <a href="/resources" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Free Website & SEO Audit!</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
      </Popover.Trigger>
      <Popover.Panel>
        <div class="grid gap-4 w-full">
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



