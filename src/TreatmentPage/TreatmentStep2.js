import { useState, useEffect } from 'react'
import parse from 'html-react-parser'
import { Space, Select, Radio, Input, InputNumber, DatePicker, Row, Col, Checkbox, Tooltip  } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import QuestionBox from 'components/questionBox'
import { STreatment2Box, GroupBox, SelectBox, RadioGroupBox, TextareaBox, InputNumberBox, DateBox, SDivider, STreatmentCard, CheckBox } from './style'

const { Option } = Select
const { TextArea } = Input
const { RangePicker } = DatePicker

function TreatmentStep2 (props) {
  const { content, state, send, back, update, isMultipleStep, isQuestionSuccess } = props
  const [queIndex, setQueIndex] = useState(0)
  const [selectedVaccine, setSelectedVaccine] = useState([])
  const [selectedBox, setSelectedBox] = useState('')
  const [selectValue, setSelectValue] = useState([])
  const [selectedDate, setSelectedDate] = useState([])

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  const checkHasGroupBox = () => {
    let hasGroupBox = false
    content.map((item) => {
      item.content.map((field) => {
        if (field.type === 'Groupbox') {
          hasGroupBox = true
        }
      })
    })
    return hasGroupBox
  }

  const voteQuestion = () => {
    update(true)
  }

  const handleSelectChange = (value, field) => {
    setSelectValue(value)
    const updatedState = [...state]
    updatedState.map((item) => {
      Object.keys(item).map((key) => {
        if (key === field) {
          item[key] = value
        }
      })
    })
    send(updatedState)
  }

  const handleVaccineChange = (vaccine) => {
    let updatedVaccines = [...selectedVaccine]
    if (!updatedVaccines.includes(vaccine)) {
      updatedVaccines.push(vaccine)
    } else {
      updatedVaccines = updatedVaccines.filter(e => e !== vaccine)
    }
    setSelectedVaccine(updatedVaccines)
    const updatedState = [...state]
    if (updatedState[1]['country']) {
      updatedState[1]['selectedVaccine'] = vaccine
    } else {
      updatedState[1]['country'] = selectValue
      updatedState[1]['selectedVaccine'] = vaccine
    }
    send(updatedState)
  }

  const handleCheckboxChange = (e, field) => {
    const updatedState = [...state]
    updatedState.map((item) => {
      Object.keys(item).map((key) => {
        if (key === field) {
          item[key] = e.target.checked
        }
      })
    })
    send(updatedState)
  }

  const handleInputChange = (e, field) => {
    const updatedState = [...state]    
    updatedState.map((item) => {
      Object.keys(item).map((key) => {
        if (key === field) {
          if (field === 'height' || field === 'weight') {
            item[key] = e
          } else {
            item[key] = e.target.value  
          }
        }
      })
    })
    send(updatedState)
  }

  const handleRadioChange = (e, field) => {
    const updatedState = [...state]
    updatedState.map((item) => {
      Object.keys(item).map((key) => {
        if (key === field) {
          item[key] = e.target.value
        }
      })
    })
    send(updatedState)
  }

  const handleDateChange = (date, field) => {
    setSelectedDate(date)
    const updatedState = [...state]
    updatedState.map((item) => {
      Object.keys(item).map((key) => {
        if (key === field) {
          item[key] = date
        }
      })
    })
    send(updatedState)
  }

  const handleBoxSelect = (title) => {
    setSelectedBox(title)
    const updatedState = [...state]
    updatedState.map((item) => {
      Object.keys(item).map((key) => {
        if (key === 'Groupbox') {
          item[key]['answer'] = title
        }
      })
    })
    send(updatedState)
  }

  return (
    <STreatment2Box>
      {content.map((item, index) => <div key={index}>
        {isMultipleStep ? (
          index === 0 && !isQuestionSuccess ? 
            <Space direction="vertical" style={{ width: "100%" }}>
              {item.content.map((field, key) =>
                <div className="treatment-field" key={key}>
                  {field.name === 'title' ? <h2>{field.value}</h2> : (field.type === 'RichText' || field.name === 'description') ? parse(field.value) : field.value}
                  {field.type === 'Questions' &&
                    <QuestionBox
                      list={field.list}
                      curIndex={queIndex}
                      setIndex={setQueIndex}
                      onVote={voteQuestion}
                      onUnVote={() => back()}
                    />
                  }
                </div>
              )}
            </Space>
          : index !== 0 && isQuestionSuccess && item.content.length > 0 ? 
            <Space direction="vertical" style={{ width: "100%" }}>
              {item.content.map((field, key) =>
                <div className="treatment-field" key={key}>
                  {field.name === 'title' ? <h2>{field.value}</h2> : (field.type === 'RichText' || field.name === 'description') ? parse(field.value) : field.value}
                  {field.type === 'Groupbox' && <GroupBox>
                    {field.name && <label>{field.name}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                    <div className="group-box">
                      {field.list.map((box, index) => <div onClick={() => handleBoxSelect(box.title)} className={selectedBox === box.title ? 'box active' : 'box'} key={index}>
                        <p className="title">{box.title}</p>
                        <p className="description">{box.description}</p>
                      </div>)}
                    </div>
                    </GroupBox>}
                  {field.type === 'Select' && (!checkHasGroupBox() || checkHasGroupBox() && selectedBox && selectedDate.length > 0) &&
                    <SelectBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      {field.country ?
                        <Select mode="multiple" onChange={(val)=> handleSelectChange(val, field.name)}>
                          <Option disabled>--- Velg ---</Option>
                          {field.options.map((option, index) => <Option value={option} key={index}>{option}</Option>)}
                        </Select>
                        : <Select onChange={(val)=> handleSelectChange(val, field.name)}>
                          <Option disabled>--- Velg ---</Option>
                          {field.options.map((option, index) => <Option value={option} key={index}>{option}</Option>)}
                        </Select>}
                      {field.multi && field.vaccines && selectValue.length > 0 && <Row gutter={[16, 24]} style={{ marginTop : '15px' }}>
                        {field.vaccines.map((vaccine, index) => <Col span={12} key={index}>
                          {selectValue.includes(vaccine.country) && <STreatmentCard name={vaccine.name} description={vaccine.description} cost={vaccine.cost} onClick={handleVaccineChange} selected={selectedVaccine} />}
                        </Col>)}
                      </Row>}
                      <SDivider />
                    </SelectBox>}
                  {field.type === 'Checkbox' && (!checkHasGroupBox() || checkHasGroupBox() && selectedBox && selectedDate.length > 0) && <CheckBox>
                    <Checkbox onChange={(e) => handleCheckboxChange(e, field.name)}>{field.label}</Checkbox><SDivider />
                  </CheckBox>}
                  {field.type === 'Radio' && (!checkHasGroupBox() || checkHasGroupBox() && selectedBox) &&
                    <RadioGroupBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <Radio.Group onChange={(e) => handleRadioChange(e, field.name)}>
                        {field.options.map((option) => <Radio value={option} key={option}>{option}</Radio>)}
                      </Radio.Group>
                      <SDivider />
                    </RadioGroupBox>}
                  {field.type === 'Textarea' && (!checkHasGroupBox() || checkHasGroupBox() && selectedBox && selectedDate.length > 0) &&
                    <TextareaBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <TextArea rows={5} showCount maxLength={300} placeholder={field.placeholder} onChange={(e) => handleInputChange(e, field.name)} />
                      <SDivider />
                    </TextareaBox>
                  }
                  {field.type === 'Input' && (!checkHasGroupBox() || checkHasGroupBox() && selectedBox && selectedDate.length > 0) &&
                    <InputNumberBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <Input placeholder={field.placeholder} onChange={(e) => handleInputChange(e, field.name)} />
                      <SDivider />
                    </InputNumberBox>
                  }
                  {field.type === 'Number' && (!checkHasGroupBox() || checkHasGroupBox() && selectedBox && selectedDate.length > 0) &&
                    <InputNumberBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <InputNumber
                        // formatter={value => field.name ==='height' ? `${value}cm` : `${value}kg`}
                        // parser={value => field.name === 'height' ? value.replace('cm', '') : value.replace('kg', '')}
                        onChange={(e) => handleInputChange(e, field.name)}
                      />
                    </InputNumberBox>
                  }
                  {field.type === 'Date' && (!checkHasGroupBox() || checkHasGroupBox() && selectedBox) &&
                    <DateBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      {field.dateTo && field.dateFrom ? <RangePicker placeholder={["Reisens start", "Reisens slutt"]} onChange={(date, dateString) => handleDateChange(dateString, field.name)} /> : <DatePicker onChange={(date, dateString) => handleDateChange(dateString, field.name)} />}
                    </DateBox>
                  }
                </div>
              )}
            </Space> : null)
          : item.content.length > 0 && <Space direction="vertical" style={{ width: "100%" }}>
              {item.content.map((field, key) =>
                <div className="treatment-field" key={key}>
                  {field.name === 'title' ? <h2>{field.value}</h2> : (field.type === 'RichText' || field.name === 'description') ? parse(field.value) : field.value}
                  {field.type === 'Questions' &&
                    <QuestionBox
                      list={field.list}
                      curIndex={queIndex}
                      setIndex={setQueIndex}
                      onVote={voteQuestion}
                      onUnVote={() => back()}
                    />}
                  {field.type === 'Select' &&
                    <SelectBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      {field.country ?
                        <Select mode="multiple" onChange={(val)=> handleSelectChange(val, field.name)}>
                          {field.options.map((option, index) => <Option value={option} key={index}>{option}</Option>)}
                        </Select>
                        : <Select onChange={(val)=> handleSelectChange(val, field.name)}>
                          {field.options.map((option, index) => <Option value={option} key={index}>{option}</Option>)}
                        </Select>}
                      {field.multi && field.vaccines && <Row gutter={[16, 24]} style={{ marginTop : '15px' }}>
                        {field.vaccines.map((vaccine, index) => <Col span={12} key={index}>
                          {selectValue.includes(vaccine.country) && <STreatmentCard name={vaccine.name} description={vaccine.description} cost={vaccine.cost} onClick={handleVaccineChange} selected={selectedVaccine} />}
                        </Col>)}
                      </Row>}
                      <SDivider />
                    </SelectBox>}
                  {field.type === 'Checkbox' && <CheckBox>
                    <Checkbox onChange={(e) => handleCheckboxChange(e, field.name)}>{field.label}</Checkbox><SDivider />
                  </CheckBox>}
                  {field.type === 'Radio' &&
                    <RadioGroupBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <Radio.Group value={field.options[0]} onChange={(e) => handleRadioChange(e, field.name)}>
                        {field.options.map((option) => <Radio value={option} key={option}>{option}</Radio>)}
                      </Radio.Group>
                      <SDivider />
                    </RadioGroupBox>}
                  {field.type === 'Textarea' &&
                    <TextareaBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <TextArea rows={5} showCount maxLength={300} placeholder={field.placeholder} onChange={(e) => handleInputChange(e, field.name)} />
                      <SDivider />
                    </TextareaBox>
                  }
                  {field.type === 'Input' &&
                    <InputNumberBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <Input placeholder={field.placeholder} onChange={(e) => handleInputChange(e, field.name)} />
                      <SDivider />
                    </InputNumberBox>
                  }
                  {field.type === 'Number' &&
                    <InputNumberBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      <InputNumber
                        // formatter={value => field.name ==='height' ? `${value}cm` : `${value}kg`}
                        // parser={value => field.name === 'height' ? value.replace('cm', '') : value.replace('kg', '')}
                        onChange={(e) => handleInputChange(e, field.name)}
                      />
                    </InputNumberBox>
                  }
                  {field.type === 'Date' &&
                    <DateBox>
                      {field.label && <label>{field.label}{field.tooltip && <Tooltip placement="top" title={field.tooltip}><QuestionCircleOutlined /></Tooltip>}</label>}
                      {field.dateTo && field.dateFrom ? <RangePicker placeholder={["Reisens start", "Reisens slutt"]} onChange={(date, dateString) => handleDateChange(dateString, field.name)} /> : <DatePicker onChange={(date, dateString) => handleDateChange(dateString, field.name)} />}
                    </DateBox>
                  }
                </div>
              )}
            </Space>
          }
          </div>
        )}
    </STreatment2Box>
  )
}

export default TreatmentStep2