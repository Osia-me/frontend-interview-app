import React, { useMemo, useState } from 'react'
import AgeStep from './age-step.component'
import EmailStep from './email-step.component'
import SummaryStep from './summary-step.component'
import { ProductIds } from '../types/product.type'
import { PRODUCT_IDS_TO_NAMES } from '../constants/product-names.constants'
import { PurchaseSteps, PurchaseStepsType } from '../types/purchase-steps.type'
import NameStep from './name-step.component'

interface BuyflowProps {
  productId: ProductIds
}

const Purchaseflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setCurrentStep] = useState(PurchaseSteps.Email)
  const [collectedData, setCollectedData] = useState<PurchaseStepsType>({
    email: '',
    age: '',
    name: {
      name: '',
      surname: '',
    },
    surname: '',
  })

  const getStepCallback =
    (nextStep: PurchaseSteps) => (field: string, value: any) => {
      setCollectedData({ ...collectedData, [field]: value })
      setCurrentStep(nextStep)
    }

  const isDesignerInsurance = props.productId === ProductIds.designerInsurance

  const ActiveView = useMemo(() => {
    switch (currentStep) {
      case PurchaseSteps.Email:
        return <EmailStep updateUserData={getStepCallback(PurchaseSteps.Age)} />
      case PurchaseSteps.Age:
        return (
          <AgeStep
            updateUserData={getStepCallback(
              isDesignerInsurance ? PurchaseSteps.Name : PurchaseSteps.Summary
            )}
          />
        )
      case PurchaseSteps.Name:
        return (
          <NameStep updateUserData={getStepCallback(PurchaseSteps.Summary)} />
        )
      case PurchaseSteps.Summary:
        return <SummaryStep collectedData={collectedData} />
    }
  }, [currentStep])

  return (
    <React.Fragment>
      <h4>{PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {ActiveView}
    </React.Fragment>
  )
}

export default Purchaseflow
