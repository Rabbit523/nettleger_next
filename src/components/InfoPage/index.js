import { useRouter } from 'next/router'
import { Row } from 'antd'
import Seo from '../Seo'
import Navbar from '../navbar'
import Footer from '../footer'
import { SLayout, SButton } from '../../TreatmentPage/style'
import { Wrapper, Title, Description, ButtonWrapper } from '../Page404/style'

const InfoPage = (props) => {
  const { slugs, treatments } = props
  const router = useRouter()

  return (
    <SLayout>
      <Seo meta_title={`Avslutt behandling - Nettleger`} meta_description="" />
      <Navbar items={slugs} />
      <Wrapper className="info">
        <Row>
          <Title className="info">
            <h2>Viktig beskjed</h2>
          </Title>
          <Description className="info">
            <h2>Sikkerhet er viktig for oss. Fordi dine rapporterte opplysninger ikke passet med betingelsene for å behandle deg på en trygg måte over nett ble skjemautfyllingen avbrutt.</h2>
            <p>Derfor anbefaler vi at du tar kontakt med en vanlig legevakt eller fastlege.</p>
            <p><b>Hvis dette var en feiltakelse</b> kan du fylle ut skjemaet på nytt eller trykke tilbake-knappen i nettleseren din.</p>
            <p>Har du andre spørsmål? Chat med oss!</p>
          </Description>
          <ButtonWrapper>
            <SButton color="#0080f6" hover="#83b9ea" onClick={() => router.push('/')}>Tilbake til forside</SButton>
          </ButtonWrapper>
        </Row>
      </Wrapper>
      <Footer treatments={treatments} slugs={slugs} />
    </SLayout>
  )
}

export default InfoPage