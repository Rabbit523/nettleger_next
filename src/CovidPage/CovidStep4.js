import { useEffect } from 'react'
import { Divider } from 'antd'
import { CovidStep1Box } from './style'

function CovidStep4 () {
  
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
    <CovidStep1Box>
      <h1>Fullført</h1>
      <h5>Takk for din henvendelse. En av våre leger vil ta kontakt.</h5>
      <ul>
        <li>Hvis legen trenger flere opplysninger, blir du ringt opp.</li>
        <li>Hvis forespørselen blir avvist betaler du ingenting.</li>
        <li>Du får svar i løpet av noen få minutter.</li>
      </ul>
      <Divider />
    </CovidStep1Box>
  )
}

export default CovidStep4