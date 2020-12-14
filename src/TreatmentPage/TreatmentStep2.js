import { useState } from 'react'
import parse from 'html-react-parser'
import QuestionBox from 'components/questionBox'
import { STreatment2Box } from './style'

function TreatmentStep2 (props) {
  const { content } = props
  const [answers, setAnswers] = useState([])
  const [queIndex, setQueIndex] = useState(0)
  
  const voteQuestion = (props) => {
    const _answers = [...answers]
    const isPushable = _answers.findIndex((value) => value.question === props.question)
    if(isPushable === -1) {
      _answers.push({question: props.question, answer: 'vote'})
      setAnswers(_answers)
    }
  }
  const unvoteQuestion = (props) => {
    const _answers = [...answers]
    const isPushable = _answers.findIndex((value) => value.question === props.question)
    if (isPushable === -1) {
      _answers.push({question: props.question, answer: 'unvote'})
      setAnswers(_answers)
    }
  }

  return (
    <STreatment2Box>
      {content.map((item, index) => 
        <div className="treatment-section" key={index}>
          {item.content.map((field, key) => 
            <div className="treatment-field" key={key}>
              {field.name === 'title' ? <h2>{field.value}</h2> : field.type === 'RichText' || field.name === 'description' ? parse(field.value) : field.value}
              {field.type === 'Questions' &&
                <QuestionBox
                  list={field.list}
                  curIndex={queIndex}
                  setIndex={setQueIndex}
                  onVote={voteQuestion}
                  onUnVote={unvoteQuestion}
                />}
            </div>
          )}
      </div>)}
    </STreatment2Box>
  )
}

export default TreatmentStep2