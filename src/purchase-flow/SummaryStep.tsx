import React from 'react'
import { Link } from 'react-router-dom'
import { PurchaseStepsType } from '../types/purchase-steps.type'

interface SummaryStepProps {
  collectedData: PurchaseStepsType
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      {props.collectedData.email && <div>Email: {props.collectedData.email}</div>}
      {props.collectedData.age && <div>Age: {props.collectedData.age}</div>}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
