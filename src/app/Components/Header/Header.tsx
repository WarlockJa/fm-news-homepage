"use client";
import Logo from "assets/images/logo.svg";
import MobileMenuIcon from "assets/images/icon-menu.svg";
import MobileMenuIconClose from "assets/images/icon-menu-close.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./header.scss";

const Header = () => {
    const [menuHidden, setMenuHidden] = useState(true);
    return (
        <header className="header">
            <div className="header__logo">
                <Image className="header__logo--image" src={Logo} alt="logo" />
            </div>
            <div className="header__menuWrapper">
                <div
                    className="header__menu--mobileIcon"
                    onClick={() => setMenuHidden(false)}
                >
                    <Image
                        src={MobileMenuIcon}
                        alt="open menu"
                        className="header__menu--mobileImage"
                    />
                </div>
                <div
                    className={
                        menuHidden
                            ? "header__menu--nav header__menu--navHidden"
                            : "header__menu--nav"
                    }
                    onClick={() => setMenuHidden(true)}
                >
                    <div className="header__menu__navWrapper">
                        <div className="header__menu--mobileIcon header__menu--mobileMenuClose">
                            <Image
                                src={MobileMenuIconClose}
                                alt="close menu"
                                className="header__menu--mobileImage"
                            />
                        </div>
                        <nav className="header__menu--navLinks">
                            <Link href="#home">Home</Link>
                            <Link href="#new">New</Link>
                            <Link href="#popular">Popular</Link>
                            <Link href="#trending">Trending</Link>
                            <Link href="#categories">Categories</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
