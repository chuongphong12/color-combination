import { Breadcrumb, ContrastText } from "@/app/_elements";
import { combinationData } from "@/type/combination";
import { useMemo } from "react";
import { breadcrumbs } from "@/type/app-constants";

export default function Home({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const currentCombination = useMemo(
    () => combinationData.find((item) => item.combination.slug === slug),
    [slug],
  );

  const breadcrumbList = useMemo(() => {
    const temp = [...breadcrumbs];

    if (!currentCombination) {
      return breadcrumbs;
    }

    temp.push({
      href: `/${currentCombination.combination.slug}`,
      name: currentCombination.combination.name,
    });

    return temp;
  }, [currentCombination]);

  return (
    <div className={"relative flex flex-col items-center w-4/5 gap-8"}>
      {currentCombination && (
        <>
          <Breadcrumb
            list={breadcrumbList}
            hex={currentCombination.combination.color.hex}
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
