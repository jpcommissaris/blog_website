import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import ScrollToTop from './ScrollToTop'
import {useRef, useEffect} from 'react'

const Layout = (props) => {
    const children = props.children
    const blog = props.blog
    const noNav = props.noNav ? props.noNav : false

    const renderHeader = () => {
        return  blog ? <Header blog/> : <Header />
    }

    return(
        <React.Fragment>
            {renderHeader() }
            <div className='children'>
                {children}
            </div>
            
            <ScrollToTop />
        </React.Fragment>
    ) 
}
export default Layout

// <Footer />