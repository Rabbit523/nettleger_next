import { useState, useRef } from 'react'
import { Steps, message, Form } from 'antd'
import Seo from 'components/Seo'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import TreatmentStep1 from './TreatmentStep1'
import TreatmentStep2 from './TreatmentStep2'
import TreatmentStep3 from './TreatmentStep3'
import TreatmentStep4 from './TreatmentStep4'
import TreatmentStep5 from './TreatmentStep5'
import { SLayout, PageContainer, SContainer, SContent, SButton } from './style'
import { stepsArr } from '../utils/constant'

const { Step } = Steps

const TreatmentPage = (props) => {
  const { name, meta_title, meta_description, content, slugs, treatments } = props
  const stepsData = Object.values(JSON.parse(content)).map((item) => item)
  const [current, setCurrent] = useState(0)
  const [form] = Form.useForm();
  const formRef = useRef();

  const next = () => {
    if (current !== 2) {
      setCurrent(current + 1)
    } else if (current === 2) {
      formRef.current.submit()
      form.validateFields().then(values => {
        console.log(values)
        console.log(values.birthday.toString())
        setCurrent(current + 1)
      }).catch(errorInfo => {
        console.log(errorInfo)
      })
    }
  };

  const prev = () => {
    setCurrent(current - 1)
  }

  return (
    <SLayout>
      <Seo meta_title={meta_title ? meta_title : `${name} - Nettleger`} meta_description={meta_description} />
      <Navbar items={slugs} />
      <PageContainer>
        <SContainer>
          <SContent>
            <Steps current={current} labelPlacement="vertical">
              {stepsArr.map(item => (
                <Step key={item} title={item} />
              ))}
            </Steps>
            <div className="steps-content">
              {current === 0 && <TreatmentStep1 name={name} content={stepsData[1]} />}
              {current === 1 && <TreatmentStep2 content={stepsData[2]} />}
              {current === 2 && <TreatmentStep3 form={form} ref={formRef} />}
              {current === 3 && <TreatmentStep4 content={stepsData[4]} />}
              {current === 4 && <TreatmentStep5 content={stepsData[5]} />}
            </div>
            <div className="steps-action">
              {current < stepsArr.length - 1 && <SButton color="#47ffb3" hover="#34f7a6" onClick={() => next()}>{current === 0 ? 'kom i gang' : 'gå videre'}</SButton>}
              {current === stepsArr.length - 1 && <SButton color="#47ffb3" hover="#34f7a6" onClick={() => message.success('Processing complete!')}>Done</SButton>}
              {current > 0 && <SButton style={{ margin: '0 8px' }} color="#e1e1e1" hover="#cccbcb" onClick={() => prev()}>tilbake</SButton>}
            </div>
          </SContent>
        </SContainer>
      </PageContainer>
      <Footer treatments={treatments} slugs={slugs} />
    </SLayout>
  )
}

export async function getInitialProps(ctx) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  } finally {
    sheet.seal()
  }
}

export default TreatmentPage