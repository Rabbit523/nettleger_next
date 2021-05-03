import parse from 'html-react-parser'
import { useRouter } from 'next/router'
import { Space } from 'antd'
import { SButton } from '../../../WebsitePage/style'
import { ModuleCovidCardBox } from './style'

function ModuleCovidCard (props) {
  const { content } = props
  const router = useRouter()
  return (<ModuleCovidCardBox className="covid--card">
    <Space direction="vertical">
      <label>{content.name}</label>
      <span>{content.cost}</span>
      {parse(content.description)}
      <SButton background="#0080f6" padding="10px 15px" onClick={() => router.push(`/covids/${content.link}`)}>{content.btnName}</SButton>
    </Space>
  </ModuleCovidCardBox>)
}

export default ModuleCovidCard