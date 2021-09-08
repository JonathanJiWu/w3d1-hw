import React, {useState} from 'react'
import Bath from './Bath'
import Bedroom from './Bedroom'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'

const FloorPlan = () => {
    // add states to the bedrooms
    const [bedNum, setBedNum]=useState(0)
    return (
        <div>
            <Kitchen/>
            <LivingRoom/>
            <Bedroom />
            <Bedroom/>
            <Bedroom/>
            <Bath/>
            <Bath/>
        </div>
    )
}

export default FloorPlan
