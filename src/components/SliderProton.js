import React from 'react';
import { Slider } from '@mui/material';

export default function SliderProton({value, changePrice}){
    return (
        <div id='slider'>
          <Slider
            value={value}
            onChange={changePrice}
            valueLabelDisplay='on'
            min={1}
            max={1750}
          />
        </div>
      );
}