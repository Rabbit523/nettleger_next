import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Divider, Button, Modal } from 'antd'
import { Treatment1Box } from './style'
import Loader from '../components/loading'
import Notification from '../components/notification'
import customAxios from '../utils/customAxios'

function TreatmentStep4 (props) {
  const history = useHistory();
  
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentId, setPaymentId] = useState();
  const { cost, processPayment, updateProcessPayment } = props
  const formatedNumber = new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' }).format(cost)

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (processPayment) {
      createDIBSPayment();
    }
  }, [processPayment])

  useEffect(() => {
    if (paymentId && modalIsOpen) {
      checkoutDIBPayment();
    }
  }, [paymentId, modalIsOpen])

  const createDIBSPayment = async () => {
    try {
      setIsLoading(true);
      const { ok, data } = await customAxios.post('/api/custom/checkout', {
        amount: cost * 100
      });
      if (ok) {
        const newPaymentId = data;
        console.log('New payment with created with id ', newPaymentId);
        setPaymentId(newPaymentId);
        setIsOpen(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const checkoutDIBPayment = () => {
    document.getElementById('dibs-complete-checkout').innerHTML = '';
    const defaultCheckoutOptions = {
      checkoutKey: process.env.APP_CHECKOUT_KEY,
      language: 'nb-NO',
      containerId: 'dibs-complete-checkout',
    };

    const checkout = new Dibs.Checkout({
      ...defaultCheckoutOptions,
      paymentId: paymentId,
    });

    checkout.on('pay-initialized', (response) => {
      console.log('checkout on pay-initialized called');
    });

    checkout.on('payment-completed', (response) => {
      console.log('checkout on payment-completed called');
      // Response: paymentId: string (GUID without dashes)
      Notification({title: 'Suksess', description: 'Transaksjonen er vellykket.', type: 'success'})
      closeModal();
    });
  }

  const closeModal = () => {
    setIsOpen(false);
    updateProcessPayment(false);
  }

  return (
    <Treatment1Box>
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
        <div className="img-wrapper"><img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/maestro_0.png`} alt="Logo" /></div>
      </div>
      <Divider />
      <Modal
        visible={modalIsOpen}
        closable={false}
        width={'70%'}
        centered={true}
        footer={
          <Button className="btn-cancel" onClick={() => closeModal()}>Avbryt</Button>
        }>
        <div id="dibs-complete-checkout" />
      </Modal>
    </Treatment1Box>
  )
}

export default TreatmentStep4