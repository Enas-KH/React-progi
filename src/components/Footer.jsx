import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    
    FaInstagramSquare,
    FaTwitterSquare,
  } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='max-w-[1540px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#073b83]'>
      <div>
      <h1 className="w-full text-3xl font-bold text-[#0c1c34]">Coursy</h1>
        <p className='py-4'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, voluptates mollitia quaerat enim nulla, excepturi optio dolorum, fuga fugiat distinctio quod. Assumenda commodi delectus quas voluptate vero optio placeat veritatis!</p>
        <div className='flex gap-5 md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaTwitterSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <ul>
                <li className='py-2 text-sm'>Contact Us</li>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Questions</li>
                <li className='py-2 text-sm'>Courses</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className='py-2 text-sm'>Analysis</li>
                <li className='py-2 text-sm'>Solutions</li>
                <li className='py-2 text-sm'>Ideas</li>
                <li className='py-2 text-sm'>Join us</li>
            </ul>
        </div>
         
        
        <div>

                 
            <form className='flex flex-col '>
                <input type="text" class=" w-[250px] px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Email" value=""/>
                <input type="password" class="w-[250px] px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password" value=""/>
                <input type="password" class="w-[250px] px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Confirm password" value=""/>
                <button class="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-[250px] text-[19px]">Log In</button>
                <p class=" mt-3 text-[14px]">Already have an account? 
                <a href="/signup" class="text-gray-600">Log In</a>
            </p>
            <p class="mt-3 text-[14px]">By clicking continue, you agree to our 
                <a href="/terms" class="text-gray-600">Terms of Service</a> and <a href="/privacy" class="text-gray-600">Privacy Policy</a>.
            </p>
            </form>
         
        </div>
    

      </div>
    </div>
  )
}
