// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slider from './Slider'

const Carusel2 = () => {
  return (
    <div className=' mx-auto rounded-xl'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slider
            image="https://html.themewant.com/unipix/assets/images/banner/slider__3-2.jpg"
            text='Level Up Your Academic Journey Begins Scholary'
             p='Remember to tailor the section names to fit the specific needs and
             structure of your university website.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
             image="https://wpdemo.zcubethemes.com/scholary/wp-content/uploads/2024/03/slider_bg.png"
             text='Level Up Your Academic Journey Begins Scholary'
             p='Remember to tailor the section names to fit the specific needs and
             structure of your university website.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
             image="https://html.themewant.com/unipix/assets/images/banner/slider__3.jpg"
             text='Level Up Your Academic Journey Begins Scholary'
             p='Remember to tailor the section names to fit the specific needs and
             structure of your university website.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carusel2