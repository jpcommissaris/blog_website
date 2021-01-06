import Header from './Header'
import ScrollToTop from './ScrollToTop'
import Head from 'next/head'

const Layout = (props) => {
    const children = props.children
    const blog = props.blog
    const title = 'programming blogs | Julian Commissaris'
    const description = 'blogs on programming react node next python and web development'

    const renderMeta = () => (
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
            <meta property='og:title' content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:site_name" content={'juliancommissaris'}/>
        </Head>
    )

    const renderHeader = () => (
        blog ? <Header blog/> : <Header />
    )

    return(
        <React.Fragment>
            
            {renderMeta()}
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