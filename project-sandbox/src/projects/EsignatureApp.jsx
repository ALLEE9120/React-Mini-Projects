import Title from './components/Title'
import { useState } from 'react'

export default function EsignatureApp() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="text-center">
      <Title text={!name ? "Esignature" : name}/>
      <Title text= {!date ? "Date" : date}classes="subtitle"/>
      <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam cupiditate provident saepe dolores beatae nobis porro
        nihil. Sed exercitationem animi ad illo accusantium nesciunt
        autem, reiciendis necessitatibus vel odio provident!</p>
        <input type="date" className="input" value={date} onChange={handleDateChange}/>
        <input type="text" className="input-signature" value={name} onChange={handleNameChange} />
    </div>
  )
}
