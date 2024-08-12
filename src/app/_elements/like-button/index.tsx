"use client";

import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { produce } from "immer";
import { Combination } from "@/type/combination";
import { useSetRecoilState } from "recoil";
import { colorAtom, combinationState } from "@/app/app.atom";

type LikeButtonProps = {
  combination: Combination;
};

const LikeButton = ({ combination }: LikeButtonProps) => {
  const setColor = useSetRecoilState(colorAtom);
  const setCombineData = useSetRecoilState(combinationState);

  const handleLike = () => {
    setColor(
      produce((draft) => {
        draft.combination.liked = !draft.combination.liked;
        if (draft.combination.liked) {
          draft.combination.likes += 1;
        } else {
          draft.combination.likes -= 1;
        }
      }),
    );
    setCombineData(
      produce((draft) => {
        const currentIdx = draft.findIndex(
          (item) => item.combination.id === combination.id,
        );
        if (currentIdx !== -1) {
          draft[currentIdx].combination.liked =
            !draft[currentIdx].combination.liked;
          if (draft[currentIdx].combination.liked) {
            draft[currentIdx].combination.likes += 1;
          } else {
            draft[currentIdx].combination.likes -= 1;
          }
        }
      }),
    );
  };
  return (
    <Button
      className={
        "absolute top-4 right-4 flex flex-row gap-2 w-fit h-11 shadow-lg"
      }
      variant={"secondary"}
      onClick={handleLike}
    >
      {combination.liked ? <Heart color={"red"} fill={"red"} /> : <Heart />}
      <p>{combination.likes}</p>
    </Button>
  );
};

export default LikeButton;
