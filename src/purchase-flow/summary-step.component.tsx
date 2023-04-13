import React from 'react'
import { Link } from 'react-router-dom'
import { PurchaseStepsType } from '../types/purchase-steps.type'
import { PurchaseFlow } from '../constants/purchase-flow.constants'

interface SummaryStepProps {
  collectedData: PurchaseStepsType
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <React.Fragment>
      {props.collectedData?.email && (
        <div>
          {PurchaseFlow.email}: {props.collectedData.email}
        </div>
      )}
      {props.collectedData?.age && (
        <div>
          {PurchaseFlow.age}: {props.collectedData.age}
        </div>
      )}
      {props.collectedData?.name?.name && (
        <div>
          {PurchaseFlow.name}: {props.collectedData.name.name}
        </div>
      )}
      {props.collectedData?.name?.surname && (
        <div>
          {PurchaseFlow.surname}: {props.collectedData.name.surname}
        </div>
      )}
      <div>
        <Link to="/purchased=dev_ins">{PurchaseFlow.purchase}</Link>
      </div>
    </React.Fragment>
  )
}

export default SummaryStep
