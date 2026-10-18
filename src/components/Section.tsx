import TaskCard from './Task'

type SectionProps = {
  title: string
  tasks: Task[]
}

type Task = {
  id: number
  taskTitle: string
  description: string
}


function Section({ title, tasks }: SectionProps) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.taskTitle} description={task.description} />
        ))}
      </ul>
    </section>
  )
}

export default Section
