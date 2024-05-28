import React from 'react'

function About() {
  return (
    <div className="grid   sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
    <div className='py-6 flex justify-center'><img src="../../images/image2.jpg" className='h-[80%] rounded-xl ' width="400 X 270" alt="" /></div>
    <div className='p-6 flex flex-col gap-2'>
        <h2 className='font-bold text-2xl text-center'>My Bio-Data</h2>
        <p>I have completed B.tech in Cse from Ct Group of Institute Maqsudan during 2019-2023 Batch with 8.21 CGPA out of 10 CGPA </p>
        <div className=' '>
            <div className=''>HTML: 80%
                <p className=' w-[80%] border border-solid border-green-900'></p>
            </div>
            <div>css: 70%
                <p className=' w-[70%] border border-solid border-red-900'></p>
            </div>
            <div>Reactjs: 80%
                <p className=' w-[80%] border border-solid border-black'></p>
            </div>
            <div>Nodejs: 85%
                <p className=' w-[85%] border border-solid border-purple-500'></p>
            </div>
            <div>Mongoo Db: 82%
                <p className=' w-[82%] border border-solid border-yellow-600'></p>
            </div>
            <div>Express: 89%
                <p className=' w-[89%] border border-solid border-blue-900'></p>
            </div>
        </div>
         <div className='text-center'>
         <button className='bg-red-300 hover:bg-red-950 hover:rounded hover:text-white px-2  '><a href="../../public/ResumeGaganjotsingh.pdf" download="ResumeGaganjotsingh.pdf">Downloard CV</a></button>
         </div>
    </div>
</div>
  )
}

export default About