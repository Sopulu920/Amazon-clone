import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return (
        <>
            <div className="navbar">
                <button className="navbar-btn">
                    <span>delivery</span> <br />
                    <span><FontAwesomeIcon icon={faLocationDot} />nigeria</span>
                </button>
                <div>
                    <button>
                        all
                    </button>
                    <input
                        type="text"
                        placeholder="search"
                    />
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <button className="navbar-btn">
                    en
                </button>
                <button className="navbar-btn">
                    <span>hello, sign in</span> <br />
                    <span>account & lists</span>
                </button>
                <button className="navbar-btn">
                    <span>returns</span> <br />
                    <span>& orders</span>
                </button>
                <button className="navbar-btn">
                    <span>0</span> <br />
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>
        </>
    )
}