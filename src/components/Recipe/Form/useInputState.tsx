import { useState } from 'react'

function useInputState(initialVal: string): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  console.log('initialVal', initialVal)
  const [value, setValue] = useState(initialVal)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const reset = () => {
    setValue('')
  }
  return [value, handleChange, reset]
}

export default useInputState
