import { FC, useState } from 'react'
import './app.css'
import axios from 'axios'
import type { AppProps, Users } from './app.types'
import User from './components/user'

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<Users[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    try {
      setUsers([])
      setIsLoading(true)
      const { data } = await axios.get('https://randomuser.me/api/?results=10')
      setUsers(data.results)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>Hello {title}</h1>
      <button onClick={handleClick}>Show Users</button>
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map(({ login, name, email }) => (
          <User key={login.uuid} name={name} email={email} />
        ))}
      </ul>
    </div>
  )
}

export default App
