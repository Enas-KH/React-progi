import React from 'react';
import Team from '../assets/Team.jpg';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Team} alt='/' />
        <div className='flex flex-col justify-center'>
         
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#0e1e35]'>Master Your code</h1>
          <p>
          Master the Code is your premier destination for top-tier programming courses. Our seasoned team of instructors combines industry expertise with a passion for teaching, offering accessible and engaging content tailored to learners of all levels. With a focus on practical skills and real-world applications, we're here to help you unlock your potential and thrive in the dynamic field of technology. Join us and embark on a journey of learning and growth like never before.
          </p>
          <button className='bg-[#0e1e35] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#ffff]'>Get Started</button>
        </div>
      </div> 
    </div>
  );
};


export default About;