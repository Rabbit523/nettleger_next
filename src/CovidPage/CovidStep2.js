import { useState, useEffect } from 'react'
import Iframe from 'react-iframe'
import { isMobile } from 'react-device-detect'
import { CovidStep2Box, SDivider } from './style'

function CovidStep2 (props) {
  const { iframe } = props
  const [frameHeight, setFrameHeight] = useState(640)

  useEffect(() => {
    if (isMobile) {
      setFrameHeight(2040)
    } else {
      setFrameHeight(640)
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
    <CovidStep2Box height={frameHeight}>
      <Iframe url={iframe.src}
        src={iframe.src}
        width="100%"
        height={`${frameHeight}px`}
        loading="lazy"
        id={iframe.id}
        className="myClassname"
        display="initial"
        position="relative"
      />
      <SDivider />
    </CovidStep2Box>
  )
}

export default CovidStep2