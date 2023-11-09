import './App.css'
import Charities from './components/Charities.tsx'

function App() {

  return (
    <>
      <div className="Vote">
        {
            <Charities />
        }
      </div>
    </>
  )
}

export default App