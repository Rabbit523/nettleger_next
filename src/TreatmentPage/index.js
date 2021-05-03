import { useState, useEffect, useRef } from 'react'
import { Steps, Form } from 'antd'
import { useRouter } from 'next/router'
import Seo from 'components/Seo'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Notification from 'components/notification'
import TreatmentStep1 from './TreatmentStep1'
import TreatmentStep2 from './TreatmentStep2'
import TreatmentStep3 from './TreatmentStep3'
import TreatmentStep4 from './TreatmentStep4'
import TreatmentStep5 from './TreatmentStep5'
import customAxios from '../utils/customAxios'
import { SLayout, PageContainer, SContainer, SContent, SButton } from './style'
import { stepsArr, validFields } from '../utils/constant'

const { Step } = Steps

const TreatmentPage = (props) => {
  const { name, meta_title, meta_description, content, card_cost, slugs, treatments } = props
  const stepsData = Object.values(JSON.parse(content)).map((item) => item)
  const [current, setCurrent] = useState(0)
  const [transactionRes, setTransactionRes] = useState({ success: false, transactionId: '', orderId: '' })
  const [isProcessPayment, setIsProcessPayment] = useState(false)
  const [isMultipleStep, setIsMultipleStep] = useState(false)
  const [isQuestionSuccess, setIsQuestionSuccess] = useState(false)
  const [hasQuestions, setHasQuestions] = useState(false)
  const [step2Data, setStep2Data] = useState([])
  const [step3Data, setStep3Data] = useState({})
  const [form] = Form.useForm()
  const formRef = useRef()
  const router = useRouter()

  useEffect(() => {
    const state = []
    if (stepsData[2].length > 1) {
      setIsMultipleStep(true)
    } else {
      setIsMultipleStep(false)
    }
    Object.values(stepsData[2]).map((item) => {
      item.content.map((field) => {
        if (validFields.includes(field.type)) {
          if (field.type !== 'Questions') {
            const tmp = {}
            if (field.type === 'Groupbox') {
              tmp['Groupbox'] = {
                question: field.name,
                answer: ''
              }
            } else {
              tmp[field.name] = null
            }
            state.push(tmp)
          } else {
            setHasQuestions(true)
          }
        }
      })
    })
    setStep2Data(state)
  }, [])

  const next = () => {
    if (current === 1) {
      if (handleStep2Validation(step2Data)) {
        setCurrent(current + 1)
      } else {
        Notification({title: 'Validation Error', description: 'Please check all fields', type: 'error'})
      }      
    } else if (current === 2) {
      formRef.current.submit()
      form.validateFields().then(values => {
        const userInfo = { email: values.email, name: values.first_name + " " + values.last_name, mobile_number: values.prefix + values.mobile_number, birthday: values.birthday}
        setStep3Data(userInfo)
        setCurrent(current + 1)
      }).catch(errorInfo => {
        console.log(errorInfo)
      })
    } else if (current === 3) {
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
    if (current === 2 || current === 1) {
      setIsQuestionSuccess(false)
    }
    setCurrent(current - 1)
  }

  const done = () => {
    Notification({title: 'Success', description: 'Processing complete!', type: 'success'})
    const send_obj = {...step3Data, treatment: JSON.stringify(step2Data), treatmentType: name}
    customAxios.post(`/api/custom/registerTreatment`, send_obj).then(() => router.push('/'))
  }

  const handleTransactionValidation = (res) => {
    setTransactionRes({ success: res.success, transactionId: res.transactionId, orderId: res.orderId })
    setCurrent(current + 1)
  }

  const handleStep2Validation = () => {
    let isValid = true
    step2Data.map((item) => {
      Object.values(item).map((value) => {
        if (value === null) {
          isValid = false
        } else if (Array.isArray(value)) {
          if (value.length === 0) {
            isValid = false
          }
        }
      })
    })
    return isValid
  }

  return (
    <SLayout>
      <Seo meta_title={meta_title ? meta_title : `${name} - Nettleger`} meta_description={meta_description} />
      <Navbar items={slugs} />
      <PageContainer>
        <SContainer>
          <SContent>
            <Steps current={current}>
              {stepsArr.map(item => (
                <Step key={item} title={item} />
              ))}
            </Steps>
            <div className="steps-content">
              {current === 0 && <TreatmentStep1 name={name} content={stepsData[1]} />}
              {current === 1 && <TreatmentStep2 
                content={stepsData[2]}
                state={step2Data}
                send={setStep2Data}
                isMultipleStep={isMultipleStep}
                isQuestionSuccess={isQuestionSuccess}
                back={() => router.push('/info/avsluttbehandling')}
                update={() => {
                  if (isMultipleStep) {
                    setIsQuestionSuccess(true)
                  } else {
                    setCurrent(current + 1)
                  }
                }}
              />}
              {current === 2 && <TreatmentStep3 form={form} ref={formRef} />}
              {current === 3 && <TreatmentStep4 
                cost={card_cost}
                validation={handleTransactionValidation}
                processPayment={isProcessPayment}
                updateProcessPayment={setIsProcessPayment}
              />}
              {current === 4 && <TreatmentStep5 />}
            </div>
            <div className="steps-action">
              {current < stepsArr.length - 1 && ( 
                current === 1 ? 
                  isMultipleStep ? 
                  (isQuestionSuccess ? <SButton color="#0080f6" hover="#83b9ea" onClick={() => next()}>{current === 0 ? 'kom i gang' : 'gå videre'}</SButton> : null)
                  : !hasQuestions ? <SButton color="#0080f6" hover="#83b9ea" onClick={() => next()}>{current === 0 ? 'kom i gang' : 'gå videre'}</SButton> : null
                : <SButton color="#0080f6" hover="#83b9ea" onClick={() => next()}>{current === 0 ? 'kom i gang' : 'gå videre'}</SButton>)}
              {current === stepsArr.length - 1 && <SButton color="#0080f6" hover="#83b9ea" onClick={() => done()}>Done</SButton>}
              {current > 0 && (
                current === 1 ? 
                  isMultipleStep ? 
                  (isQuestionSuccess ? <SButton style={{ margin: '0 8px' }} color="#e1e1e1" hover="#cccbcb" onClick={() => prev()}>tilbake</SButton> : null)
                  : !hasQuestions ? <SButton style={{ margin: '0 8px' }} color="#e1e1e1" hover="#cccbcb" onClick={() => prev()}>tilbake</SButton> : null
                : <SButton style={{ margin: '0 8px' }} color="#e1e1e1" hover="#cccbcb" onClick={() => prev()}>tilbake</SButton>)}
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