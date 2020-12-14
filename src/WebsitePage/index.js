import dynamic from 'next/dynamic'
import Link from 'next/link'
import parse from 'html-react-parser'
import { Row, Col } from 'antd'
import { times } from 'lodash'
import Seo from 'components/Seo'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import { SLayout, PageContainer, SContent, SSpace, STitle, SModuleWrapper, STreatmentCard, SButtonWrapper, SButton } from "./style"
import { SContainer } from '../components/navbar/style'

const WebsitePage = (props) => {
  const { meta_title, meta_description, slugs, sections, modules, treatments } = props
  const sectionsData = Object.values(JSON.parse(sections)).map((item) => item)
  const moduleComponents = {
    icon_card_module: dynamic(() => import('../components/modules').then((modules) => modules.ModuleIconCard)),
    ordered_image_card_module: dynamic(() => import('../components/modules').then((modules) => modules.ModuleOrderedImageCard)),
    image_title_text_module: dynamic(() => import('../components/modules').then((modules) => modules.ModuleImageTitleText)),
    help_module: dynamic(() => import('../components/modules').then((modules) => modules.MoudleHelpCard))
  }
  // A single session could have title, description, src, and modules
  return (
    <SLayout>
      <Seo meta_title={meta_title} meta_description={meta_description} />
      <Navbar items={slugs} />
      <PageContainer>
        {sectionsData && sectionsData.map((section, index) => (
          <SContent
            src={section.src}
            background={section.background}
            isMarginTop={sectionsData[index - 1]?.modules?.length > 0 && sectionsData[index - 1]?.src ? true : false}
            key={index}
          >
            {(section.title || section.description || section.src) && <SContainer>
              <SSpace direction="vertical" src={section.src}>
                {section.title && typeof section.title === 'string' && <STitle src={section.src} size={section.size} center="true">{section.title}</STitle>}
                {section.description && typeof section.description === 'string' && parse(section.description)}
              </SSpace>
            </SContainer>}
            {section.modules?.length > 0 && section.modules.map((module, index) => {
              const selectedModule = modules.find((value) => value.id === parseInt(module.moduleId))
              const Component = moduleComponents[selectedModule.name]
              return (
                <SModuleWrapper
                  isBottom={section?.modules?.length > 0 && section?.src ? true : false}
                  direction={module.direction}
                  key={index}
                >
                  <SContainer>
                    {module.content && times(module.amount, (i) => <Component content={module.content[i]} amount={module.amount} key={i} />)}
                  </SContainer>
                </SModuleWrapper>)
            })}
            {section.btnName && <SContainer>
              <SButtonWrapper>
                <SButton background="#47ffb3" padding="15px 25px">{section.btnName}</SButton>
              </SButtonWrapper>
            </SContainer>}
            {section.treatments && <SContainer>
              <Row gutter={[16, 24]}>
                {treatments && treatments.map((treatment, index) => (
                  <Col span={8} key={index}>
                    <Link passHref={true} href={`/treatment/${treatment.name.toLowerCase()}`}>
                      <STreatmentCard title={treatment.name} description={treatment.card_description} cost={treatment.card_cost} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </SContainer>}
          </SContent>
        ))}
      </PageContainer>
      {treatments && <Footer treatments={treatments} slugs={slugs} />}
    </SLayout>
  )
}

export async function getInitialProps(ctx) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  } finally {
    sheet.seal()
  }
}

export default WebsitePage