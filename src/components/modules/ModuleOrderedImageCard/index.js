import { ModuleOrderedImageCardBox } from './style'

function ModuleOrderedImageCard (props) {
  const { content } = props
  return (<ModuleOrderedImageCardBox>
    <div className="module_ordered_image_card_module--image">
      <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${content.src}`} alt="image" />
    </div>
    <div className="module_ordered_image_card_module--body">
      <p className="number">{content.order}.</p>
      <p>{content.title}</p>
    </div>
  </ModuleOrderedImageCardBox>)
}

export default ModuleOrderedImageCard