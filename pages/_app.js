import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/globals.css'
import 'antd/dist/antd.css'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: true,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
