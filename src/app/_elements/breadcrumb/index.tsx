import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumb } from "@/type/app-constants";
import Link from "next/link";
import { ContrastText } from "@/app/_elements";

type CBreadcrumbProps = {
  list: breadcrumb[];
  hex: string;
};

const CBreadcrumb = ({ list, hex }: CBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {list.map((item, index) => {
          return (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <ContrastText hex={hex}>
                    <Link href={item.href}>{item.name}</Link>
                  </ContrastText>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index === list.length - 1 ? null : <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CBreadcrumb;
