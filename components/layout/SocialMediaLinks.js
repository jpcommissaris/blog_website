

const mediaStyle= {
    padding: '4px 14px',
    textAlign: 'center',
}

function SocialMediaLinks(){
    const socialLink = (type, link) => {
        return (
            <a 
                href={link}
                style={{margin: '4px'}}
                className={`fa fa-${type}`}
                target="_blank" 
                rel="noopener noreferrer"
            >
            </a>
        ) 
    }
    return (
        <div style={mediaStyle} sm={4}>
            {socialLink('github', "https://github.com/jpcommissaris")}
            {socialLink('linkedin', "https://www.linkedin.com/in/julian-c-87a374177/")}
            {socialLink('facebook', "https://www.facebook.com/julian.commissaris.5")}
        </div>
    )
}

export default SocialMediaLinks