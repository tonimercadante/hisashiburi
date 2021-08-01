import { ReactNode } from "react";
import HomePage from "../HomePage";
import NavBar from "../NavBar";
type layoutProps = {
    children: ReactNode;
}
export default function Layout({children}: layoutProps) {
    return(
        <>
            <NavBar />
            {children}
            <HomePage />
        </>
    )
}