import { RightOutlined } from '@ant-design/icons'
import { MoudleHelpCardBox } from './style'

function MoudleHelpCard(props) {
  const { content } = props
  return (<MoudleHelpCardBox>
    <div className="module_help_card--left">
      <div className="img-wrapper">
        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${content.icon}`} alt="icon" />
      </div>
      <div className="text-group">
        <label>{content.title}</label>
        <p>{content.text}</p>
      </div>
    </div>
    <div className="module_help_card--right">
      <RightOutlined />
    </div>
  </MoudleHelpCardBox>)
}

export default MoudleHelpCard