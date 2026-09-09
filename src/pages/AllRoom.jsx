import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Rating from '../components/Rating';


const CheckBox = ({label,selected = false, onChange = () =>{}}) =>{
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
                <input type='checkbox' checked={selected} onChange={(e)=> onChange(e.target.checked,label)} />
                <span className='font-light select-none'>{label}</span>
        </label>
    )

}
const RadioButton = ({label,selected = false, onChange = () =>{}}) =>{
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
                <input type='radio' name='sortOption' checked={selected} onChange={(e)=> onChange(label)} />
                <span className='font-light select-none'>{label}</span>
        </label>
    )

}

const AllRoom = () => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);    

    const rooomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Suite",
        "Family Room"
    ];

    const priceRange =[
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000'
    ];

    const sortOptions =[
        "Price Low to High",
        "Price High to Low",
        "Newest First"
   
    ] 
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-35 md:pt-38 px-4 md:px-16 lg:px-24 xl:px-32 ">
       <div className=''>
            <div className='flex flex-col items-start text-left'>
                <h1 className="font-playfairtext-4xl font-bold md:text-[40px] mb-4">Hotel Rooms</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">Check out our variety of comfortable rooms designed to provide you with a pleasant stay.</p>
            </div>
            

            {roomsDummyData.map((room) => (
               <div key={room._id} className='flex flex-col lg:flex-row items-start gap-6 py-10 border-b border-gray-200 last:pb-30 last:border-0'>
                <img onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0, 0)}}
                src={room.images[0]} alt={room.name} title='View Rooms Details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
                    <div className='md:w-1/2  lg:w-2xl flex flex-col gap-2'>
                        <p className='text-gray-500'>{room.hotel.city}</p>
                        <p onClick={()=>{navigate(`/rooms/${room._id}`); scrollTo(0, 0)}}                        className='text-gray-800 text-3xl  font-playfair cursor-pointer'>{room.hotel.name}</p>
                        <div className='flex items-center'>
                            <Rating />
                            <p className='ml-2'>200+ reviews</p>
                        </div>

                        <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                            <img src={assets.locationIcon} alt="Location" className='' />
                            <span>{room.hotel.address}</span>
                        </div>

                        <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                            {room.amenities.map((item, index) => (
                               <div key={index} className='flex px-3 py-2 rounded-lg bg-[#F5F5FF]/70 items-center gap-2'>
                                  <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                  <p className='text-sm'>{item}</p>
                               </div>
                            ))}

                        </div>
                       <p className='text-2xl font-bold text-gray-800'>${room.pricePerNight}/night</p>
                    </div>


               </div>
            ))}
       </div>
       {/*Filters*/}
       <div className='bg-white w-80 border border-gray-300 text-gray-500 max-lg:mb-8 lg:mt-16'>
            <div className={`flex items-center justify-between px-4 py-2.5 min-lg:border-b border-gray-300 ${openFilters && "border-b"}`} >
                <p className="text-base font-medui   text-gray-800">FILTER</p>
                <div className='text-xs cursor-pointer'>
                    <span className="lg:hidden" onClick={()=> setOpenFilters(!openFilters)}>
                        {openFilters ? "HIDE" : "SHOW"}
                    </span>
                    <span className='hidden lg:block'>CLEAR ALL</span>
                </div>
            </div>

            <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
                
                
                <div className='px-5 pt-5'>
                    <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                    {rooomTypes.map((room,index)=>(
                        <CheckBox key={index} label={room}/>
                    ))}
                </div>
                
 <div className='px-5 pt-5'>
    <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                    {priceRange.map((range,index)=>(
                        <CheckBox key={index} label={`$ ${range}`}/>
                    ))}
                    </div>

 <div className='p-5'>
    <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                    {sortOptions.map((option,index)=>(
                        <RadioButton key={index} label={option}/>
                    ))}
                    </div>



                </div>

            </div>


       </div>
   
  )
}

export default AllRoom
