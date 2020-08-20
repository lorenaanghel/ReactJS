import React from 'react'
import ProgressBar from 'terra-progress-bar'

const ProgressBarSize = () => (
  <div>
    <ProgressBar heightSize='tiny' valueText='15%' value={15} />
    <br />
    <br />
    <ProgressBar heightSize='small' valueText='30%' value={30} />
    <br />
    <br />
    <ProgressBar heightSize='medium' valueText='45%' value={45} />
    <br />
    <br />
    <ProgressBar heightSize='large' valueText='60%' value={60} />
    <br />
    <br />
    <ProgressBar heightSize='huge' valueText='75%' value={75} />
  </div>
)

export default ProgressBarSize
