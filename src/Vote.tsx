import './App.css'
import Charities from './components/Charities.tsx'

function App() {

  return (
    <>
      <div className="Vote">
        <h1 className='title'>VOTE</h1>
        {
            <Charities />
        }
      </div>
    </>
  )
}

export default App