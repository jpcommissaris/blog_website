import Image from 'react-bootstrap/Image'
import ResumeLink from './ResumeLink'


const imagestyle = {
    float: 'left',
    margin: '0px 20px 0px -5px ',
    padding: '0px'
}


const AboutImage = () => {

    return (
        <div style={imagestyle}>
            <Image src='/aboutprofile.png' width='250px' />
        </div>
    )
}
export default AboutImage