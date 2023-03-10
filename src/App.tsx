import { FC, useState } from 'react'
import './App.css'
import InputField from './components/InputField'

const App: FC = () => {

  const [todo, setTodo] = useState<string>('');

  return (
    <div className='App'>
      <span className='heading'>Accompli</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
