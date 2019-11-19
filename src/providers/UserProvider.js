import React, { useContext, useState } from 'react'
import { isNil } from 'lodash'

const UserContext = React.createContext()

function useUsername() {
  const context = useContext(UserContext)
  if (isNil(context)) {
    throw new Error('useUsername must be used inside a UserProvider')
  }
  return context
}

function UserProvider({ children }) {
  const [username, setUsername] = useState('')

  return <UserContext.Provider value={[username, setUsername]}>{children}</UserContext.Provider>
}

export { useUsername }
export default UserProvider
