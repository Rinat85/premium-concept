import { LogoIcon } from "@/shared/ui/logo-icon";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-4" href="/">
      <LogoIcon className="h-12 w-24" />
      {/* <span className="font-bold inline-block">Micro courses</span> */}
    </Link>
  );
}
