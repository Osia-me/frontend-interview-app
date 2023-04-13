import React, { useState } from 'react'
import { PurchaseFlow } from '../constants/purchase-flow.constants'
import isEmailValid from '../helpers/is-email-valid'
import './email-step.css'

interface EmailStepProps {
  updateUserData: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    props.updateUserData('email', email)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {PurchaseFlow.email}:
        <input
          type="email"
          onChange={({ target: { value } }) => {
            if (!isEmailValid(value)) {
              setError(PurchaseFlow.emailError)
            } else {
              setError('')
            }
            setEmail(value)
          }}
          value={email}
        />
        <div className="Email-error">{error}</div>
      </div>
      <button type="submit" disabled={!!error || email === ''}>
        {PurchaseFlow.next}
      </button>
    </form>
  )
}

export default EmailStep
