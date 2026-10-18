type TaskProps = {
  title: string
  description: string
}

function Task({ title, description }: TaskProps) {
  return (
    <li className="task">
      <h3 className="task-title">{title}</h3>
      <p className="task-description">{description}</p>
    </li>
  )
}

export default Task
