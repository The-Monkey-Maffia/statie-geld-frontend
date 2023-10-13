import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="leaderboard">
        <div className="leaderboard-card">
          <div className="left-info">
            <img className="charity-logo" src='data:image/png;base64,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'/>
            <div className="charity-info">
              <div className="charity-name">
                <p>KiKa</p>
              </div>
              <div className="charity-description">
                <p>Goede doel tegen kinder kanker</p>
              </div>
            </div>
          </div>

          <div className="right-info">
            <div className="placement">
              <p>#1</p>
            </div>
            <div className="votes">
              6.969 votes
            </div>
          </div>
        </div>

        <div className="leaderboard-card">
          <div className="left-info">
            <img className="charity-logo" src='data:image/png;base64,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'/>
            <div className="charity-info">
              <div className="charity-name">
                <p>AAA batterijen</p>
              </div>
              <div className="charity-description">
                <p>Goede doel, AAAAAAAAAAAAAAAAAA</p>
              </div>
            </div>
          </div>

          <div className="right-info">
            <div className="placement">
              <p>#2</p>
            </div>
            <div className="votes">
              5.121 votes
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
