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
    height: '3px',
    width: '22px',
    margin: '0',
    textAlign: 'center'
}


const timestyle= {
    margin: '0px',
    fontSize: '14px',
    fontStyle: 'oblique',
}



const ProjectCard = ({project}) => {

    const renderLink = (web) => {
        let link = project.website && web ? project.website : project.github
        return (
            <a href={link} target='_blank'>
                <h1 style={{fontSize: '32px'}} className= 'blog-card-link '>
                    {web ? project.title : <span style={timestyle}>GitHub link</span>}
                </h1>
            </a>
        )
    }

    return (
        <article label= 'project'>
            <Container fluid className="lead pb-4">
                <section>
                    {renderLink(true)}
                    <hr style={hrstyle}/>
                </section>
                <section>
                    <p className='pt-2 mb-0'> {renderHTML(project.description)}</p>
                </section>
                <section>
                    {renderLink(false)}
                    <hr/>
                </section>
            </Container>
        </article>
        
           
    )
}
export default ProjectCard