import React from 'react'
import workImg from '../assets/workImg.png'
import workImg2 from '../assets/workImg2.png'
import workImg4 from '../assets/workImg4.png'
import workImg5 from '../assets/workImg5.png'
import workImg6 from '../assets/workImg6.png'
import workImg7 from '../assets/workImg7.png'
import workImg8 from '../assets/workImg8.png'
import workImg9 from '../assets/workImg9.png'
import workImg0 from '../assets/workImg0.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#f2f2f2] bg-[#000000]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#f2f2f2] border-purple-600'>Work</p>
                <p className='py-6'>// Check out some of my applications from my portfolio</p>
            </div>


            {/* Container */}
            <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-4'>
                {/* Grid Item */}           
                <div 
                  style={{backgroundImage: `url(${workImg})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Code Refactor
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://brianlockerbie.github.io/code-refactor/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/code-refactor'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg4})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Coding Quiz
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://brianlockerbie.github.io/coding-quiz'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href="https://github.com/brianlockerbie/coding-quiz">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg5})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Note Taker
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://radiant-chamber-54860.herokuapp.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/note-taker-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                      style={{backgroundImage: `url(${workImg9})`}}
                      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Work Day Scheduler
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://brianlockerbie.github.io/work-day-scheduler'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/work-day-scheduler'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg6})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Password Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://brianlockerbie.github.io/password-generator-app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/password-generator-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                      </div>
                    </div>
                    <div 
                  style={{backgroundImage: `url(${workImg2})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Tech Blog
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://shrouded-headland-93448.herokuapp.com'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/tech-blog'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg0})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Weather Dashboard
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://brianlockerbie.github.io/weather-dashboard'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/weather-dashboard'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                    <div 
                  style={{backgroundImage: `url(${workImg7})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Team Profile Generator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://drive.google.com/file/d/1HSfNE8VwWTKqD7WeNsrs2kksJ2Gye4R3/view'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/brianlockerbie/team-profile-generator'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                  style={{backgroundImage: `url(${workImg8})`}}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                  >
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white -tracking-wider'>
                          Population Density Checker
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://project01team10.github.io/population-density-checker/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Demo
                                </button>
                            </a>
                            <a href='https://github.com/project01team10/population-density-checker'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                  Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Work;