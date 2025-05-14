"use client"
import dynamic from "next/dynamic"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import amazonLogo from "../asset/image/amazon logo.jpg"

const FontAwesomeIcon = dynamic(() => import("@fortawesome/react-fontawesome").then(mod => mod.FontAwesomeIcon), { ssr: false })

export default function Header() {

    return (
        <>
            <div className="navbar">
                <Image
                    className="image-btn"
                    src={amazonLogo}
                    alt="Amazon Logo"
                    width={150}
                    height={70}
                />

                <button className="navbar-btn">
                    <span className="navbar-btn-up deliver">Deliver to</span>
                    <span className="navbar-btn-down"><FontAwesomeIcon icon={faLocationDot} /> nigeria</span>
                </button>
                <div className="search-space">
                    <button className="all-btn">
                        all
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
                    <span className="navbar-btn-up zero">0</span>
                    <span className="navbar-btn-down">
                        <FontAwesomeIcon
                            className="cart"
                            icon={faCartShopping}
                        />Cart
                    </span>
                </button>

            </div>

            <div className="navbar2">
                <button>
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
        </>
    )
}
