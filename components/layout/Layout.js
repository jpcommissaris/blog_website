import Header from './Header'
import BlogHeader from './BlogHeader'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';
import ScrollToTop from './ScrollToTop'
import {useRef, useEffect} from 'react'

const Layout = (props) => {
    const children = props.children
    const blog = props.blog
    const childRef = useRef(null)


    const renderNav = () => {
        return blog ? <BlogHeader childRef={childRef}/> : <Header childRef={childRef}/>
    }

    return(
        <React.Fragment>
            {renderNav()}
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