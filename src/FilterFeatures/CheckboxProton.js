import React from 'react';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';

export default function CheckboxProton({changeChecked, category}){
    const {checked, label, id} = category
    
    return(
        <div>
      <FormControlLabel
        control={
          <Checkbox
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={label}
      />
    </div>
    )
}