import { DataProduct, FormProduct, PaidBy, ShareRule, ShareRuleSpendings } from './interfaces'

const round2 = (n: number) => Math.round(n * 100) / 100

const getSpendingsByUser = (
  products: DataProduct[]
): { spentByVasyl: number; spentByMarian: number } => {
  return products.reduce((sum, product) => {
    let { spentByVasyl, spentByMarian } = sum

    if (product.paidBy === PaidBy.Vasyl) {
      spentByVasyl += product.price
    } else {
      spentByMarian += product.price
    }

    return {
      spentByVasyl: round2(spentByVasyl),
      spentByMarian: round2(spentByMarian)
    }
  }, { spentByVasyl: 0, spentByMarian: 0 })
}

const getSpendingsByShareRule = (products: DataProduct[]): ShareRuleSpendings => {
  return products.reduce(
    (sum, product) => {
      let { spentByFfRule, spentBy1to2Rule, spentByVoRule, spentByMoRule } = sum;

      if (product.shareRule === ShareRule.Fifty_Fifty) {
        spentByFfRule += product.price;
      } else if (product.shareRule === ShareRule.One_to_Two) {
        spentBy1to2Rule += product.price;
      } else if (product.shareRule === ShareRule.VasylOnly) {
        spentByVoRule = product.price;
      } else {
        spentByMoRule = product.price;
      }

      return {
        spentByFfRule: round2(spentByFfRule),
        spentBy1to2Rule: round2(spentBy1to2Rule),
        spentByVoRule: round2(spentByVoRule),
        spentByMoRule: round2(spentByMoRule),
      };
    },
    { spentByFfRule: 0, spentBy1to2Rule: 0, spentByVoRule: 0, spentByMoRule: 0 }
  );
}

const getVasylsItemsTotalPrice = (spendingsByShareRule: ShareRuleSpendings) => {
  return round2(
    spendingsByShareRule.spentByFfRule / 2 +
    spendingsByShareRule.spentBy1to2Rule / 3 +
    spendingsByShareRule.spentByVoRule
  )
}

const getMariansItemsTotalPrice = (spendingsByShareRule: ShareRuleSpendings) => {
  return round2(
    spendingsByShareRule.spentByFfRule / 2 +
    spendingsByShareRule.spentBy1to2Rule / 3 * 2 +
    spendingsByShareRule.spentByMoRule
  )
}

export const calcSummary = (productsOrig: FormProduct[]) => {
  const products = productsOrig.map(product => ({...product, price: parseFloat(product.price)}))
  const spendingsByShareRule = getSpendingsByShareRule(products)
  const { spentByVasyl, spentByMarian } = getSpendingsByUser(products)

  const vasylsItemsTotalPrice = getVasylsItemsTotalPrice(spendingsByShareRule)
  const mariansItemsTotalPrice = getMariansItemsTotalPrice(spendingsByShareRule)

  console.log('products', products)
  console.log('spentByMarian', spentByMarian)
  console.log('spentByVasyl', spentByVasyl)
  console.log('mariansItemsTotalPrice', mariansItemsTotalPrice)
  console.log('vasylsItemsTotalPrice', vasylsItemsTotalPrice)

  if (vasylsItemsTotalPrice + mariansItemsTotalPrice !== spentByVasyl + spentByMarian) {
    alert('Your math/CS skills sucks!')
    // throw('Your math/CS skills sucks!');
    return
  }

  return {
    vasylsFinalState: round2(spentByVasyl - vasylsItemsTotalPrice),
    mariansFinalState: round2(spentByMarian - mariansItemsTotalPrice)
  }
}