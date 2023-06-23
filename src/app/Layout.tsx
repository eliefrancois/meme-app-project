import type { PropsWithChildren } from 'react'
import { NavBar } from "~/components/Navbar";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}
export default Layout