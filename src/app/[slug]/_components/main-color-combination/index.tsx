"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { colorAtom } from "@/app/app.atom";
import { useRecoilValue } from "recoil";
import ColorCombinationPalette from "@/app/[slug]/_components/color-combination-palette";
import { combinationData } from "@/type/combination";
import { LikeButton } from "@/app/_elements";
import BottomColorIndicator from "@/app/[slug]/_components/bottom-colors";

type MainColorCombinationProps = {
  slug: string;
};

const MainColorCombination = ({ slug }: MainColorCombinationProps) => {
  const color = useRecoilValue(colorAtom);

  const loadImage = useMemo(() => {
    const combination = combinationData.find(
      (item) => item.combination.slug === slug,
    );

    return require(
      `@/assets/thumbnails/${combination?.combination.featuredImage.url}`,
    );
  }, [slug]);

  return (
    <div className={"flex flex-col rounded-t-2xl overflow-hidden"}>
      <div className={"relative"}>
        <Image
          priority
          width={960}
          height={640}
          src={loadImage}
          style={{
            objectFit: "cover",
          }}
          className={"transition-all duration-200"}
          alt={"thumb-nail"}
        />
        <LikeButton combination={color.combination} />
      </div>
      <ColorCombinationPalette
        colors={color.combination.colors.map((val) => val.hex)}
        className={"rounded-b-2xl overflow-hidden h-48"}
      />
      <BottomColorIndicator color={color} />
    </div>
  );
};

export default MainColorCombination;
