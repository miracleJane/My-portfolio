import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';




const Project = () => {
  return (
    <div>
        <div className=' w-full px-20 '>
            <div className=' text-[2rem] font-medium border-b-1 border-b-gray-600 h-20 flex justify-center items-center '>Project</div>
             <div className='h-20 bg-blue-800 flex justify-center items-center'>
                <p className='font-medium text-[1.5rem]'>Featured project</p>
             </div>
            <div className='bg-red-500 h-150 grid grid-cols-2'>
                <div className='col-span-1 bg-pink-600'>

                    vyugyugybjbjhbjh
                </div>
                <Swiper 
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="w-100 flex justify-center h-100 mb-10 bg-blue-400 mt-10"
                >
                    <SwiperSlide  >
                         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Project