import { SSpin } from './style'

export default function Loader(props) {
  return (
    <SSpin
      spinning={props.isLoading}
      size="large"
    />
  )
}
