import './App.css';
import data from './data.js';
import Navbar from './Navbar.js';
import Content from './Content.js';

export default function App() {
  const travel = data.map(item => {
    return (
      <Content 
        key={item.id}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <section className="travel-list">
        {travel}
      </section>
    </div>
  )
}

