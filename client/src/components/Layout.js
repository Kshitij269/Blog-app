import Header from "./Header"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <main className="max-width-max my-0 mx-auto">
            <Header/>
            <Outlet/>
        </main>
    )
}