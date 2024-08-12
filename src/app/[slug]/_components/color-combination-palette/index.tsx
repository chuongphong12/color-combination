"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import ContrastText from "@/app/_components/contrast-text";

type ColorPaletteProps = {
  colors: string[];
  canCopy?: boolean;
  extraCn?: ClassValue[];
};

const ColorCombinationPalette = ({
  colors,
  canCopy = true,
  extraCn,
}: ColorPaletteProps) => {
  const [selectColor, setSelectedColor] = useState("");

  return (
    <div className={cn("w-full flex flex-row", ...(extraCn ? extraCn : []))}>
      {colors.map((value, index) => (
        <div
          key={index + Math.random()}
          style={{ backgroundColor: value }}
          className={cn(
            "group relative h-48 w-full flex flex-row justify-center items-center cursor-pointer",
          )}
          onMouseEnter={(e) => {
            e.stopPropagation();
            setSelectedColor(value);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            setSelectedColor("");
          }}
          onClick={
            canCopy
              ? () => {
                  navigator.clipboard.writeText(value);
                }
              : undefined
          }
        >
          {canCopy && (
            <ContrastText
              className={cn(
                "transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out",
                selectColor === value ? "block" : "hidden",
              )}
              hex={value}
            >
              Copy
            </ContrastText>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorCombinationPalette;
