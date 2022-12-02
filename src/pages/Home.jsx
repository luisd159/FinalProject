import React from 'react'
import { useAuthContext } from '../Auth.context'
import Content from '../components/Content'

export default function Home() {
  const {user} = useAuthContext()
  return (
    <div>
      <Content/>
    </div>
  )
}
