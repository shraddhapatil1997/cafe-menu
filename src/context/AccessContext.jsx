import { createContext, useContext, useState } from 'react'

const AccessContext = createContext(null)

export function AccessProvider({ children }) {
  const [unlocked, setUnlocked] = useState(false)

  const grantAccess = () => setUnlocked(true)

  return (
    <AccessContext.Provider value={{ unlocked, grantAccess }}>
      {children}
    </AccessContext.Provider>
  )
}

export function useAccess() {
  const ctx = useContext(AccessContext)
  if (!ctx) throw new Error('useAccess must be used within <AccessProvider>')
  return ctx
}
