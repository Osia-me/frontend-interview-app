import React, { useState } from 'react';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import { ProductIds } from '../types/product.type';
import { PRODUCT_IDS_TO_NAMES } from '../constants/product-names.constants';
import { PurchaseSteps, PurchaseStepsType } from '../types/purchase-steps.type';

interface BuyflowProps {
  productId: ProductIds
}

const Purchaseflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setCurrentStep] = useState('email');
  const [collectedData, setCollectedData] = useState<PurchaseStepsType>({
    email: '',
    age: '',
    name: '',
    surname: ''
  })

  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    setCollectedData({ ...collectedData, [field]: value })
    setCurrentStep(nextStep);
  }

  return (
    <React.Fragment>
      <h4>{PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === PurchaseSteps.email && <EmailStep updateUserData={getStepCallback(PurchaseSteps.age)} />) ||
        (currentStep === PurchaseSteps.age && (
          <AgeStep updateUserData={getStepCallback(PurchaseSteps.summary)} />
        )) ||
        (currentStep === PurchaseSteps.summary && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </React.Fragment>
  )
}

export default Purchaseflow
