import Link from 'next/link'
import Card from 'react-bootstrap/Card'

const cardstyle = {
    width: 'auto', 
    margin: '12px',
    borderTop: 'solid black 3px',
}

const NavCard = ({title, link, body}) => {

    return (
        <Link href={link}>
            <Card className="shadow rounded nav-card-link bg-light text-dark" style={cardstyle}>
                    <div style={{backgroundColor: 'black'}}>
                        <Card.Img  src= {`static${link}.jpeg`} />
                    </div>
                    <Card.Body>
                        <Card.Title >{title}</Card.Title>
                        <Card.Text>{body} </Card.Text>
                    </Card.Body>
            </Card>
        </Link>
    )
}
export default NavCard