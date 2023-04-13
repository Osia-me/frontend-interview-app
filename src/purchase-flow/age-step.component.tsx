import React, { useState } from 'react'
import { PurchaseFlow } from '../constants/purchase-flow.constants'

interface AgeStepProps {
  updateUserData: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState<number>(0)
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    props.updateUserData('age', age!)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {PurchaseFlow.age}:
        <input
          type="number"
          step="1"
          min="0"
          max="110"
          onChange={({ target: { value } }) => {
            if (!isNaN(parseInt(value, 10))) {
              setAge(parseInt(value, 10))
            }
          }}
          value={age}
        />
      </div>
      <button type="submit" disabled={!age}>
        {PurchaseFlow.next}
      </button>
    </form>
  )
}

export default AgeStep
