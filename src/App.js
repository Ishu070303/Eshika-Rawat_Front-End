import WrappedListComponent from './WrappedListComponent';

const items = [
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
      <WrappedListComponent items={items} />
    </div>
  )
}

export default App