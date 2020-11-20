import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const mediaStyle= {
    padding: '0px 12px',
    textAlign: 'center',
}

function SocialMediaLinks(props){
    let color = props.color ? props.color : 'purple'
    const socialLink = (type, link) => {
        let icon = ''
        if(type=='github'){icon=faGithub}
        else if(type=='twitter'){icon=faTwitter}
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
            {socialLink('twitter', "https://twitter.com/jpcommissaris")}
            {socialLink('github', "https://github.com/jpcommissaris")}
            {socialLink('linkedin', "https://www.linkedin.com/in/julian-commissaris/")}
            
        </div>
    )
}

export default SocialMediaLinks