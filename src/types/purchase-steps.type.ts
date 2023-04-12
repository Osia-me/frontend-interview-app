export enum PurchaseSteps {
    Email,
    Age,
    Name,
    Summary
}

type PurchaseNameType = {
    name?: string,
    surname?: string
}

export type PurchaseStepsType = {
    email?: string,
    age?: string,
    name?: PurchaseNameType,
    surname?: string
}