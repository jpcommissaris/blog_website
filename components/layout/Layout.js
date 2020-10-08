import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import ScrollToTop from './ScrollToTop'
import {useRef} from 'react'

const Layout = (props) => {
    const children = props.children
    const childRef = useRef(null)

    return(
        <React.Fragment>
            <Header />
            
            <div ref= {childRef} className='content-wrapper'>
                <div className='children'>
                    {children}
                </div>
                <Footer />
            </div>
            <ScrollToTop childRef={childRef}/>
        </React.Fragment>
    ) 
}
export default Layout