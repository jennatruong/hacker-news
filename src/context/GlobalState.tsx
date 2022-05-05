import React, { useState } from 'react'
import AppContext from './AppContext';

//figure out why this is erroring for an "any" type when adding children - 
//after 2hr timebox decided to revisit this later
// using https://github.com/dai-shi/react-hooks-global-state instead at present
const GlobalState = ({}) => {
  const [id, setId] = useState('');

  return (
    <AppContext.Provider
      value={{
        id,
        setId: String
      }}
      
    > {}
    </AppContext.Provider>
  )
};

export default GlobalState