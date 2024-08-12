"use client";

import React, { useState } from "react";
import { colorAtom } from "@/app/app.atom";
import { useRecoilState } from "recoil";
import ColorCombinationPalette from "@/app/[slug]/_components/color-combination-palette";
import { combinationData } from "@/type/combination";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const RelatedCombination = () => {
  const router = useRouter();
  const [color, setColor] = useRecoilState(colorAtom);
  const [visibleItems, setVisibleItems] = useState(5);

  const handleSeeMore = () => {
    setVisibleItems((prevState) => prevState + 5);
  };

  const handleChangeCombination = (id: number) => {
    const newCombination = combinationData.find(
      (color) => color.combination.id === id,
    );

    if (newCombination) {
      setColor(newCombination);
      router.push(newCombination.combination.slug, { scroll: false });
    }
  };

  return (
    <div className={"w-full flex flex-col gap-8"}>
      <p className={"text-[48px] font-[500] leading-tight text-center"}>
        Related Combinations
      </p>
      <div className={"w-full grid grid-cols-2 gap-12"}>
        {color.relatedCombinations
          .slice(
            0,
            visibleItems > color.relatedCombinations.length
              ? color.relatedCombinations.length
              : visibleItems,
          )
          .map((related) => {
            return (
              <div
                key={related.id}
                className={
                  "relative group transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col shadow-lg cursor-pointer"
                }
                onClick={() => handleChangeCombination(related.id)}
              >
                <ColorCombinationPalette
                  colors={related.colors}
                  canCopy={false}
                  height={24}
                  className={"overflow-hidden group-hover:rounded-b-none z-10"}
                />
                <div
                  className={
                    "absolute bottom-0 w-full top-[90%] h-9 shadow-lg rounded-b flex flex-row justify-between px-3 py-2 bg-white transform translate-y-0 opacity-0 delay-100 group-hover:translate-y-2 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                  }
                >
                  <p className={"text-[14px]"}>{related.name}</p>
                  <div className={"flex flex-row items-center gap-2"}>
                    {related.liked ? (
                      <Heart size={14} fill={"red"} color={"red"} />
                    ) : (
                      <Heart size={14} />
                    )}
                    <p className={"text-[14px]"}>{related.likes}</p>
                  </div>
                </div>
              </div>
            );
          })}

        {visibleItems < color.relatedCombinations.length && (
          <Button
            variant={"secondary"}
            className={
              "w-full h-24 rounded transform shadow hover:shadow-lg transition-all duration-300 ease-in-out"
            }
            onClick={handleSeeMore}
          >
            <p className={"text-[18px] font-[500]"}>See more combinations</p>
          </Button>
        )}
      </div>
    </div>
  );
};

export default RelatedCombination;
