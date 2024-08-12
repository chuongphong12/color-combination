"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import top_bg from "@/assets/images/foreground.png";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { combinationData } from "@/type/combination";

const HeaderBackground = () => {
  const params = useParams<{ slug: string }>();

  const current = useMemo(
    () =>
      combinationData.find((color) => color.combination.slug === params.slug),
    [params],
  );

  return (
    <div
      style={{
        backgroundColor: current?.combination.color.hex,
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

export default HeaderBackground;
