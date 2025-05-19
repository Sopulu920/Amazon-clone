import Image from "next/image"
import amazonLogo2 from "../../asset/image/amazon2.jpg"

export default function Footer() {
    const presentYear = new Date().getFullYear();
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
                    className="footerImg"
                />

                <div className="footer-layer3-btn">
                    <button>English</button>
                    <button>USD - U.S. Dollar</button>
                    <button>United State</button>
                </div>
            </div>

            <div className="footer-layer4">

                <div className="footer-layer-level">
                    <a className="footer-layer4-link" href="">
                        <div>Amazon Music</div>
                        Stream millions of songs
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Amazon Ads</div>
                        Reach customers wherever they spend their time
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>6pm</div>
                        Score deals on fashion brands
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>AbeBooks</div>
                        Books, art & collectibles
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>ACX</div>
                        Audiobook Publishing Made Easy
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Sell on Amazon</div>
                        Start a Selling Account
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Veeqo</div>
                        Shipping Software Inventory Management
                    </a>
                </div>

                <div className="footer-layer-level">
                    <a className="footer-layer4-link" href="">
                        <div>Amazon Business</div>
                        Everything For Your Business
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>AmazonGlobal</div>
                        Ship Orders Internationally
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Amazon Web Services</div>
                        Scalable Cloud Computing Services
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Audible</div>
                        Listen to Books & Original Audio Performances
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Box Office Mojo</div>
                        Find Movie Box Office Data
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Goodreads</div>
                        Book reviews & recommendations
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>IMDb</div>
                        Movies, TV & Celebrities
                    </a>
                </div>


                <div className="footer-layer-level">
                    <a className="footer-layer4-link" href="">
                        <div>IMDbPro</div>
                        Get Info Entertainment Professionals Need
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Kindle Direct Publishing</div>
                        Indie Digital & Print Publishing Made easy
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Prime Video Direct</div>
                        Video Distribution Made Easy
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Shopbop</div>
                        Designer Fashion Brands
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Woot</div>
                        Deals and Shenanigans
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Zappos</div>
                        Shoes & Clothing
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Ring</div>
                        Smart Home Security Systems
                    </a>
                </div>


                <div className="footer-layer-level">
                    <a href=""></a>
                    <a className="footer-layer4-link" href="">
                        <div>eero WiFi</div>
                        Stream 4K Video in Every Room
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Blink</div>
                        Smart Security for Every Home
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Neighbors App</div>
                        Real-Time Crime & Safety Alerts
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>Amazon Subscription Boxes</div>
                        Top subscription boxes-right to your door
                    </a>
                    <a className="footer-layer4-link" href="">
                        <div>PillPack</div>
                        Pharmacy Simplified
                    </a>
                </div>

                <div className="footer-layer5">
                    <a href="">Conditions of Use</a>
                    <a href="">Privacy Notice</a>
                    <a href="">Consumer Health Data Privacy Disclosure</a>
                    <a href="">Your Ads Privacy Choices</a>
                </div>

                <div className="footer-layer6">
                    &copy; 1996-{presentYear}, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </>
    )
}