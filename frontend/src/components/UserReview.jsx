
import React from 'react'

const UserReview = () => {
  return (
    <div className='py-20  bg-muted space-y-10 '>
        <h2 className='text-4xl font-bold text-center'>Heart From Our Awesome User!</h2>
       <div className='grid grid-cols-3 text-white '>
        <div className='bg-accent-foreground px-20 py-10 mx-10 space-y-4 rounded-2xl'>
            <div className='flex gap-5 justify-start items-center'>
                <img
            src={'/profile_icon.png'}
            height={50}
            width={50}
            alt='img'/>
            <div>
                <h3 className='text-xl font-bold'>John Doe</h3>
                <img
                src={'/rating.png'}
                height={10}
                width={100}
                alt='img'/>
            </div></div>
            
           <p className='max-w-[280px] mx-auto'>OpenLearnX transform my Learning Experience</p>

        </div>
        <div className='bg-accent-foreground px-20 py-10 mx-10 space-y-4 rounded-2xl'>
            <div className='flex gap-5 justify-start items-center'>
                <img
            src={'/profile_icon.png'}
            height={50}
            width={50}
            alt='img'/>
            <div>
                <h3 className='text-xl font-bold'>John Doe</h3>
                <img
                src={'/rating.png'}
                height={10}
                width={100}
                alt='img'/>
            </div></div>
            
            <p className='max-w-[280px] mx-auto'>OpenLearnX transform my Learning Experience</p>

        </div>
        <div className='bg-accent-foreground px-20 py-10 mx-10 space-y-4 rounded-2xl'>
            <div className='flex gap-5 justify-start items-center'>
                <img
            src={'/profile_icon.png'}
            height={50}
            width={50}
            alt='img'/>
            <div>
                <h3 className='text-xl font-bold'>John Doe</h3>
                <img
                src={'/rating.png'}
                height={10}
                width={100}
                alt='img'/>
            </div></div>
            
            <p className='max-w-[280px] mx-auto'>OpenLearnX transform my Learning Experience</p>

        </div>
        </div>
        
    </div>
  )
}

export default UserReview