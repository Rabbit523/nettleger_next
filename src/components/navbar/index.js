import { isMobileOnly } from "react-device-detect"
import { useRouter } from 'next/router'
import { Menu, Dropdown, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { SHeader, SContainer, SBox, SMenu, SMenuItem, SNavButtonGroup, SNavButton } from './style'

const Navbar = (props) => {
  const { items } = props
  const router = useRouter()

  const menu = (
    <SMenu>
      <Menu.Item>
        <a href={`/behandling/e-resept`}>E-Resept</a>
      </Menu.Item>
      {items.map((item, index) => {
        return item.name !== 'Home' && <Menu.Item key={index}>              
          <a href={`/${item.slug}`}>{item.name}</a>
        </Menu.Item>
      })}
      <Menu.Divider />
      <Menu.Item>
        <a onClick={() => console.log('behandlinger')}>Behandlinger</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => router.push(`/behandling/chat_konsultasjon`)}>Chat med lege</a>
      </Menu.Item>
    </SMenu>
  )

  return (
    <SHeader>
      <SContainer style={{ maxHeight: '64px' }} className="nav-container">
        <a href="/">
          <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/nettleger-logo-color.svg`} alt="Logo" />
        </a>
        {!isMobileOnly ? <SBox>
          <SMenuItem>
            <a href={`/behandling/e-resept`}>E-Resept</a>
          </SMenuItem>
          {items.map((item, index) => {
            return item.name !== 'Home' && <SMenuItem key={index}>
              <a href={`/${item.slug}`}>{item.name}</a>
            </SMenuItem>
          })}
          <SNavButtonGroup>
            <SNavButton onClick={() => router.push({pathname: '/', query: {section: 'behandlinger' }})}>behandlinger</SNavButton>
            <SNavButton onClick={() => router.push(`/behandling/chat-med-en-lege`)}>chat med lege</SNavButton>
          </SNavButtonGroup>
        </SBox> : <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
            <Button shape="circle" icon={<MenuOutlined />} className="menu" />
        </Dropdown>}
      </SContainer>
    </SHeader>
  )
}

export default Navbar
