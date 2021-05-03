import parse from 'html-react-parser'
import { useRouter } from 'next/router'
import { RightOutlined } from '@ant-design/icons'
import { ModuleCardBox, SButton } from './style'

function ModuleIconCard (props) {
  const { content, direction } = props
  const router = useRouter()
  
  const handleButtonClick = () => {
    if (content.title === 'Chat med en lege') {
      router.push(`/behandling/chat-med-en-lege`)
    } else if (content.title === 'Resept på nett') {
      router.push('/behandling/e-resept')
    } else if (content.title === 'Våre behandlinger') {
      router.push({pathname: '/', query: {section: 'behandlinger' }})
    }
  }

  return (
    <ModuleCardBox direction={direction}>
      <div className="module-card--body">
        <div className="module-card-body--flex">
          <div className="image-wrapper">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${content.src}`} alt="icon" />
          </div>
          <p>{content.title}</p>
        </div>
        {parse(content.description)}
      </div>
      <div className="module-card--footer" onClick={handleButtonClick}>
        <SButton>
          <p>{content.btnName}</p>
          <RightOutlined />
        </SButton>
      </div>
    </ModuleCardBox>
  )
}

export default ModuleIconCard