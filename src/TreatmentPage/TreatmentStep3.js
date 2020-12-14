import React from 'react'
import { AiFillLock } from 'react-icons/ai'
import { Form, Input, Divider, Select, DatePicker } from 'antd';
import { STreatment3Box } from './style'

const { Option } = Select;

const TreatmentStep3 = React.forwardRef((props, ref) => {
  const { form } = props
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="47">+47</Option>
        <Option value="46">+46</Option>
      </Select>
    </Form.Item>
  );

  return (
    <STreatment3Box>
      <h2>Personlige opplysninger</h2>
      <p><AiFillLock /> Personopplysningene dine er trygge hos oss. Les mer om <a href="/security">skikkerhet</a>.</p>
      <Form form={form} ref={ref} layout="vertical" initialValues={{ prefix: '47' }}>
        <Form.Item
          name="first_name"
          label="Fornavn"
          rules={[
            {
              required: true,
              message: 'Dette feltet er påkrevd.',
            },
          ]}
          hasFeedback
          style={{ marginBottom: '20px' }}
        >
          <Input placeholder="Fornavn" size="large" />
        </Form.Item>
        <Divider style={{ margin: '12px 0' }} />
        <Form.Item
          name="last_name"
          label="Etternavn"
          rules={[
            {
              required: true,
              message: 'Dette feltet er påkrevd.',
            },
          ]}
          hasFeedback
          style={{ marginBottom: '20px' }}
        >
          <Input placeholder="Etternavn" size="large" />
        </Form.Item>
        <Divider style={{ margin: '12px 0' }} />
        <Form.Item
          name="birthday"
          label="Fodselsnummer (11 siffer)"
          rules={[
            {
              required: true,
              message: 'Dette feltet er påkrevd.',
            },
          ]}
          hasFeedback
          style={{ marginBottom: '20px' }}
        >
          <DatePicker size="large" style={{ width: '100%' }} placeholder="Fodselsnummer" format="DD/MM/YYYY" />
        </Form.Item>
        <Divider style={{ margin: '12px 0' }} />
        <Form.Item
          name="mobile_number"
          label="Mobilnummer"
          rules={[
            {
              required: true,
              message: 'Dette feltet er påkrevd.',
            },
          ]}
          hasFeedback
          style={{ marginBottom: '20px' }}
        >
          <Input
            placeholder="Mobilnummer"
            size="large"
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Divider style={{ margin: '12px 0' }} />
        <Form.Item
          name="email"
          label="E-post"
          rules={[
            {
              type: 'email',
              message: 'Inndataene er ikke gyldige E-post!',
            },
            {
              required: true,
              message: 'Dette feltet er påkrevd.',
            },
          ]}
          hasFeedback
          style={{ marginBottom: '20px' }}
        >
          <Input placeholder="E-post" size="large" />
        </Form.Item>
        <Divider style={{ margin: '12px 0' }} />
        <p>Ved a bruke tjenesten godtar du <a href="/agreement">brukeravtalen</a>.</p>
      </Form>
    </STreatment3Box>
  )
})

export default TreatmentStep3