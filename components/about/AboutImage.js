import Image from 'react-bootstrap/Image'
import ResumeLink from './ResumeLink'


const imagestyle = {
    float: 'left',
    margin: '0px 20px 0px 0px ',
    padding: '0px'
}


const AboutImage = () => {

    return (
        <div style={imagestyle}>
            <Image src='static/aboutprofile.png' width='250px' />
        </div>
    )
}
export default AboutImage