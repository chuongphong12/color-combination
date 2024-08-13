"use client";

import React, { JSX, useState } from "react";
import { cn } from "@/lib/utils";
import { ContrastText } from "@/app/_elements";
import { Check } from "lucide-react";

type ColorPaletteProps = {
  colors: string[];
  canCopy?: boolean;
} & JSX.IntrinsicElements["div"];

const ColorCombinationPalette = ({
  colors,
  canCopy = true,
  className,
  ...props
}: ColorPaletteProps) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setTimeout(() => setIsCopy(true), 300);
  };

  return (
    <div className={cn("w-full flex flex-row rounded", className)} {...props}>
      {colors.map((value, index) => (
        <div
          key={index + Math.random()}
          style={{ backgroundColor: value }}
          className={cn(
            "group relative w-full h-full flex flex-row justify-center items-center cursor-pointer",
          )}
          onMouseLeave={(e) => {
            setIsCopy(false);
          }}
          onClick={
            canCopy && !isCopy ? () => handleCopyColor(value) : undefined
          }
        >
          {canCopy && (
            <ContrastText
              className={cn(
                "text-xl transform translate-y-full opacity-0 delay-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-150 ease-in-out",
              )}
              hex={value}
            >
              {isCopy ? <Check /> : "Copy"}
            </ContrastText>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorCombinationPalette;
