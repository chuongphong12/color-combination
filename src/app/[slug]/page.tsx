import { Breadcrumb, ContrastText } from "@/app/_elements";
import { breadcrumbList } from "@/type/app-constants";
import { combinationData } from "@/type/combination";
import { useMemo } from "react";

export default function Home({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const currentCombination = useMemo(
    () => combinationData.find((item) => item.combination.slug === slug),
    [slug],
  );

  return (
    <div className={"relative flex flex-col items-center w-4/5 gap-8"}>
      {currentCombination && (
        <>
          <Breadcrumb
            list={breadcrumbList}
            hex={currentCombination?.combination.color.hex}
          />
          <h1 className="text-5xl font-semibold leading-[120%] text-center">
            <ContrastText hex={currentCombination.combination.color.hex}>
              {currentCombination.combination.name}
            </ContrastText>
            <ContrastText hex={currentCombination.combination.color.hex}>
              color combination
            </ContrastText>
          </h1>
        </>
      )}
    </div>
  );
}
