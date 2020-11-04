import Link from 'next/link'
import {API} from '../../config'
import renderHTML from 'react-render-html'
import moment from 'moment' 

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Card from 'react-bootstrap/Card'

const hrstyle = {
    backgroundColor: 'darkgreen',
    height: '2px',
    width: '50px',
    margin: '0 auto',
    textAlign: 'center'
}


const timestyle= {
    margin: '0px',
    fontSize: '14px',
    padding: '2px 4px',
    fontStyle: 'oblique',
}


const ProjectCard = ({project}) => {

    return (
        <article label= 'project'>
            <Container fluid className="lead pb-4">
                <section>
                    <h1 className= ' pt-4 pb-2'>
                        {project.title}
                    </h1>
                    <hr style={hrstyle} size='30'/>
                </section>
                <section>
                    <p> {renderHTML(project.description)}</p>
                </section>
                <section>
                    <p style={timestyle} className='lead ml-1 mb-0'> 
                        Published {moment(project.updatedAt).fromNow()}
                    </p>
                </section>
            </Container>
        </article>
        
           
    )
}
export default ProjectCard