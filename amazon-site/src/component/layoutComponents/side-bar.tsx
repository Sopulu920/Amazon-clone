import { faX } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Image from "next/image";
import placeholder from "../../asset/image/placeholder.jpg";

const FontAwesomeIcon = dynamic(() => import("@fortawesome/react-fontawesome").then(mod => mod.FontAwesomeIcon), { ssr: false })

type SideProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Side({ isOpen, onClose }: SideProps) {
    if (typeof window !== "undefined") {
        console.log("Side component render, isOpen:", isOpen);
    }
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="modal-bg" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="side-content">
                        <div className="hello">
                            <Image
                                src={placeholder}
                                alt=""
                                width={35}
                                className="placeholder" />
                            Hello, sign in
                        </div>
                        <div className="sidebar-content">

                            <div className="sidebar-header">
                                Digital Content & Devices
                            </div>
                            <div className="sidebar-link">
                                <a href="">
                                    Prime Video
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Amazon Music
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Kindle E-readers & Books
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Amazon Appstore
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                            </div>

                            <div className="sidebar-header">
                                Shop by Department
                            </div>
                            <div className="sidebar-link">
                                <a href="">
                                    Electronics
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Computer
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Smart Home
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Arts & Crafts
                                        <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    See all
                                        <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                            </div>

                            <div className="sidebar-header">
                                Programs & Features
                            </div>
                            <div className="sidebar-link">
                                <a href="">
                                    Gift Cards
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Shop By Interest
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Amazon Live
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    International Shopping
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    See all
                                        <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                            </div>

                            <div className="sidebar-header">
                                Help & Settings
                            </div>
                            <div className="sidebar-link">
                                <a href="">
                                    Your Account
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    English
                                    <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                   United States
                                   <FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                                <a href="">
                                    Customer Serivce<FontAwesomeIcon
                                        className="greater"
                                        icon={faGreaterThan} />
                                </a>
                            </div>

                        </div>
                    </div>
                    <button className="modal-close-btn" onClick={onClose}><FontAwesomeIcon icon={faX} /></button>
                </div>
            </div>
        </>
    );
}
