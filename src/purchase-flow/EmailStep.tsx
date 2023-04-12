import React, { useState } from 'react'
import { PurchaseFlow } from '../constants/purchase-flow.constants'
import isEmailValid from '../helpers/is-email-valid';
import './EmailStep.css';

interface EmailStepProps {
  updateUserData: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <React.Fragment>
      <div>
      {PurchaseFlow.email}:
        <input
          type="email"
          onChange={ ({ target: { value } }) => {
            if(!isEmailValid(value)){
              setError(PurchaseFlow.emailError);
            } else {
              setError('');
            }
            setEmail(value);
          }}
          value={email}
        ></input>
        <div className='Email-error'>{error}</div>
      </div>
      <button 
        onClick={() => props.updateUserData('email', email)}
        disabled={!!error || email === ''}
      >
          {PurchaseFlow.next}</button>
    </React.Fragment>
  )
}

export default EmailStep
