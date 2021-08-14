import type { ReactElement } from "react";
import NavLayout from "./components/Layout/navLayout";
export default function About() {
  return (
    <div>
      <h1>Api - Info</h1>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};
