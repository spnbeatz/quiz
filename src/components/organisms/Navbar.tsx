import React from "react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { Icon } from "../atoms/getIcon";

interface NavbarItemInterface {
    children: React.ReactNode,
    url?: string,
}


export const Navbar = () => {
    return (
        <div className="w-screen h-14 fixed top-0 z-50 flex bg-white justify-between items-center px-8 shadow-inner">
            <div className="flex justify-center items-center gap-6">
                <img className="w-6 h-6" src="../../../public/example_logo.png"/>
                <NavbarItem url="/" >
                    Strona Główna
                </NavbarItem>
                <Dropdown>
                    <DropdownTrigger className="text-gray-800 hover:scale-110 duration-250 cursor-pointer">
                            Nauka
                    </DropdownTrigger>
                    <DropdownMenu>
                        {siteConfig.learnDropdownItems.map((items) => {
                            return (
                            <DropdownItem
                                href={items.url}
                                startContent={<Icon name={items.icon} size="sm" color="gray"/>}
                            >
                                {items.label}
                            </DropdownItem>
                        )})}
                    </DropdownMenu>
                </Dropdown>

                <NavbarItem url="/" >
                    Notatki
                </NavbarItem>
            </div>
        </div>
    )
}

export const NavbarItem:React.FC<NavbarItemInterface> = ({children, url}) => {
    const navigate = useNavigate();

    const navigateTo = (url?: string) => {
        if(url){
            navigate(url)
        } else return;
    }

    return (
        <div className="text-md font-normal hover:scale-110 duration-200 cursor-pointer text-gray-800 flex justify-center items-center gap-1" onClick={() => navigateTo(url)}>
            {children}
        </div>
    )

}