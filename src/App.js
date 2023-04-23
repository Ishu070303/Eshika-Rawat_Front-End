import WrappedListComponent from './WrappedListComponent';

const items = [
  {
    "name" : "eshika",
  },

  {
    "section" : "RA",
  },

  {
    "company" : "Steeleye"
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