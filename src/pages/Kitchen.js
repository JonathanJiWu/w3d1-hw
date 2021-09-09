import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";
import '../App.css'

const Kitchen = () => {
  return (
    <div>
      <h3>Kitchen</h3>
      <Oven className='oven'/>
      <Sink className='sink'/>
    </div>
  );
};

export default Kitchen;
