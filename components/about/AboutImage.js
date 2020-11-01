import Image from 'react-bootstrap/Image'


const imagestyle = {
    float: 'left',
    margin: '0px 20px 0px 0px ',
    padding: '0px'
}


const AboutImage = () => {

    return (
        <div >
                <Image src='static/aboutprofile.png' width='250px' style={imagestyle}/>
        </div>
    )
}
export default AboutImage