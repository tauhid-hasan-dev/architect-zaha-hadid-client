import React from 'react';

const About = () => {
    return (
        <div className="hero py-10 lg:py-20 bg-bg-login-color text-slate-200">
            <div className="hero-content flex-col p-0 lg:flex-row">
                <div className='w-full lg:w-1/2'>
                    <img src='https://i.ibb.co/P90mQSh/zh.jpg' className="w-[100%] lg:w-4/5 h-full  " alt='' />
                    {/* <img src={parts} className="absolute border-8 border-white w-3/5 right-5 top-1/2 rounded-lg " alt='' /> */}
                </div>
                <div className='w-full lg:w-1/2 p-5'>
                    <p className='font-bold text-lg lg:text-lg text-slate-50'>About Me</p>
                    <h1 className="text-2xl lg:text-4xl font-bold">I am the first woman <br /> to be awarded <br /> the Pritzker Architecture Prize.  <br />
                    </h1>
                    <p className="py-6 font-light">My pioneering vision redefined architecture for the 21st century and captured imaginations across the globe. Each of mine projects transformed notions of what can be achieved in concrete, steel, and glass; combining her unwavering optimism for the future and belief in the power of invention with advanced design, material and construction innovations. </p>

                    <p className="py-6 font-light">Many architects are called on to create new projects that stand as symbols of social progress—but none delivered as regularly, as unexpectedly and as spectacularly as me. My successes is so consistent, I received the highest honours from civic, academic and professional institutions across the globe.  </p>


                </div>
            </div>
        </div>
    );
};

export default About;