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

export interface Product {
  product: string,
  price: string,
  shareRule: ShareRule | ''
  paidBy: PaidBy | ''
}

export type FormData = {
  products: Product[]
}
