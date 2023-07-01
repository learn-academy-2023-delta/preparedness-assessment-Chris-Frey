import React, { useRef, useState } from 'react';
import {Button} from 'reactstrap';

const ResetButton = () => {

  return (
    <div>
      <Button className="buttons" id="reset" >
        Reset
      </Button>
    </div>
  );
}

export default ResetButton;