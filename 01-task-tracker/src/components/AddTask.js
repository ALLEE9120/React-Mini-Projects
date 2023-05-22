import { useState } from 'react'

const AddTask = ({onAddTask}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add a task')
    }

    onAddTask({ text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <div className="form-container">
      <form className= "add" onSubmit={onSubmit}>
        <div className="form-control">
        <label>Task Name:</label><br/>
          <input type="text" placeholder="Task" className="task-name" value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className="form-control">
        <label>Time:</label><br/>
          <input type="text" placeholder="Time" className="task-time" value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className="form-control last">
          <div className="reminder-div">
            <label>Reminder</label>
            <div className="checkbox">
              <input className="checkbox-spin" checked={reminder} type="checkbox" id="check4"  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
          </div>
          <input type="submit" value="Submit" className="form-submit"></input>
        </div>
      </form>
    </div>
  )
}

export default AddTask
