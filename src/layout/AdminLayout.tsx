import { Link, Outlet, useLocation } from "react-router-dom"
import type LinkModel from "../models/Links"
import { useContext,  } from "react";
import Breadcrumb from "../components/admin/Breadcrumb"
import AuthContext from "../context/AuthContext";
import { Button } from "@mui/material";
const AdminLayout = () => {
    const { pathname } = useLocation()
    const { user,logout } = useContext(AuthContext); 
    const links: LinkModel[] = [
        {
            id: 1,
            name: 'Kullanıcılar',
            href: '/admin/users'
        },
        {
            id: 2,
            name: 'Arabalar',
            href: '/admin/cars'
        },
        {
            id: 3,
            name: 'Galeristler',
            href: '/admin/gallerist'
        },
        {
            id: 4,
            name: 'Arabalar',
            href: '/admin/cars'
        },
        {
            id: 5,
            name: 'Galeristler',
            href: '/admin/gallerist'
        },
        {
            id: 6,
            name: 'Gallerist Car',
            href: '/admin/galleristcar'
        },
        {
            id: 7,
            name: 'Müşteriler',
            href: '/admin/customers',
        },
       
    ]
    const activeLink = links.find(link => pathname.startsWith(link.href))

    return (
        <div className="min-h-screen flex">
            <aside className=" md:bg-gray-600 ">
                <div className="m-10">
                    <h1 className="text-2xl">RestCar</h1>
                </div>
                <hr className="border border-solid border-b-gray-500" />
                <ul className="flex flex-col items-center justify-between mt-6 gap-12">
    {user ? (
        <>
            {links.map((link: LinkModel) => (
                <li key={link.id} className="list-none">
                    <Link to={link.href}>{link.name}</Link>
                </li>
            ))}
            <li className="list-none">
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => logout()}
                >
                    Çıkış Yap
                </Button>
            </li>
        </>
    ) : (
        <li className="list-none">
            <Link to="/login">Giriş Yap</Link>
        </li>
    )}
</ul>
            </aside>
            <div className="flex min-h-0 flex-1 flex-col">
                <nav className="sticky top-0 bottom-0 bg-[#1976d2] w-full flex items-center justify-between shrink p-8">
                    <div>
                        <input type="text" name="" id="" className="border border-solid border-gray-400 rounded-full p-4 hover:border-transparent select-none" />
                    </div>
                    <Breadcrumb title={activeLink?.name ?? "Yönetim"} />
                    
                </nav>
                <main className="flex flex-col max-w-[100vw] pb-3">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout