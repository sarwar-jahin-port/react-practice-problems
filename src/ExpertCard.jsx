import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

const ExpertCard = ({expert, handleAddToList}) => {
  
  return (
    <div className='border border-gray-400 p-2 rounded flex flex-col'>
        <img src={expert.img} alt="" />
        <div className="details">
            <h3 className='name'>{expert.name}</h3>
            <p className="age"><span className='font-semibold'>Age:</span> {expert.age}</p>
            <p className="designation"><span className='font-semibold'>Designations:</span> {expert.designation}</p>
            <p className="address"><span className='font-semibold'>Address:</span> {expert.address}</p>
            <p className="salary"><span className='font-semibold'>Salary:</span> ${expert.salary}</p>
        </div>
        <button onClick={() => handleAddToList(expert.id)} className='flex justify-center items-center w-full bg-gray-400 hover:bg-gray-500 py-2'><FaCartArrowDown /> Add to List</button>
    </div>
  )
}

export default ExpertCard