import React from 'react'
import IconContainer from '../assets/IconContainer.svg'
import heartPulse from '../assets/heartPulse.gif'


const Home = () => {
  return (
    <>
    <div className='flex flex-col flex-wrap items-center justify-center bg-gray-800 pt-4 '>
    <div className='bg-gradient-to-r from-blue-400 to-blue-700 flex items-center rounded-xl p-4'>
   <img src={IconContainer} alt="icon" className=' h-20 w-20 pt-2' />
   <div>
    <div>
       <h1 className='text-base text-white'>Your Daily Goal Almost Done</h1> 
       <p className='text-xs text-white'>1 out of 5 Completed</p>
    </div>
    
 <div className="pt-2">
<div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 ">
  <div className="bg-blue-500 h-1.5 rounded-full"  ></div>
  {/* style={{width: 45%}} */}
  {/* style={{ width: ${progress}% }} */}
  

  <div className="flex justify-between mb-1">
    <span></span>
  <span className="text-xs font-medium text-white dark:text-white">45%</span>
</div>
</div>
</div>

   </div>
   </div>
   <div className="flex flex-col">
    <div className="flex justify-between">
      <span className="text-white">Today's Goals</span>
      <span><img src= {heartPulse} alt="heart" className='h-10 w-10' /></span>

    </div>
   </div>
   </div>
    </>
  )
}

export default Home
