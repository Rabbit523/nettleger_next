import { useRouter } from 'next/router'
import { RightOutlined } from '@ant-design/icons'
import { ModuleHelpCardBox } from './style'

function ModuleHelpCard(props) {
  const { content } = props
  const router = useRouter()

  const onClickHandler = () => {
    router.push(content.link)
  }

  return (
    <ModuleHelpCardBox onClick={onClickHandler}>
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
    </ModuleHelpCardBox>
  )
}

export default ModuleHelpCard