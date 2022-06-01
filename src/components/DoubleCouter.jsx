import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext';

export default function DoubleCouter() {
    const { counter } = useContext(CounterContext);
    return (
        <h1> {counter * 2}</h1>
    )
}
