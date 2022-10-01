import { FormControlLabel, Radio } from '@material-ui/core'
import React from 'react'

export default function SavedAddressMiniCard() {
  return (
    <div>
        <div className='p-address-box type-2'>
            <div className='p-ab-head'>
                <div className='p-radio-button'>
                <FormControlLabel control={<Radio />} label="İstanbul/Bağcılar" />
                <div className='left' style={{alignItems:"right"}}>Düzenle</div>
                </div>
            </div>
        </div>
    </div>
  )
}
