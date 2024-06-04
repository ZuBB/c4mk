import { Results } from './interfaces'

type StatsProps = {
  results: Results
}

function Stats({ results }: StatsProps) {
  const {
    vasylsItemsTotalPrice,
    mariansItemsTotalPrice,
    spentByVasyl,
    spentByMarian,
    vasylsFinalState,
    mariansFinalState
  } = results;

  return (
    <dl className="my-2 ml-2">
      <dt className="my-2 font-medium">Actual spendings</dt>
      <dd>Marian: <code>{spentByMarian}</code></dd>
      <dd>Vasyl: <code>{spentByVasyl}</code></dd>

      <dt className="my-2 font-medium">Real spendings</dt>
      <dd>Marian: <code>{mariansItemsTotalPrice}</code></dd>
      <dd>Vasyl: <code>{vasylsItemsTotalPrice}</code></dd>

      <dt className="my-2 font-medium">Final stats</dt>
      <dd>Marian: <code>{mariansFinalState}</code></dd>
      <dd>Vasyl: <code>{vasylsFinalState}</code></dd>
    </dl>
  )
}

export default Stats
