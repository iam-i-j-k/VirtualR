import React from 'react'
import { CheckCircle, CheckIcon } from 'lucide-react'
import { pricingOptions } from '../constants'


const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8'>
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((item,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='text-4xl mb-8'>
                            {item.title}
                            {item.title === "Pro" && (
                                <span className='text-transparent text-xl mb-4 ml-2 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text'>
                                    (Most Popular)
                                </span>
                            )}
                        </p>
                        <p className='mb-8'>
                            <span className='text-4xl mt-6 mr-2'>
                                {item.price}
                            </span>
                            <span className='text-neutral-400 tracking-tight'>
                                /Month
                            </span>
                        </p>
                        <ul>
                            {item.features.map((feature,index)=>(
                                <li key={index} className='mt-8 flex items-center'>
                                    <CheckCircle />
                                    <span className='ml-2 text-sm'>
                                    {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className='inline-flex justify-center text-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'>Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing