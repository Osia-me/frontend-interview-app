import React, { useState } from 'react'
import { PurchaseFlow } from '../constants/purchase-flow.constants'

interface AgeStepProps {
  updateUserData: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState<number | undefined>();
  return (
    <>
      <div>
      {PurchaseFlow.age}: {' '}
        <input
          type="number"
          step='1'
          min='0'
          max='110'
          onChange={({ target: { value } }) => {
            setAge(parseInt(value, 10))
          }}
          value={age}
        ></input>
      </div>
      <button onClick={() => props.updateUserData('age', age!)}>{PurchaseFlow.next}</button>
    </>
  )
}

export default AgeStep
