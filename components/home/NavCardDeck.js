import Link from 'next/link'
import NavCard from './NavCard'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'


const NavCardDeck = () => {
    return (
        <CardDeck style={{margin: '10px 6%'}}>
                <NavCard 
                    title='About Me'
                    link='/about'
                    body='Learn more about me!'
                />
                <NavCard 
                    title='Projects'
                    link='/projects'
                    body='Check out some of my CS projects!'
                />
                <NavCard 
                    title='Blog'
                    link='/blogs'
                    body='Check out my Blog!'
                />
       </CardDeck>
    )
}
export default NavCardDeck