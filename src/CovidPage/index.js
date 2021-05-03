import { useState } from 'react'
import { Steps } from 'antd'
import Seo from 'components/Seo'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Notification from 'components/notification'
import CovidStep1 from './CovidStep1'
import CovidStep2 from './CovidStep2'
import CovidStep3 from './CovidStep3'
import CovidStep4 from './CovidStep4'
import customAxios from '../utils/customAxios'
import { SLayout, PageContainer, SContainer, SContent, SButton } from './style'
import { covidStepsArr, iframes } from '../utils/constant'

const { Step } = Steps

const CovidPage = (props) => {
  const { name, meta_title, meta_description, content, cost, slugs, treatments } = props
  const stepsData = Object.values(JSON.parse(content)).map((item) => item)
  const [current, setCurrent] = useState(0)
  const [transactionRes, setTransactionRes] = useState({ success: false, transactionId: '', orderId: '' })
  const [isProcessPayment, setIsProcessPayment] = useState(false)
  const iframe = iframes[name]

  const next = () => {
    if (current === 2) {
      if (!transactionRes.success) {
        setIsProcessPayment(true)
      } else {
        setCurrent(current + 1) 
      }
    } else {
      setCurrent(current + 1)
    }
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const done = () => {
    Notification({title: 'Success', description: 'Processing complete!', type: 'success'})
    // const send_obj = {...step3Data, treatment: JSON.stringify(step2Data), treatmentType: name}
    // customAxios.post(`/api/custom/registerTreatment`, send_obj).then(() => router.push('/'))
  }

  const handleTransactionValidation = (res) => {
    setTransactionRes({ success: res.success, transactionId: res.transactionId, orderId: res.orderId })
    setCurrent(current + 1)
  }

  return (<SLayout>
    <Seo meta_title={meta_title ? meta_title : `${name} - Nettleger`} meta_description={meta_description} />
    <Navbar items={slugs} />
    <PageContainer>
      <SContainer>
        <SContent>
          <Steps current={current}>
            {covidStepsArr.map(item => (
              <Step key={item} title={item} />
            ))}
          </Steps>
          <div className="steps-content">
            {current === 0 && <CovidStep1 name={name} content={stepsData[1]} />}
            {current === 1 && <CovidStep2 iframe={iframe} />}
            {current === 2 && <CovidStep3 
              cost={cost}
              validation={handleTransactionValidation}
              processPayment={isProcessPayment}
              updateProcessPayment={setIsProcessPayment}
            />}
            {current === 3 && <CovidStep4 />}
          </div>
          <div className="steps-action">
            {current < covidStepsArr.length - 1 && <SButton color="#0080f6" hover="#83b9ea" onClick={() => next()}>{current === 0 ? 'kom i gang' : 'gå videre'}</SButton>}
            {current === covidStepsArr.length - 1 && <SButton color="#0080f6" hover="#83b9ea" onClick={() => done()}>Done</SButton>}
            {current > 0 && <SButton style={{ margin: '0 8px' }} color="#e1e1e1" hover="#cccbcb" onClick={() => prev()}>tilbake</SButton>}
          </div>
        </SContent>
      </SContainer>
    </PageContainer>
    <Footer treatments={treatments} slugs={slugs} />
  </SLayout>)
}
export default CovidPage