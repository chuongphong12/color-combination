"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { colorAtom, combinationState } from "@/app/app.atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import ColorCombinationPalette from "@/app/home/_components/color-combination-palette";
import ColorPopover from "@/app/_components/color-popover";
import { ColorObject } from "react-pick-color";
import { produce } from "immer";

const MainColorCombination = () => {
  const [color, setColor] = useRecoilState(colorAtom);
  const setCombineData = useSetRecoilState(combinationState);

  const loadImage = useMemo(() => {
    const { combination } = color;

    return require(`@/assets/thumbnails/${combination.featuredImage.url}`);
  }, [color]);

  const handlePickColor = (newColor: ColorObject, index: number) => {
    // setColor(
    //   produce((draft) => {
    //     draft.combination.colors[index].hex = newColor.hex;
    //   }),
    // );
    setCombineData(
      produce((draft) => {
        const currentIdx = draft.findIndex(
          (item) => item.combination.id === color.combination.id,
        );
        if (currentIdx !== -1) {
          draft[currentIdx].combination.colors[index].hex = newColor.hex;
        }
      }),
    );
  };

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
        <Button
          className={
            "absolute top-4 right-4 flex flex-row gap-2 w-fit h-11 shadow-lg"
          }
          variant={"secondary"}
        >
          {color.combination.liked ? (
            <Heart color={"red"} fill={"red"} />
          ) : (
            <Heart />
          )}
          <p>{color.combination.likes}</p>
        </Button>
      </div>
      <ColorCombinationPalette
        colors={color.combination.colors.map((val) => val.hex)}
        extraCn={["rounded-b-2xl overflow-hidden"]}
      />
      <div className={"w-full flex flex-row mt-8"}>
        {color.combination.colors.map((value, index) => (
          <div
            key={index + Math.random()}
            className={"flex flex-col flex-1 items-center"}
          >
            <p className={"flex-1 text-center font-[500] underline"}>
              {value.name}
            </p>
            <ColorPopover
              color={value.hex}
              onChange={(color) => handlePickColor(color, index)}
            >
              <p className={"flex-1 text-center text-slate-400"}>
                {value.hex.toUpperCase()}
              </p>
            </ColorPopover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainColorCombination;
