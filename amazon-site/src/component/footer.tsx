import Image from "next/image"
import amazonLogo2 from "../asset/image/amazon2.jpg"

export default function Footer() {
    return (
        <>
            <button className="footer-layer">
                Back to the top
            </button>

            <div className="footer-layer2">
                <div className="footer-row">
                    <div className="footer-header">
                        Get to Know Us
                    </div>
                    <div className="footer-links">
                        <a href="">Careers</a>
                        <a href="">Blog</a>
                        <a href="">About Amazon</a>
                        <a href="">Investor Relations</a>
                        <a href="">Amazon Devices</a>
                        <a href="">Amazon Science</a>
                    </div>
                </div>

                <div className="footer-row">
                    <div className="footer-header">
                        Make Money with Us
                    </div>
                    <div className="footer-links">
                        <a href="">Sell products on Amazon</a>
                        <a href="">Sell on Amazon Business</a>
                        <a href="">Become an Affiliate</a>
                        <a href="">Advertise Your Products</a>
                        <a href="">Self-Publish with Us</a>
                        <a href="">Host an Amazon Hub</a>
                        <a href="">See More Make Money with Us</a>
                    </div>
                </div>

                <div className="footer-row">
                    <div className="footer-header">
                        Amazon Payment
                    </div>
                    <div className="footer-links">
                        <a href="">Amazon Business Card</a>
                        <a href="">Shop with Points</a>
                        <a href="">Reload Your Balance</a>
                        <a href="">Amazon Currency Converter</a>
                    </div>
                </div>

                <div className="footer-row">
                    <div className="footer-header">
                        Let Us Help You
                    </div>
                    <div className="footer-links">
                        <a href="">Amazon and COVID-19</a>
                        <a href="">Your Account</a>
                        <a href="">Your Orders</a>
                        <a href="">Shipping Rates & Policies</a>
                        <a href="">Returns & Replacements</a>
                        <a href="">Manage Your Content and Devices</a>
                        <a href="">Help</a>
                    </div>
                </div>
            </div>

            <div className="footer-layer3">
                <Image
                    src={amazonLogo2}
                    alt="amazon logo"
                    width={100}
                />

                <div className="footer-layer3-btn">
                    <button>English</button>
                    <button>USD - U.S. Dollar</button>
                    <button>United State</button>
                </div>
            </div>
        </>
    )
}