import { useEffect } from 'react'
import parse from 'html-react-parser'
import { Divider } from 'antd'
import { Treatment1Box } from './style'

function TreatmentStep1 (props) {
  const { content, name } = props

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
    <Treatment1Box>
      <h1>{name}</h1>
      {content.map((item, index) =>
        <div className="treatment-field" key={index}> 
          {item.type === 'RichText' ? parse(item.val) : item.val}
        </div>
      )}
      <Divider />
    </Treatment1Box>
  )
}

export default TreatmentStep1