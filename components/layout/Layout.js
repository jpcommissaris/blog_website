import Header from './Header'
import BlogHeader from './BlogHeader'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import ScrollToTop from './ScrollToTop'
import {useRef, useEffect} from 'react'

const Layout = (props) => {
    const children = props.children
    const blog = props.blog
    const noNav = props.noNav ? props.noNav : false

    const renderNav = () => {
        return blog ? <BlogHeader /> : <Header />
    }

    return(
        <React.Fragment>
            {!noNav && renderNav()}
            <div className='children'>
                {children}
            </div>
            
            <ScrollToTop />
        </React.Fragment>
    ) 
}
export default Layout

// <Footer />