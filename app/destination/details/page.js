import React from 'react'


import HeaderSwiper from './HeaderSwiper'
import UpcomingTripsCrousel from '../upcomingtrip/UpcomingTripsCrousel'
import TripDetails from './TripDetails'
import Contactform from '@/components/Contactuscomponents/Contactform'


const DetailsPage = () => {
  return (
    <div className='container  z-0 px-0 flex flex-col justify-center'>
      <div className=''>
      <HeaderSwiper/>
        <TripDetails/>
        
        <UpcomingTripsCrousel/>
      </div>
      

       


      
    </div>
  )
}

export default DetailsPage