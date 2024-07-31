import React from 'react'


import HeaderSwiper from './HeaderSwiper'
import UpcomingTripsCrousel from '../upcomingtrip/UpcomingTripsCrousel'
import TripDetails from './TripDetails'
import Contactform from '@/components/Contactuscomponents/Contactform'


const DetailsPage = () => {
  return (
    <div>
        <HeaderSwiper/>
        <TripDetails/>
        <Contactform/>
        <UpcomingTripsCrousel/>


      
    </div>
  )
}

export default DetailsPage