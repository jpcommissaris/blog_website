import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'
import SocialMediaLinks from './SocialMediaLinks'
import {searchBlog} from '../../actions/blog'
import BlogCard from '../blog/BlogCard'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const linkstyle= {
    color: 'black',
    fontSize: '20px',
    fontWeight: '300'
}


const SearchBar = () => {

    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const searchbar = useRef(null)

    useEffect(() => {
        if(open){
            window.addEventListener('click', handleClick)
            return () => {
                window.removeEventListener('click', handleClick);
            }
        }
    }, [open])

    const renderSearchedBlogs = () => (
        <Col md={12} className='pt-4' style={{paddingLeft: '0px'}}>
            {searchResult.length !== 0 ? 
            searchResult.map((blog, i) => (
                <BlogCard key={i} blog={blog} /> 
            )) : 
            <p className='text-center'> No Blogs Match Query! </p>}
        </Col>
    )

    const handleClick = (e) => {
        if(searchbar && !searchbar.current.contains(e.target)){
            setOpen(false)
        }
    }

    const getClasses = () => {
        let searchbarOpen = open ? 'sb-slideIn' : 'sb-slideOut'
        return `sidebar ${searchbarOpen}`
    }

    const renderButton = () => {
        return open ? '' : <FontAwesomeIcon icon={faSearch} className='btn-hamburger ml-auto' onClick={() => setOpen(open => !open)}/>
    }

    const handleSearchInput = e => {
        if(e.keyCode === 13){
            doSearch()
        }else{
            setSearch(e.target.value)
        }
    }

    const doSearch = () => {
        searchBlog(search).then(data => {
            if(data.error){
                console.log(data.error)
            }
            console.log(data)
            setSearchResult(data)
        })
    }

    return (
            <Container fluid>
                {renderButton()}
                <div ref={searchbar} className={getClasses()}>
                    <Row>
                        <Col md='12'>
                            <FontAwesomeIcon icon={faTimes} className='btn-exit' onClick={() => setOpen(open => !open)}/>
                        </Col>
                    </Row>
                    <Row>
                       <Col md='12' className='input-group mt-3' >
                            <input 
                                type='text' 
                                placeholder='Search something'
                                style={{width: '85%'}}
                                maxLength='24'
                                onKeyUp= {(e) => handleSearchInput(e)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" 
                                type="button"
                                onClick={() => doSearch()}
                                >
                                    <FontAwesomeIcon icon={faSearch}/>  
                                </button>
                            </div>
                       </Col>
                    </Row>
                    <Row>
                        {renderSearchedBlogs()}
                    </Row>
                </div>
                
            </Container>
    )
}
export default SearchBar