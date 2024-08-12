"use client";

import React, { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import MainColorCombination from "@/app/[slug]/_components/main-color-combination";
import RelatedCombination from "@/app/[slug]/_components/related-combination";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { colorAtom, combinationState } from "@/app/app.atom";
import { useParams } from "next/navigation";
import { ContrastText } from "@/app/_elements";

const ColorCombinationPage = () => {
  const params = useParams<{ slug: string }>();
  const combinationData = useRecoilValue(combinationState);
  const setColor = useSetRecoilState(colorAtom);

  const color = useMemo(
    () =>
      combinationData.find((color) => color.combination.slug === params.slug),
    [combinationData, params.slug],
  );

  useEffect(() => {
    if (color) setColor(color);
  }, [color, setColor]);

  return (
    <div className={"flex flex-col items-center w-3/4 gap-24"}>
      <MainColorCombination />
      <RelatedCombination />
      <div className={"flex flex-col gap-8 items-center"}>
        <p className={"text-[48px] font-[500] leading-tight text-center"}>
          Use this color palette and create beautiful design and documents!
        </p>
        {color && (
          <Button
            style={{ backgroundColor: color?.combination.color.hex }}
            className={"text-black rounded"}
            size={"default"}
          >
            <ContrastText hex={color?.combination.color.hex}>
              Browse templates
            </ContrastText>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ColorCombinationPage;
