import React from "react";
import { Progress } from "@/components/ui/progress";

const CustomProgress = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(78), 100);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
};

export default CustomProgress;
