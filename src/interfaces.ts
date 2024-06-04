export enum PaidBy {
  Marian = "Marian",
  Vasyl = "Vasyl"
}

export enum SplitBy {
  Fifty_Fifty = "Fifty_Fifty",
  One_to_Two = "One_to_Two",
  MarianOnly = "MarianOnly",
  VasylOnly = "VasylOnly"
}

export type Product = {
  product: string,
  price: number,
  split: SplitBy | ''
  paid: PaidBy | ''
}

export type FormData = {
  products: Product[]
}
