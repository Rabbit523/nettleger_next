import { Divider } from 'antd'
import { QuestionTag } from './style'
import { SButton } from '../../TreatmentPage/style'

function QuestionBox (props) {
  const { list, curIndex, setIndex, onVote, onUnVote } = props
  
  const onClickHandler = (props) => {
    props === 'vote' ? onVote({ question: list[curIndex] }) : onUnVote({ question: list[curIndex] })
    curIndex + 1 <= list.length - 1 && setIndex(curIndex+1)
  }

  return (
    <QuestionTag>
      <div className="question-tag--header">{`${curIndex + 1}/${list.length}`}</div>
      <div className="question-tag--body">
        {list.map((item, index) => {
          return index === curIndex && <p key={index}>{item}</p>
        })}
      </div>
      <Divider />
      <div className="question-tag--footer">
        <SButton color="#47ffb3" hover="#34f7a6" padding="10px 15px" onClick={() => onClickHandler('vote')}>ja, stemmer</SButton>
        <SButton style={{ margin: '0 8px' }} color="#ff7e7e" hover="#f37272" padding="10px 15px" onClick={() => onClickHandler('unvote')}>nei, stemmer ikke</SButton>
      </div>
    </QuestionTag>
  )
}

export default QuestionBox