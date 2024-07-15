import { Product, PaidBy, Results, ShareRule } from './interfaces'

const round2 = (n: number) => Math.round(n * 100) / 100

const calcStats = (products: Product[]) => {
  let spentByFfRule = 0
  let spentBy1to2Rule = 0
  let spentByVoRule = 0
  let spentByMoRule = 0
  let spentByVasyl = 0
  let spentByMarian = 0

  products.forEach(product => {
    const price = parseFloat(product.price)

    if (product.paidBy === PaidBy.Vasyl) {
      spentByVasyl = round2(spentByVasyl + price)
    } else {
      spentByMarian = round2(spentByMarian + price)
    }

    if (product.shareRule === ShareRule.Fifty_Fifty) {
      spentByFfRule = round2(spentByFfRule + price)
    } else if (product.shareRule === ShareRule.One_to_Two) {
      spentBy1to2Rule = round2(spentBy1to2Rule + price)
    } else if (product.shareRule === ShareRule.VasylOnly) {
      spentByVoRule = round2(spentByVoRule + price)
    } else {
      spentByMoRule = round2(spentByMoRule + price)
    }
  })

  return {
    spentByFfRule,
    spentBy1to2Rule,
    spentByVoRule,
    spentByMoRule,
    spentByMarian,
    spentByVasyl
  }
}

export const calcSummary = (products: Product[]): Results => {
  const results = calcStats(products)
  const {
    spentByFfRule,
    spentBy1to2Rule,
    spentByVoRule,
    spentByMoRule,
    spentByMarian,
    spentByVasyl
  } = results

  const vasylsItemsTotalPrice = round2(
    spentByFfRule / 2 +
    spentBy1to2Rule / 3 +
    spentByVoRule
  )

  const mariansItemsTotalPrice = round2(
    spentByFfRule / 2 +
    spentBy1to2Rule / 3 * 2 +
    spentByMoRule
  )

  console.assert(
    vasylsItemsTotalPrice + mariansItemsTotalPrice === spentByVasyl + spentByMarian,
    'Spending do not match! Your CS/Math skills sucks..'
  )

  return {
    vasylsItemsTotalPrice,
    mariansItemsTotalPrice,
    spentByVasyl,
    spentByMarian,
    vasylsFinalState: round2(spentByVasyl - vasylsItemsTotalPrice),
    mariansFinalState: round2(spentByMarian - mariansItemsTotalPrice)
  }
}
