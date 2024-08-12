import React, { ReactNode } from "react";

type HomeLayoutProps = {
  children: ReactNode;
  combination: ReactNode;
};

const HomeLayout = ({ children, combination }: HomeLayoutProps) => {
  return (
    <div
      className={"relative flex flex-col items-center max-w-screen-xl gap-36"}
    >
      {children}
      {combination}
    </div>
  );
};

export default HomeLayout;
