import React, { useState, useRef, useEffect } from 'react'
import { Form, Input, Divider, Select, Checkbox, Button, Modal } from 'antd'
import { CovidStep1Box, PaymentListBox, ProcessPaymentBox } from './style'
import Loader from '../components/loading'
import Notification from '../components/notification'
import customAxios from '../utils/customAxios'
import short from 'short-uuid'

const { Option } = Select
const today = new Date()

function CovidStep3 (props) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [payment, setPayment] = useState('visa')
  const [modalContentType, setModalContentType] = useState('PaymentListBox')
  const [month, setMonth] = useState(today.getMonth() + 1)
  const [year, setYear] = useState(today.getFullYear())
  const [pan, setPan] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const { cost, validation, processPayment, updateProcessPayment } = props
  const [form] = Form.useForm()
  const ref = useRef()
  const formatedNumber = new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' }).format(cost)
  const orderNumber = short.generate()

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (processPayment) {
      setIsOpen(true)
      setPayment('visa')
      setModalContentType('PaymentListBox')
      setMonth(today.getMonth() + 1)
      setYear(today.getFullYear())
      setPan('')
      setSecurityCode('')
      form.setFieldsValue({
        pan: '',
        cvv2: ''
      })
    }
  }, [processPayment])

  function closeModal() {
    setIsOpen(false)
    updateProcessPayment(false)
  }
  function handlePan(e) {
    if (e.target.validity.valid) {
      setPan(e.target.value)
      form.setFieldsValue({ pan: e.target.value })
    } else {
      form.setFieldsValue({ pan })
    }
  }
  function handleSecurityCode(e) {
    if (e.target.validity.valid) {
      setSecurityCode(e.target.value)
      form.setFieldsValue({ cvv2: e.target.value })
    } else {
      form.setFieldsValue({ cvv2 })
    }
  }
  async function handlePay() {
    closeModal()
    setIsLoading(true)
    const { ok, data } = await customAxios.post('/api/custom/registerNets', {
      pan,
      securityCode,
      expiryDate: month + '' + year.toString().substring(2, 4),
      amount: cost * 100,
      orderNumber
    })
    if (ok) {
      setIsLoading(false)
      Notification({title: 'Suksess', description: 'Transaksjonen er vellykket.', type: 'success'})
      validation({ success: true, transactionId: data.transactionId, orderId: data.transactionId[1] })
    } else {
      setIsLoading(false)
      Notification({title: 'Feil oppsto', description: data.message, type: 'error'});
    }
  }

  return (
    <CovidStep1Box>
      {isLoading && <Loader isLoading={isLoading} />}
      <h1>Betaling</h1>
      <h5>Etter at du har betalt går en lege gjennom opplysningene.</h5>
      <ul>
        <li>Hvis legen trenger flere opplysninger, blir du ringt opp.</li>
        <li>Pris er {formatedNumber}.</li>
        <li>Hvis forespørselen blir avvist betaler du ingenting.</li>
        <li>Du får svar i løpet av noen få minutter.</li>
      </ul>
      <Divider />
      <div className="img-group">
        <div className="img-wrapper"><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/visa.png`} alt="Logo" /></div>
        <div className="img-wrapper" style={{ width: '100px' }}><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/mastercard.png`} alt="Logo" /></div>
        <div className="img-wrapper"><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/vipps.png`} alt="Logo" /></div>
        <div className="img-wrapper"><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/nets.png`} alt="Logo" /></div>
      </div>
      <Divider />
      <Modal
        visible={modalIsOpen}
        closable={false}
        footer={modalContentType == 'PaymentListBox' ? [
          <Button className="btn-cancel" onClick={() => closeModal()}>Avbryt</Button>,
          <Button className="btn-next" onClick={() => setModalContentType('ProcessPaymentBox')}>Neste {'>'}</Button>] : [
          <Button className="btn-previous" onClick={() => setModalContentType('PaymentListBox')}>{'<'} Tilbake</Button>,
          <Button className="btn-cancel" onClick={() => closeModal()}>Avbryt</Button>,
          <Button type="primary" htmlType="submit" className="btn-pay" onClick={() => form.submit()}>Betal</Button>
        ]}>
        <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/TopLedge_New.png`} alt="Netaxept" />
        <p><strong>Brukersted:</strong>&nbsp;Nohman Janjua</p>
        <p><strong>Beløp:</strong>&nbsp;{formatedNumber}</p>
        <p><strong>Ordrenummer:</strong>&nbsp;{orderNumber}</p>
        <div style={{ marginBottom: 10,  paddingBottom: 10, borderBottom: 1, borderBottomStyle: 'solid', borderBottomColor: 'black' }}></div>
        <p>Velg betalingsmåte og trykk 'Neste'</p>
        {modalContentType == 'PaymentListBox' ?
          <PaymentListBox>
            <div>
              <Checkbox onClick={() => setPayment('visa')} checked={payment == 'visa' ? true : false}>&nbsp;&nbsp;<span className="card-name">Visa</span></Checkbox><br/>
              <Checkbox onClick={() => setPayment('mastercard')} checked={payment == 'mastercard' ? true : false}>&nbsp;&nbsp;<span className="card-name">Mastercard</span></Checkbox><br/>
              <Checkbox onClick={() => setPayment('american_express')} checked={payment == 'american_express' ? true : false}>&nbsp;&nbsp;<span className="card-name">American Express</span></Checkbox><br/>
              <Checkbox onClick={() => setPayment('diners_club')} checked={payment == 'diners_club' ? true : false}>&nbsp;&nbsp;<span className="card-name">Diners Club</span></Checkbox><br/>
              <Checkbox onClick={() => setPayment('jcb')} checked={payment == 'jcb' ? true : false}>&nbsp;&nbsp;<span className="card-name">JCB</span></Checkbox><br/>
              <Checkbox onClick={() => setPayment('maestro')} checked={payment == 'maestro' ? true : false}>&nbsp;&nbsp;<span className="card-name">Maestro</span></Checkbox><br/>
              <Checkbox onClick={() => setPayment('märkeskort_ikano')} checked={payment == 'märkeskort_ikano' ? true : false}>&nbsp;&nbsp;<span className="card-name">Märkeskort Ikano</span></Checkbox><br/>
            </div>
          </PaymentListBox>
          : 
          <ProcessPaymentBox>
            <Form form={form} ref={ref} layout="vertical" onFinish={handlePay}>
              <div className="card">
                <div className="card-info">
                  <div className="card-info-row">
                    <div className="stype">
                      Kortnummer
                    </div>
                    <div className="svalue">
                      <Form.Item
                        name="pan"
                        rules={[{ required: true, message: 'Please input card number!' }]}
                        hasFeedback
                      >
                        <Input id="pan" pattern="[0-9]*" onChange={(e) => handlePan(e)} placeholder="0000000000000000"/>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="card-info-row">
                    <div className="stype">
                      Utløpsdato (Måned/år)
                    </div>
                    <div className="svalue">
                      <Form.Item>
                        <Select defaultValue={month} style={{ width: 70, marginRight: 10 }} onChange={(v) => setMonth(v)}>
                          <Option value="01">01</Option>
                          <Option value="02">02</Option>
                          <Option value="03">03</Option>
                          <Option value="04">04</Option>
                          <Option value="05">05</Option>
                          <Option value="06">06</Option>
                          <Option value="07">07</Option>
                          <Option value="08">08</Option>
                          <Option value="09">09</Option>
                          <Option value="10">10</Option>
                          <Option value="11">11</Option>
                          <Option value="12">12</Option>
                        </Select>
                        <Select defaultValue={year} style={{ width: 90 }} onChange={(v) => setYear(v)}>
                          {
                            Array.from(Array(2051 - today.getFullYear()).keys()).map((v, index) => {
                              return <Option key={index} value={today.getFullYear() + v}>{today.getFullYear() + v}</Option>
                            })
                          }
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  {payment != 'maestro' && payment != 'märkeskort_ikano' && 
                    <div className="card-info-row">
                      <div className="stype">
                        CVV2
                      </div>
                      <div className="svalue">
                        <Form.Item
                          name="cvv2"
                          rules={[{ required: true, message: 'Please input cvv2!' }]}
                          hasFeedback
                        >
                          <Input id="cvv2" pattern="[0-9]*" onChange={(e) => handleSecurityCode(e)} placeholder="000"/>
                        </Form.Item>
                      </div>
                    </div>
                  }
                </div>
                <div className="card-img">
                  {
                    payment == 'visa' ?
                      <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/visa_0.png`} alt="Visa" />
                    : payment == 'mastercard' ?
                      <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/mastercard_0.png`} alt="Mastercard" />
                    : payment == 'american_express' ?
                      <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/amex_0.png`} alt="American Express" />
                    : payment == 'diners_club' ?
                      <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/diners_0.jpg`} alt="Diners Club" />
                    : payment == 'jcb' ?
                      <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/jcb_0.png`} alt="JCB" />
                    : payment == 'maestro' ?
                      <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/maestro_0.png`} alt="Maestro" />
                    : <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/svwIkano_0.png`} alt="Märkeskort Ikano" />
                  }
                </div>
              </div>
            </Form>
          </ProcessPaymentBox>}
      </Modal>
    </CovidStep1Box>
  )
}

export default CovidStep3