import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import Rating from '../components/Rating';

const RoomDetails = () => {
    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(()=>{
        const room = roomsDummyData.find(room => room._id === id);
        room && setRoom(room)
        room && setMainImage(room.images[0])

    },[id])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='text-sm font-inter'>({room.roomType})</span></h1>
            <p className='text-sm font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% off</p>
        </div>

        {/*Rating*/}
        <div className='flex items-center gap-2 mt-4'>
            <Rating />
            <p className='ml-2'>200+ reviews</p>
        </div>
   
        <div className='flex items-center text-gray-500 gap-2 mt-4'>
            <img src={assets.locationIcon} alt="Location" className=''/>
            <span>{room.hotel.address}</span>
        </div>

        {/*Room Images */}
        <div className='flex flexx-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="Room" className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length > 1 && room.images.map((image, index) => (
                    <img onClick={() => setMainImage(image)} 
                    key={index} src={image} alt='Room' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                ))}
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1>Experience Luxury Like Never Before</h1>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>{room.amenities.map((amenity, index) => (
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200'>
                        <img src={facilityIcons[amenity]} alt={amenity} className='w-6 h-6 mr-2' />
                        <p className='text-sm'>{amenity}</p>
                    </div>
                ))}
            </div>
        </div>

        <p className='text-2xl font-bold'>${room.pricePerNight} / night</p>
        
      
    </div>


    {/*Check in Check out */}
    <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-4 rounded-lg mt-16 mx-20 max-w-6xl'>

        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
               <div className='flex flex-col'>
                    <label htmlFor='checkInDate' className='font-medium'>Check-in Date</label>
                    <input type='date' id='checkInDate' placeholder='check In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                </div>

                 <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

                <div className='flex flex-col'>
                    <label htmlFor='checkOutDate' className='font-medium'>Check-out Date</label>
                    <input type='date' id='checkOutDate' placeholder='check Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                </div>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'>

                </div>

                  <div className='flex flex-col'>
                    <label htmlFor='guests' className='font-medium'>Guests</label>
                    <input type='number' id='guests' placeholder='0' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                </div>
        </div>
        <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white roundd-md max-md:w-full max-md:mt-6 md:px-25 py-3 md-3 md:py-4 text-base cursor-pointer'>
            Check Availability 

        </button>

        </form>
        
        {/*common components */ }
        <div className='mt-25 space-y-4'>
            {roomCommonData.map((spec, index)=>(
                <div key={index} className='flex items-start gap-2'>
                    <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                
          ))}
        </div>


          <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime molestias, consequatur odio necessitatibus tempore ratione quibusdam libero delectus aspernatur ea, nisi pariatur doloribus voluptatibus cum distinctio. Ut, impedit animi.</p>
          </div>

          {/*Hosted by */}
          <div className='flex flex-col items-start gap-4'>
            <div className='flex gap-4'>
                <img src={room.hotel.owner.image} alt='Host Image' className='w-14 h-14 md:h-18 md:w-18 rounded-full' />
                <div>
                <p className='text-lg md:text-xl'>
                    Hosted by {room.hotel.name}
                </p>
                <div className='flex items-center mt-1'>
                    <Rating/>
                    <p className="ml-2">200+ reviews</p>
                </div>
            </div>
        </div>
        <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
     </div>

    </div>
  )
}

export default RoomDetails
