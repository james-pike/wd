import { twMerge } from "tailwind-merge";

interface Props {
  title?: string;
  subtitle?: string;
  highlight?: string;
  classes?: Record<string, string>;
}

export const Headline = (props: Props) => {
  const { title = "", subtitle = "", highlight = "", classes = {} } = props;

  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-4xl md:text-5xl ",
    subtitle: subtitleClass = "text-xl",
  } = classes;

  return (title || subtitle || highlight) ? (
      <div class={twMerge("mb-6 md:mx-auto md:mb-12 text-center", containerClass)}>
        {highlight && (
          <p
            class="text-base text-primary font-bold tracking-wide uppercase"
            dangerouslySetInnerHTML={highlight}
          />
        )}
        {title && (
          <h2
            class={twMerge("font-bold leading-tighter dark:text-white text-slate-900 tracking-tighter font-heading text-heading", titleClass)}
            dangerouslySetInnerHTML={title}
          />
        )}

        {subtitle && <p class={twMerge("mt-4 dark:text-white text-slate-900", subtitleClass)} dangerouslySetInnerHTML={subtitle} />}
      </div>
    ) : null;
};