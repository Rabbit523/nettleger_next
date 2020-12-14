import parse from 'html-react-parser'
import { ModuleImageTitleTextCard } from './style'
import { STitle, SButton } from '../../../WebsitePage/style'

function ModuleImageTitleText (props) {
  const { content, amount } = props
  const singleMode = amount < 2 ? true : false
  return (<ModuleImageTitleTextCard direction={singleMode ? 'row' : 'column'}>
    {singleMode ? <div className="module_image_title_text--body">
      <div className="module_image_title_text--left">
        <STitle center="false">{content.title}</STitle>
        {parse(content.text)}
        <SButton background="#47ffb3" width="150px" padding="10px">bestill</SButton>
      </div>
      <div className="module_image_title_text--right">
        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${content.src}`} alt="icon" />
      </div>
    </div> :  <div className="module_image_title_text--body">
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