import './App.css'
import Section from './components/Section'

function App() {
  return (
    <>
      <header className="header">
        <h1>SyncDeck</h1>
        <p className="subtitle">Real-time collaborative task board</p>
      </header>

      <main className="main">
        <div className="board">
          <Section title="To do" taskTitle="Define board layout" />
          <Section title="In progress" taskTitle="Implement task API" />
          <Section title="Review" taskTitle="Review WebSocket events" />
          <Section title="Done" taskTitle="Set up React project" />
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 SyncDeck. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
