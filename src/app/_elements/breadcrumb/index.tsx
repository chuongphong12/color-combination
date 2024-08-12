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

type CBreadcrumbProps = {
  list: breadcrumb[];
};

const CBreadcrumb = ({ list }: CBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {list.map((item, index) => {
          return (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.name}</Link>
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
