"use client";

import React from "react";
import Image from "next/image";
import top_bg from "@/assets/images/foreground.png";
import { useRecoilValue } from "recoil";
import { colorAtom } from "@/app/app.atom";
import { cn } from "@/lib/utils";

const HeaderBackgroundComponent = () => {
  const color = useRecoilValue(colorAtom);

  return (
    <div
      style={{
        backgroundColor: color.combination.color.hex,
      }}
      className={cn(
        "absolute top-0 left-0 w-full h-[900px] overflow-hidden -z-10 transition-all duration-200",
      )}
    >
      <Image
        priority
        className={"absolute bottom-0 left-0 w-full h-full"}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={top_bg}
        alt={"top-background"}
      />
    </div>
  );
};

export default HeaderBackgroundComponent;
