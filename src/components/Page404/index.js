import Head from 'next/head'
import { Wrapper, Title, Description } from './style'

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 Side Ikke Funnet</title>
        <meta name="description" content="Page not found" />
      </Head>
      <Wrapper>
        <Title>
          <h3>Beklager! Side ikke funnet</h3>
          <h1><span>4</span><span>0</span><span>4</span></h1>
        </Title>
        <Description>
          <h2>Dessverre har noe gått galt.</h2>
          <p>Vi kan ikke oppfylle forespørselen din. Vær trygg på at vi har blitt varslet og ser på problemet. Oppdater nettleseren din. Hvis feilen vedvarer, kan du kontakte supportteamet vårt.</p>
        </Description>
      </Wrapper>
    </>
  )
}
