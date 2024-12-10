import Image from 'next/image'
import React from 'react'

const edu = [
    { title: "Master of Software Engineering", school: "The University of Melbourne", desciption: "2022-2024" },
    { title: "Bachelor of Science (Computing and Software Systems)", school: "The University of Melbourne", desciption: "2019-2022" },
  ];

const Education = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center border-l-2'>
        {edu.map((item) => {
            return (
                <div key={item.title} className="basis-1/2 text-bold justify-center items-center flex flex-row w-full">
                    <div className="basis-1/5">
                    <div
                        className="w-[120px] h-[120px] xl:w-[170px] xl:h-[170px] mix-blend-lighten
                        relative overflow-hidden "
                    >
                        <Image
                        src="/unimelb-logo.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                        />
                    </div>
                    </div>
                    <div className="basis-4/5 flex flex-col">
                        <div className="font-bold">{item.school}</div>
                        <div className="text-sm italic"> {item.title}</div>
                        <div className="text-sm font-thin">{item.desciption}</div>
                    </div>
                
                </div>
            );
        })}
        
    
    
    </div>
  )
}

export default Education