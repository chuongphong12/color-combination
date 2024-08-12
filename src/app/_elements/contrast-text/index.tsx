"use client";

import React, { JSX, useEffect, useState } from "react";
import { getContrastYIQ } from "@/lib/utils";

type ContrastTextProps = {
  hex: string;
  children: React.ReactNode;
} & JSX.IntrinsicElements["p"];

const ContrastText = ({
  hex,
  children,
  className,
  ...rest
}: ContrastTextProps) => {
  const [textColor, setTextColor] = useState("text-black");

  useEffect(() => {
    const contrastColor = getContrastYIQ(hex);
    setTextColor(contrastColor);
  }, [hex]);

  return (
    <p className={`${textColor} ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default ContrastText;
