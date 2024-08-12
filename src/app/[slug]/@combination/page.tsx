"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import MainColorCombination from "@/app/home/_components/main-color-combination";
import RelatedCombination from "@/app/home/_components/related-combination";
import { useRecoilValue } from "recoil";
import { colorAtom } from "@/app/app.atom";

const ColorCombinationPage = () => {
  const color = useRecoilValue(colorAtom);
  return (
    <div className={"flex flex-col items-center w-3/4 gap-24"}>
      <MainColorCombination />
      <RelatedCombination />
      <div className={"flex flex-col gap-8 items-center"}>
        <p className={"text-[48px] font-[500] leading-tight text-center"}>
          Use this color palette and create beautiful design and documents!
        </p>
        <Button
          style={{ backgroundColor: color.combination.color.hex }}
          className={"text-black rounded"}
          size={"default"}
        >
          Browse templates
        </Button>
      </div>
    </div>
  );
};

export default ColorCombinationPage;
