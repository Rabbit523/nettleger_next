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
                return slug.slug!== 'home' && <a href={`/${slug.slug}`} key={index}>{slug.name}</a>
              })}
            </div>
          </div>
          <div className="footer-body-links--treatment">
            <label>Behandlinger</label>
            <div className="link-group">
              {treatments.map((treatment, index) => {
                return treatment.name !== 'Chat Konsultasjon' ? <a href={`/behandling/${treatment.link}`} key={index}>{treatment.name}</a> : null
              })}
            </div>
          </div>
          <div className="footer-body-links--contact">
            <label>Kontakt oss</label>
            <div className="link-group">
              <a href="mailto:info@nettleger.no"><MailFilled fill="#fff"/>info@nettleger.no</a>
              <a href="tel:+4793865855"><PhoneFilled fill="#fff"/>+47 93 86 58 55</a>
              <a href="/"><EnvironmentFilled fill="#fff"/>Fjellstuveien 47, 0982 OSLO</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--bottom">
        <p>© {new Date().getFullYear()} Skjønnhetslegen AS. Med enerett. Crafted by: <a href="https://fantasylab.io" target="_blank">FantasyLab.</a></p>
        <div className="footer-bottom--social">
          <a href="https://www.facebook.com/nettleger" className="icon" target="_blank"><FaFacebookF /></a>
        </div>
      </div>
    </SContainer>
  </SFooter>)
}

export default Footer