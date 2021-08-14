import type { ReactElement } from "react";
import NavLayout from "./components/Layout/navLayout";
export default function ApiInfo() {
  return (
    <div>
      <h1>Api - Info</h1>
    </div>
  );
}

ApiInfo.getLayout = function getLayout(page: ReactElement) {
  return <NavLayout>{page}</NavLayout>;
};
