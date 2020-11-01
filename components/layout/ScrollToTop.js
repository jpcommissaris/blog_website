import {useEffect, useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'

const ScrollToTop = (props) => {
    const scrollButton = useRef(null)
    const childRef = props.childRef
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        childRef.current.addEventListener("scroll", (e) => {
            toggleVisibility();
        });
        window.addEventListener('resize', (e) => {
            toggleVisibility();
        });
    }, [])

    const toggleVisibility = () => {
        if (childRef.current && childRef.current.scrollTop > 50 && window.innerWidth > 600) {
            setVisible(true)
        }else {
            setVisible(false)
        }
    }

    const scrollUp = () => {
        if (scrollButton.current) {
            childRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
    const getClasses = () => {
        let visibility = visible ? 'sb-fadeIn' : 'sb-fadeOut'
        return `scroll-button shadow ${visibility}`
    }
    
    return (
        <div>
            <button ref={scrollButton} className= {getClasses()} onClick={() => scrollUp()}>
                ^
            </button>
        </div>
    )
}
export default ScrollToTop

//<FontAwesomeIcon icon={faArrowAltCircleUp}/>