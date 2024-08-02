import React from 'react'

const Contact = () => {
  const contact = [
    {
      name: "Contact:",
      value: "987654321"
    },
    {
      name: "E-Mail:",
      value: "dfghjkl@vishnu.edu.in"
    },
  ];
  return (
    <div>
        <div className='bg-black  flex flex-col justify-center gap-1 clip-custom-curve  tablet:w-[40rem] font-bold  tablet:pb-[13rem] phone:w-[22rem] phone:pb-[10rem] '>
        <div><p className='flex justify-center text-white phone:text-[10px] tablet:text-[1rem]'>For More Details</p></div>
        <div className='flex justify-center gap-2'>
        {contact.map((item, index) => (
          <div key={index} className='flex flex-row gap-1 text-white' >
            <p className='phone:text-[10px] tablet:text-[1rem]'>{item.name}</p>
            <span className='phone:text-[10px] tablet:text-[1rem]'>{item.value}</span>
          </div>
        ))}
        </div>
       <contact/>
      </div>
    </div>
  )
}

export default Contact