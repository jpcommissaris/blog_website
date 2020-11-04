import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const mediaStyle= {
    padding: '0px 12px',
    textAlign: 'center',
}

function SocialMediaLinks(props){
    let color = props.color ? props.color : 'purple'
    const socialLink = (type, link) => {
        let icon = ''
        if(type=='github'){icon=faGithub}
        else if(type=='facebook'){icon=faFacebook}
        else if(type=='linkedin'){icon=faLinkedin}
        return (
            <a 
                href={link}
                style={{margin: '4px'}}
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon style={{color}} className='social-icon' icon={icon} />
            </a>
        ) 
    }
    return (
        <div style={mediaStyle} >
            {socialLink('facebook', "https://www.facebook.com/julian.commissaris.5")}
            {socialLink('github', "https://github.com/jpcommissaris")}
            {socialLink('linkedin', "https://www.linkedin.com/in/julian-c-87a374177/")}
            
        </div>
    )
}

export default SocialMediaLinks