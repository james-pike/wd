import { component$ } from "@builder.io/qwik";
import IconMoon from "~/components/icons/IconMoon"
import IconPalette from "../icons/IconPalette";
import ThemePicker from "../ThemePicker";

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;


  // eslint-disable-next-line qwik/no-use-visible-task
 

  return (
    <button
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Toggle between Dark and Light mode"
      onClick$={() => {
      <ThemePicker/>
      }}
    >
      
        <IconPalette class={iconClass} />
    </button>
  );
});
