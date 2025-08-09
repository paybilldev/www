import Link from "next/link";
import { IconLinkedinSolid, IconTwitterX } from "..";
import { cn } from "~/lib/utils";

const ShareArticleActions = ({
  title,
  slug,
  iconSize = 20,
  basePath = "https://paybill.dev/blog/",
  className,
}: {
  title: string;
  slug: string;
  iconSize?: number;
  basePath?: string;
  className?: string;
}) => {
  const permalink = encodeURIComponent(`${basePath}${slug}`);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={cn("mt-4 flex items-center gap-4", className)}>
      <Link
        aria-label="Share on X"
        href={`https://twitter.com/intent/tweet?url=${permalink}&text=${encodedTitle}`}
        target="_blank"
        className="text-foreground-lighter hover:text-foreground"
      >
        <IconTwitterX size={iconSize} />
      </Link>

      <Link
        aria-label="Share on Linkedin"
        href={`https://www.linkedin.com/shareArticle?url=${permalink}&text=${encodedTitle}`}
        target="_blank"
        className="text-foreground-lighter hover:text-foreground"
      >
        <IconLinkedinSolid size={iconSize} />
      </Link>
    </div>
  );
};

export default ShareArticleActions;
