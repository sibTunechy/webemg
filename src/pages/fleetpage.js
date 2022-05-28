import React from 'react'
import Fleet from '../components/Fleet'
import { fleetsObj } from '../components/Fleet/Data';

function Fleetpage() {
  return (
    <>
        <Fleet {...fleetsObj} />
    </>
  )
}

export default Fleetpage;