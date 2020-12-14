import { SHeader, SContainer, SBox, SMenuItem, SNavButtonGroup, SNavButton } from './style'

const Navbar = (props) => {
  const { items } = props

  return (
    <SHeader>
      <SContainer style={{ maxHeight: '64px' }}>
        <a href="/">
          <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/nettleger-logo-color.svg`} alt="Logo" />
        </a>
        <SBox>
          {items.map((item, index) => {
            return item.name !== 'Home' && <SMenuItem key={index}>              
              <a href={`/${item.slug}`}>{item.name}</a>
            </SMenuItem>
          })}
          <SNavButtonGroup>
            <SNavButton>behandlinger</SNavButton>
            <SNavButton>chat med lege</SNavButton>
          </SNavButtonGroup>
        </SBox>
      </SContainer>
    </SHeader>
  )
}

export default Navbar
