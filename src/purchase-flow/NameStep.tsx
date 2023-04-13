import React, { useState } from 'react'
import { PurchaseFlow } from '../constants/purchase-flow.constants'
import isEmailValid from '../helpers/is-email-valid'
import './EmailStep.css'

interface NameStepProps {
  updateUserData: (field: string, value: object) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  return (
    <React.Fragment>
      <div>
        {PurchaseFlow.name}:
        <input
          type="text"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
        />
      </div>
      <div>
        {PurchaseFlow.surname}:
        <input
          type="text"
          onChange={({ target: { value } }) => setSurname(value)}
          value={surname}
        />
      </div>
      <button
        onClick={() => {
          props.updateUserData('name', { name, surname })
        }}
        disabled={!name || !surname}
      >
        {PurchaseFlow.next}
      </button>
    </React.Fragment>
  )
}

export default NameStep
