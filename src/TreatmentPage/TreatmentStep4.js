import { Treatment1Box, PaymentListBox, ProcessPaymentBox } from './style'
import Modal from 'react-modal'
import React from 'react'
import { Form, Input, Divider, Select, Option, Checkbox, Button } from 'antd'
import customAxios from '../utils/customAxios'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const today = new Date();

Modal.setAppElement('#__next')

function TreatmentStep4 (props) {
  const [form] = Form.useForm();
  const [modalIsOpen,setIsOpen] = React.useState(false)
  const [payment, setPayment] = React.useState('visa')
  const [modalContentType, setModalContentType] = React.useState('PaymentListBox')
  const [month, setMonth] = React.useState(today.getMonth() + 1)
  const [year, setYear] = React.useState(today.getFullYear())
  const [pan, setPan] = React.useState('')
  const [securityCode, setSecurityCode] = React.useState('')

  function openModal() {
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
 
  function closeModal() {
    setIsOpen(false)
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

    const { ok, data } = await customAxios.post('/api/custom/registerNets', {
      pan,
      securityCode,
      expiryDate: month + '' + year.toString().substring(2, 4),
      amount: 299*100
    })
    
    if (ok) {
      const transactionId = data.transactionId[0]
      alert('Successfully done! Transaction ID: ' + transactionId)
    } else {
      alert(data.message)
    }
  }

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
        <button onClick={openModal}><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/nets.png`} alt="Logo" /></button>
      </div>
      <Divider />
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Netaxept Payment"
      >
        <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/TopLedge_New.png`} alt="Netaxept" />
        <p><strong>Brukersted:</strong>&nbsp;Nohman Janjua</p>
        <p><strong>Beløp:</strong>&nbsp;1,00 (EUR)</p>
        <p><strong>Ordrenummer:</strong>&nbsp;T12345</p>
        <div style={{ marginBottom: 10,  paddingBottom: 10, borderBottom: 1, borderBottomStyle: 'solid', borderBottomColor: 'black' }}></div>
        <p>Velg betalingsmåte og trykk 'Neste'</p>
        {
          modalContentType == 'PaymentListBox' && 
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
            <div className="btn-group">
              <Button className="btn-cancel" onClick={() => closeModal()}>Avbryt</Button>
              <Button className="btn-next" onClick={() => setModalContentType('ProcessPaymentBox')}>Neste {'>'}</Button>
            </div>
          </PaymentListBox>
        }
        {
          modalContentType == 'ProcessPaymentBox' && 
          <ProcessPaymentBox>
            <Form
              form={form}
              onFinish={handlePay}
            >
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
                          <Select.Option value="01">01</Select.Option>
                          <Select.Option value="02">02</Select.Option>
                          <Select.Option value="03">03</Select.Option>
                          <Select.Option value="04">04</Select.Option>
                          <Select.Option value="05">05</Select.Option>
                          <Select.Option value="06">06</Select.Option>
                          <Select.Option value="07">07</Select.Option>
                          <Select.Option value="08">08</Select.Option>
                          <Select.Option value="09">09</Select.Option>
                          <Select.Option value="10">10</Select.Option>
                          <Select.Option value="11">11</Select.Option>
                          <Select.Option value="12">12</Select.Option>
                        </Select>
                        <Select defaultValue={year} style={{ width: 90 }} onChange={(v) => setyear(v)}>
                          {
                            Array.from(Array(2051 - today.getFullYear()).keys()).map((v, index) => {
                              return <Select.Option key={index} value={today.getFullYear() + v}>{today.getFullYear() + v}</Select.Option>
                            })
                          }
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  {
                    payment != 'maestro' && payment != 'märkeskort_ikano' && 
                    <div className="card-info-row">
                      <div className="stype">
                        CVV2
                      </div>
                      <div className="svalue">
                        <Form.Item
                          name="cvv2"
                          rules={[{ required: true, message: 'Please input cvv2!' }]}
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
              <div className="btn-group">
                <Button className="btn-previous" onClick={() => setModalContentType('PaymentListBox')}>{'<'} Tilbake</Button>
                <Button className="btn-cancel" onClick={() => closeModal()}>Avbryt</Button>
                <Button type="primary" htmlType="submit" className="btn-pay">Betal</Button>
              </div>
            </Form>
          </ProcessPaymentBox>
        }
      </Modal>
    </Treatment1Box>
  )
}

export default TreatmentStep4