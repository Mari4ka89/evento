import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  nextPath: string;
  previousPath: string;
};

const btnStyles =
  "white-text flex items-center gap-x-2 py-5 px-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

export default function PaginationControls({
  nextPath,
  previousPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
