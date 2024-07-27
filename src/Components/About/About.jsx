import React from 'react'
import "./About.css";
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src='https://www.bms.co.in/wp-content/uploads/2015/01/truth-about-college-life.jpg' className='about-img'/>
            <img src='https://th.bing.com/th/id/R.17dea5ebc20f4fd10389b4f180ae9b3d?rik=e9t%2fhvOQADZM1g&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8i65B8AXT.png&ehk=ruY7nFucsGPNXtLQ6BYoDblZX0Klw15spn25fXFppPs%3d&risl=&pid=ImgRaw&r=0' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Where learning is an interactive evolutionary process</h2>
            <p>The vision of the founders of Kalyan Bharti Trust, ‘to prepare dynamic and caring citizens to meet the challenges of global society while retaining their traditional values’, has found its tangible reality in the provision of educational opportunities for a broad spectrum of learners - from the Primary to the Tertiary levels.</p>
            <p>The six wings of the Trust - The Heritage School (THS), Heritage Institute of Technology (HIT-K) , The Heritage Academy (THA) , Heritage Business School (HBS) ,Heritage Law College (HLC) & The Heritage College (THC) together constitute an oasis of learning and have, over the years, carved a niche for themselves among academicians, faculty, students and society, in general.</p>
            <p>A harmonious integration of valued traditions with modern outlook is the guiding principle behind the development of the academic environment that constitutes the basic philosophy of these six educational initiatives of Kalyan Bharti Trust.</p>
        </div>
      
    </div>
  )
}

export default About
