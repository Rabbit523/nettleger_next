import { Divider } from 'antd'
import { Treatment1Box } from './style'

function TreatmentStep5 () {
  return (
    <Treatment1Box>
      <h1>Fullført</h1>
      <h5>Takk for din henvendelse. En av våre leger vil ta kontakt.</h5>
      <ul>
        <li>Hvis legen trenger flere opplysninger, blir du ringt opp.</li>
        <li>Hvis forespørselen blir avvist betaler du ingenting.</li>
        <li>Du får svar i løpet av noen få minutter.</li>
      </ul>
      <Divider />
    </Treatment1Box>
  )
}

export default TreatmentStep5