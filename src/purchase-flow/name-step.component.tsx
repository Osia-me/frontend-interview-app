import React, { useState } from 'react'
import { PurchaseFlow } from '../constants/purchase-flow.constants'

interface NameStepProps {
  updateUserData: (field: string, value: object) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    props.updateUserData('name', { name, surname })
  }

  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit" disabled={!name || !surname}>
        {PurchaseFlow.next}
      </button>
    </form>
  )
}

export default NameStep
