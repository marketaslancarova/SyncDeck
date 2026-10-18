import './App.css'
import Section from './components/Section'

function App() {
  const sections = [
    {
      id: 'to_do',
      title: 'To do',
      tasks: [
        { id: 1, taskTitle: 'Task 1', description: 'Description of task 1' },
        { id: 2, taskTitle: 'Task 2', description: 'Description of task 2' },
      ],
    },
    {
      id: 'in_progress',
      title: 'In progress',
      tasks: [
        { id: 3, taskTitle: 'Task 3', description: 'Description of task 3' },
        { id: 4, taskTitle: 'Task 4', description: 'Description of task 4' },
      ],
    },
    {
      id: 'review',
      title: 'Review',
      tasks: [
        { id: 5, taskTitle: 'Task 5', description: 'Description of task 5' },
        { id: 6, taskTitle: 'Task 6', description: 'Description of task 6' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: 7, taskTitle: 'Task 7', description: 'Description of task 7' },
        { id: 8, taskTitle: 'Task 8', description: 'Description of task 8' },
      ],
    },
  ]

  return (
    <>
      <header className="header">
        <h1>SyncDeck</h1>
        <p className="subtitle">Real-time collaborative task board</p>
      </header>

      <main className="main">
        <div className="board">
          {sections.map((section) => (
            <Section key={section.id} title={section.title} tasks={section.tasks} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2026 SyncDeck. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
