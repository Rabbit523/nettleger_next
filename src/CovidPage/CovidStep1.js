import { useEffect } from 'react'
import parse from 'html-react-parser'
import { Divider } from 'antd'
import { CovidStep1Box } from './style'

function CovidStep1 (props) {
  const { content, name } = props

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
    <CovidStep1Box>
      <h1>{name}</h1>
      {content.map((item, index) =>
        <div className="treatment-field" key={index}> 
          {item.type === 'RichText' ? parse(item.val) : item.val}
        </div>
      )}
      <Divider />
    </CovidStep1Box>
  )
}

export default CovidStep1