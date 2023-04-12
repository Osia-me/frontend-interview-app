export enum PurchaseSteps {
    email = 'email',
    age = 'age',
    name = 'name',
    summary = 'summary'
}

export type PurchaseStepsType = {
    email?: string,
    age?: number,
    name?: string,
    surname?: string
}