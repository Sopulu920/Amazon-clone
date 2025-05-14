import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return (
        <>
            <div>
                <button>
                    <span>delivery</span> <br />
                    <span><FontAwesomeIcon icon={faLocationDot}/>nigeria</span>
                </button>
            </div>
        </>
    )
}