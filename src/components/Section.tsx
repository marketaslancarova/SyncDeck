import Task from './Task'

type SectionProps = {
  title: string
  taskTitle: string
}

function Section({ title, taskTitle }: SectionProps) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <ul>
        <Task title={taskTitle} />
      </ul>
    </section>
  )
}

export default Section
