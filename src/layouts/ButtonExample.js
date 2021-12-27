import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Input } from 'semantic-ui-react';

export default function DisableElevation() {

    const [countValue, setCountValue] = useState(1)

    const increment = () => {
        if (countValue===10) {
            alert("Max 10 olabilir")
        }
        else{
            setCountValue(countValue + 1)
        }
    }

    const decrement = () => {
        if (countValue===1) {
            alert("Min 1 olabilir")
        }
        else{
            setCountValue(countValue - 1)
        }
    }

  return (
    <ButtonGroup disableElevation variant="contained">
      <Button onClick={()=>decrement()}>Azalt</Button>
      <Input value={countValue} size='mini' disabled />
      <Button onClick={()=>increment()}>Arttır</Button>
    </ButtonGroup>
  );
}
