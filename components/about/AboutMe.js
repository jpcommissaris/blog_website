import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useRouter} from 'next/router'

// using drive and html render



const AboutMe = () => {

    return (
        <div style={{fontSize: '18px'}}>
                <h4> Who am I? </h4>
                <p>
                I’m Julian, a software developer who enjoys learning about and engaing in the modern tech world. 
                I’m a hardworking individual and a passionate programmer. I always look to get the most out of school and working opportunities. More than that, I’m a problem solver, who can spend hours perfecting and understanding problems in programming.  
                </p>
                <p>
                I believe that computer science is one of the most rewarding career paths out there. That’s because computer science is an outlet for creativity that can have real world impacts. Having said this, I also think computer science is one of the hardest fields to master. I’m someone that works every day at improving because I want to be part of a future generation that uses technology to further improve our world. On this blog and website, I plan to post that journey.  
                </p>

                <h4> Education </h4>
                <p>
                Currently, I attend The University or California Santa Barbara. I’m a Computer Science major and honors student in the college of engineering. I take school seriously and use it as an outlet for learning. 
                </p>

                <h4> Skill Set </h4> 
                <p> For anyone whose looking to hire me, I’d love to set up an interview. Here’s what I can do: </p>
                <ul>
                <li>Full-stack web development using frameworks like React.js with API and Database Integration </li>
                <li> Problem solving with data structures and algorithms in languages like C++ and Python </li>
                <li> Data manipulation using tools like NumPy and Pandas as well as AI and machine learning with Scikit and Keras </li>
                <li>Agile development with the use of test-driven development and GitHub integration </li>
                <li>Development with Unix and Unix-like systems. </li>
                </ul>

        </div>
    )
}
export default AboutMe