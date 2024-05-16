import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";

export default function Nav() {
    return (
        <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">ABSEN</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/Login" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
