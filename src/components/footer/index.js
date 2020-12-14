import { MailFilled, PhoneFilled, EnvironmentFilled } from '@ant-design/icons'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SContainer } from '../navbar/style' 
import { SFooter } from './style'

function Footer(props) {
  const { treatments, slugs } = props
  return (<SFooter>
    <SContainer direction="column" align="flex-start">
      <div className="footer--body">
        <div className="footer-body--basic">
          <a className="logo" href="/">
            <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/nettleger-logo-white.svg`} alt="Logo" />
          </a>
          <p>Lorem ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksem-plar av en bok.</p>
          <br/>
          <p>Lorem ipsum har tålt tidens tann!</p>
        </div>
        <div className="footer-body--links">
          <div className="footer-body-links--find">
            <label>Finn frem</label>
            <div className="link-group">
              {slugs.map((slug, index) => {
                return slug.slug!== 'home' && <a href={slug.slug} key={index}>{slug.name}</a>
              })}
            </div>
          </div>
          <div className="footer-body-links--treatment">
            <label>Behandlinger</label>
            <div className="link-group">
              {treatments.map((treatment, index) => 
                <a href={`/${treatment.name}`} key={index}>{treatment.name}</a>
              )}
            </div>
          </div>
          <div className="footer-body-links--contact">
            <label>Kontakt oss</label>
            <div className="link-group">
              <a href="mailto:info@nettleger.no"><MailFilled fill="#fff"/>info@nettleger.no</a>
              <a href="tel:004745454545"><PhoneFilled fill="#fff"/>47 45 45 45 45</a>
              <a href="/"><EnvironmentFilled fill="#fff"/>Adreseveien 123, 0599 Oslo</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--bottom">
        <p>© 2020 Skjønnhetslegen AS. Med enerett. Crafted by: FantasyLab.</p>
        <div className="footer-bottom--social">
          <a href="https://www.facebook.com/"><FaFacebookF /></a>
          <a href="https://www.instagram.com/"><FaInstagram /></a>
        </div>
      </div>
    </SContainer>
  </SFooter>)
}

export default Footer