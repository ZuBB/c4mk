export type FormData = {
  totalPaidM: number,
  totalPaidV: number
  products: {
    product: string | null,
    price: number | null,
    split: number | null
    paid: number | null
  }[]
}
