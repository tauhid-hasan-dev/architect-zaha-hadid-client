import React from 'react';

const ChooseMe = () => {
    return (
        <div className="hero py-10 lg:py-20 bg-gradient-to-l from-gray-700 to-gray-900 bg-gradient-to-r text-slate-200">
            <div className="hero-content flex-col p-0 lg:flex-row justify-between">

                <div className='w-full lg:w-1/2 p-5'>
                    <p className='font-bold text-lg lg:text-lg text-slate-50'>Why should your choose me?</p>
                    <h1 className="text-2xl lg:text-3xl font-bold">Fluidity is the future of Architecture  <br />
                    </h1>
                    <p className="py-6 font-light">I design for your future.  </p>

                    <p className="py-6 font-light">Fluid in architecture refers to seamlessness where there is a movement within the space without any obstruction. It gives a feeling of being in motion while being in a solid, closed matter. It encompasses factors such as curves, flow, dynamic nature, and flexibility. The dynamic nature of fluidity in architecture ensures new and creative ideas aiming to bring a change in the world; The flexibility aspect governs the fact that a particular design can change and is perceived by the users differently.  </p>

                </div>
                <div className='w-full lg:w-1/2 '>
                    <img src='https://i.ibb.co/9hrgwPd/A7388-Fluidity-in-Architecture.jpg' className="w-[100%]  h-full  " alt='' />
                </div>
            </div>
        </div>
    );
};

export default ChooseMe;