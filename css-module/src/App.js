import React, { useState } from 'react';
import CheckBox from './components/CheckBox';
import Box from './Box';

function App() {
  const [check, setCheck] = useState(false);
  // const onFocus = e => {
  //   console.log('focus');
  // };
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheckBox 
        onChange={onChange} 
        // onFocus={onFocus}
        checked={check}
      >
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? 'true' : 'false'}
      </p>
      <Box></Box>
    </div>
  );
}

export default App;