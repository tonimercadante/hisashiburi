import type { ReactElement } from 'react'
import NavLayout from "./components/Layout/navLayout"
export default function Bot() {
  return (
    <div>
      <h1>Bot</h1>
    </div>
  );
}

Bot.getLayout = function getLayout(page: ReactElement) {
  return (
    <NavLayout>
      {page}
    </NavLayout>
  )
}