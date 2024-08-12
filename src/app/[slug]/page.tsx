import CBreadcrumb from "@/app/_components/breadcrumb";
import { breadcrumbList } from "@/type/app-constants";

export default function Home() {
  return (
    <div className={"relative flex flex-col items-center w-4/5 gap-8"}>
      <CBreadcrumb list={breadcrumbList} />
      <h1 className="text-5xl font-semibold leading-[120%] text-center">
        <p>Pastel Blonde</p>
        <p>color combination</p>
      </h1>
    </div>
  );
}
