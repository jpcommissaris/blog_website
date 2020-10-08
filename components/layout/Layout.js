import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    const children = props.children

    return(
        <React.Fragment>
            <Header />
            <div className='content-wrapper'>
                <div className='children'>
                    {children}
                </div>
                <Footer />
            </div>
        </React.Fragment>
    ) 
}
export default Layout