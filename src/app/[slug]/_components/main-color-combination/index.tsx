"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { colorAtom } from "@/app/app.atom";
import { useRecoilValue } from "recoil";
import ColorCombinationPalette from "@/app/[slug]/_components/color-combination-palette";
import { useParams } from "next/navigation";
import { combinationData } from "@/type/combination";
import { LikeButton } from "@/app/_elements";
import BottomColorIndicator from "@/app/[slug]/_components/bottom-colors";

const MainColorCombination = () => {
  const params = useParams<{ slug: string }>();
  const color = useRecoilValue(colorAtom);

  const loadImage = useMemo(() => {
    const combination = combinationData.find(
      (item) => item.combination.slug === params.slug,
    );

    return require(
      `@/assets/thumbnails/${combination?.combination.featuredImage.url}`,
    );
  }, [params.slug]);

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
        className={"rounded-b-2xl overflow-hidden"}
      />
      <BottomColorIndicator color={color} />
    </div>
  );
};

export default MainColorCombination;
