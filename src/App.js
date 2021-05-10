import Slider from './Slider/index'
import SliderInfinite from './SliderInfinite/index'
import './styles.css'

/*------------------------------
Fake Items
------------------------------*/
const items = [
  {
    title: 'South',
    image: 'https://images.unsplash.com/photo-1595265677860-9a3168007dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Slant',
    image: 'https://images.unsplash.com/photo-1594786118579-95ba90c801ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Gravy',
    image: 'https://images.unsplash.com/photo-1509339022327-1e1e25360a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Amuse',
    image: 'https://images.unsplash.com/photo-1525417071002-5ee4e6bb44f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Truffle',
    image: 'https://images.unsplash.com/photo-1594072702031-f0e2a602dd2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Locker',
    image: 'https://images.unsplash.com/photo-1592989819277-a3aafa40c66a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
]

const App = () => {
  return (
    <div className="App">
      <h1>Slider</h1>
      <Slider
        className="slider"
        items={items}
      />

      <h1>Slider Infinite</h1>
      <SliderInfinite
        className="slider-infinite"
        items={items}
      />

    </div>
  )
}

export default App
