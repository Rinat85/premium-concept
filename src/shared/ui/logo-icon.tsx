import Image from "next/image";
import { cn } from "./utils";
import LogoImg from "/public/logo.png";
import { ComponentPropsWithoutRef } from "react";

export function LogoIcon({
  className,
  props,
}: {
  className?: string;
  props?: ComponentPropsWithoutRef<"div">;
}) {
  return (
    <div className={cn("relative", className)} {...props}>
      <Image
        src={LogoImg}
        layout="fill" // Will size the image to fill the parent container
        objectFit="contain" // see - https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
        objectPosition="center" // see - https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
        alt="App logo"
      />
    </div>
  );
}
