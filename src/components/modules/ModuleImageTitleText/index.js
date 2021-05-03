import parse from 'html-react-parser'
import { useRouter } from 'next/router'
import { ModuleImageTitleTextCard } from './style'
import { STitle, SButton } from '../../../WebsitePage/style'

function ModuleImageTitleText (props) {
  const { content, amount } = props
  const singleMode = amount < 2 ? true : false
  const router = useRouter()

  const handleButtonClick = () => {
    if (content.btn_link) {
      router.push(content.btn_link)
    }
  }

  return (<ModuleImageTitleTextCard direction={singleMode ? 'row' : 'column'}>
    {singleMode ? <div className={content.imgPosition === 'left' ? "module_image_title_text--body left" : "module_image_title_text--body right"}>
      <div className="module_image_title_text">
        <STitle center="false">{content.title}</STitle>
        {parse(content.text)}
        {content.button && <SButton background="#0080f6" width="150px" padding="10px" onClick={handleButtonClick}>{content.button}</SButton>}
      </div>
      <div className="module_image_title_img">
        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${content.src}`} alt="icon" />
      </div>
    </div> :  <div className="module_image_title_text--body single">
      <div className="module_image_title_text--img-wrapper">
        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${content.src}`} alt="icon" />
      </div>
      <div className="module_image_title_text--texts">
        <label>{content.title}</label>
        {parse(content.text)}
      </div>
    </div>}
  </ModuleImageTitleTextCard>)
}

export default ModuleImageTitleText