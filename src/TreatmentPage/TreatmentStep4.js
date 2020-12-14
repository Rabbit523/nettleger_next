import { Divider } from 'antd'
import { Treatment1Box } from './style'

function TreatmentStep4 (props) {
  return (
    <Treatment1Box>
      <h1>Betaling</h1>
      <h5>Etter at du har betalt går en lege gjennom opplysningene.</h5>
      <ul>
        <li>Hvis legen trenger flere opplysninger, blir du ringt opp.</li>
        <li>Pris er kr 299.</li>
        <li>Hvis forespørselen blir avvist betaler du ingenting.</li>
        <li>Du får svar i løpet av noen få minutter.</li>
      </ul>
      <Divider />
      <div className="img-btn-group">
        <button><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/visa.png`} alt="Logo" /></button>
        <button style={{ width: '100px' }}><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/mastercard.png`} alt="Logo" /></button>
        <button><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/vipps.png`} alt="Logo" /></button>
        <button><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/nets.png`} alt="Logo" /></button>
      </div>
      <Divider />
    </Treatment1Box>
  )
}

export default TreatmentStep4