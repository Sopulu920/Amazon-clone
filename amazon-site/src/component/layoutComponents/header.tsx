"use client";
import dynamic from "next/dynamic"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Side from "./side-bar"
import Image from "next/image"
import amazonLogo from "../../asset/image/amazon logo.jpg"
import { useState, useEffect } from "react"

const FontAwesomeIcon = dynamic(() => import("@fortawesome/react-fontawesome").then(mod => mod.FontAwesomeIcon), { ssr: false })

export default function Header() {

    const [sideModal, setSideModal] = useState(false)

    const [showNavbar, setShowNavbar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollTimeout, setScrollTimeout] = useState(null)

    const handlescroll = () => {
        const currentScroll = window.scrollY
        if (currentScroll === 0) {
            setShowNavbar(false)
        }
        else if (currentScroll < lastScrollY) {
            setShowNavbar(true)
        }
        else {
            setShowNavbar(false)
        }
        setLastScrollY(currentScroll)

        
    }

    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
        return () => {
            window.removeEventListener('scroll', handlescroll)
        }
    }, [lastScrollY, scrollTimeout])

    return (
        <>
            <div className={showNavbar ? "navbar" : "defaultnavbar"}>
                <Image
                    className="image-btn"
                    src={amazonLogo}
                    alt="Amazon Logo"
                />

                <button className="navbar-btn">
                    <span className="navbar-btn-up deliver">Deliver to</span>
                    <span className="navbar-btn-down"><FontAwesomeIcon icon={faLocationDot} /> Nigeria</span>
                </button>
                <div className="search-space">
                    <button className="all-btn">
                        All
                    </button>
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="search"
                    />
                    <button className="search-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <button className="navbar-btn">
                    en
                </button>
                <button className="navbar-btn">
                    <span className="navbar-btn-up">Hello, sign in</span>
                    <span className="navbar-btn-down">account & lists <FontAwesomeIcon icon={faCaretDown} /></span>

                </button>
                <button className="navbar-btn">
                    <span className="navbar-btn-up">Returns</span>
                    <span className="navbar-btn-down">& orders</span>
                </button>
                <button className="navbar-btn">
                    <div className="carts">
                        <div className="zero">0</div>
                        <FontAwesomeIcon
                            className="cart"
                            icon={faCartShopping}
                        />Cart
                    </div>
                </button>

            </div>

            <div className="navbar2">
                <button onClick={() => setSideModal(true)}>
                    <FontAwesomeIcon icon={faBars} /> all
                </button>
                <button>
                    today's deals
                </button>
                <button>
                    registry
                </button>
                <button>
                    prime video
                </button>
                <button>
                    gift cards
                </button>
                <button>
                    customer service
                </button>
                <button>
                    sell
                </button>
            </div>
            <Side
                isOpen={sideModal}
                onClose={() => setSideModal(false)} />
        </>
    )
}
