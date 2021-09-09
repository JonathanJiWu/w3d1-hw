import React, { useState } from "react";
import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = () => {
  // add states to the bedrooms
  return (
    <div>
      {/* <Kitchen/>
            <LivingRoom/>
            <Bedroom bedNum={1}/>
            <Bedroom bedNum={2}/>
            <Bedroom bedNum={3}/>
            <Bath size={'full'}/>
            <Bath size={'half'}/> */}
      <div class="App">
        <div class="kitchen">
          <Kitchen />
        </div>

        <div class="bath-half">
          <Bath size={"half"} />
        </div>

        <div class="bath-full">
          <Bath size={"full"} />
        </div>

        <div class="bed1">
          <Bedroom bedNum={1} />
        </div>

        <div class="livingroom">
          <LivingRoom />
        </div>

        <div class="bed3">
          <Bedroom bedNum={3} />
        </div>

        <div class="bed2">
          <Bedroom bedNum={2} />
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
