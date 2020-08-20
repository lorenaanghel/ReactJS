import * as React from 'react'
import PaddingTable from './components/table-component/table-component.component'
import ProgressBarSize from './components/progress-bar-component/progress-bar-component.component'
import CardDefault from './components/card-component/card-component.component'

export const StartingPage = () => {
  return (
    <div>
      <h1>This is a table</h1>
      <PaddingTable></PaddingTable>
      <h1>This is a progress bar</h1>
      <ProgressBarSize></ProgressBarSize>
      <h1>This is a card</h1>
      <CardDefault></CardDefault>
    </div>
  )
}
