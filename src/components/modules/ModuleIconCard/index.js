import parse from 'html-react-parser'
import { RightOutlined } from '@ant-design/icons'
import { ModuleCardBox, SButton } from './style'

function ModuleIconCard (props) {
  const { content } = props
  return (
    <ModuleCardBox>
      <div className="module-card--body">
        <div className="module-card-body--flex">
          <div className="image-wrapper">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${content.src}`} alt="icon" />
          </div>
          <p>{content.title}</p>
        </div>
        {parse(content.description)}
      </div>
      <div className="module-card--footer">
        <p>{content.cost}, -</p>
        <SButton>
          <p>{content.btnName}</p>
          <RightOutlined />
        </SButton>
      </div>
    </ModuleCardBox>
  )
}

export default ModuleIconCard