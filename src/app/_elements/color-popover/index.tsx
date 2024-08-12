import React, { ReactNode } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ColorObject, ColorPicker } from "react-pick-color";

type ColorPickerPopoverProps = {
  color: string;
  onChange: (color: ColorObject) => void;
  children?: ReactNode;
};

const ColorPickerPopover = ({
  color,
  onChange,
  children,
}: ColorPickerPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {typeof children !== "string" ? (
          children
        ) : (
          <Button variant="text">{children}</Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 shadow-none bg-transparent">
        <ColorPicker color={color} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};

export default ColorPickerPopover;
