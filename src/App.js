import React from 'react'
import WrappedListComponent from './WrappedListComponent';

const itmes = [
  {
    "text" : "eshika",
  },

  {
    "text" : "rawat",
  },

  {
    "text" : "Steeleye"
  }

]

const App = () => {
  return (
    <div>
      <WrappedListComponent itmes={itmes} />
    </div>
  )
}

export default App