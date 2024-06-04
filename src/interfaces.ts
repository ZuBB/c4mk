export enum PaidBy {
  Marian = "Marian",
  Vasyl = "Vasyl"
}

export enum ShareRule {
  Fifty_Fifty = "Fifty_Fifty",
  One_to_Two = "One_to_Two",
  MarianOnly = "MarianOnly",
  VasylOnly = "VasylOnly"
}

interface BaseProduct {
  product: string,
  shareRule: ShareRule | ''
  paidBy: PaidBy | ''
}

export interface FormProduct extends BaseProduct {
  price: string,
}

export interface DataProduct extends BaseProduct {
  price: number,
}

export type FormData = {
  products: FormProduct[]
}

export interface ShareRuleSpendings {
  spentByFfRule: number;
  spentBy1to2Rule: number;
  spentByVoRule: number;
  spentByMoRule: number;
}
