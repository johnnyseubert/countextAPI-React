import React from 'react'
import HandleCounter from './components/HandleCounter'
import DoubleCounter from './components/DoubleCouter'
import { CounterContextProvider } from './contexts/CounterContext'

export default function App() {
  return (
    <CounterContextProvider>
      <HandleCounter />
      <DoubleCounter />
    </CounterContextProvider>
  )
}

