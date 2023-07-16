import { Suspense } from "react";
import Categories from "../components/home/Categories";
import Popularproduct from "../components/home/Popularproduct";

export default function Home() {
  return (
    <main>
      <Categories></Categories>
      <Suspense fallback={<progress className="progress w-56"></progress>}>
        <Popularproduct></Popularproduct>
      </Suspense>
    </main>
  )
}
