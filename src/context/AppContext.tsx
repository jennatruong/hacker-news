import React from 'react'

const AppContext = React.createContext({
   id: "1",
   setId: (id: String) => {}

})

export default AppContext;
