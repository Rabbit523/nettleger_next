import Loader from 'react-loader-spinner'
import { Wrapper } from './style'

export default function Loading(props) {
  const { isLoading } = props
  return (
    <Wrapper>
      <Loader visible={isLoading} type="Grid" color="#ddd" />
    </Wrapper>
  )
}
