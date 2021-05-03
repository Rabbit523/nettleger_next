import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import WebsitePage from "WebsitePage"
import TreatmentPage from "TreatmentPage"
import CovidPage from "CovidPage"
import Page404 from "components/Page404"
import InfoPage from 'components/InfoPage'
import Loader from 'components/loading'
import customAxios from 'utils/customAxios'

const WebsitePages = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (props) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [props])

  let component
  if (isLoading) {
    component = <Layout style={{ width: "100%", height: "100vh" }}><Loader /></Layout>
  } else {
    if (props?.data?.model_type === 'page') {
      component = <WebsitePage {...props.data} />
    } else if (props?.data?.model_type === 'treatment') {
      component = <TreatmentPage {...props.data} />
    } else if (props?.data?.model_type === 'covid') {
      component = <CovidPage {...props.data} />
    } else {
      component = props.page ? <InfoPage {...props.data} /> : <Page404 />
    }
  }
  
  return component
}

export async function getServerSideProps({ params }) {
  if (params?.slug?.includes('covids')) {
    const { ok, data } = await customAxios.post(`/api/covid/detail`, {
      slug: params?.slug[1]
    })
    if (ok) {
      return {
        props: { data },
      }
    }
    return { props: {} }
  } else if (params?.slug?.includes('behandling')) {
    const { ok, data } = await customAxios.post(`/api/treatment/detail`, {
      slug: params?.slug[1]
    })
    if (ok) {
      return {
        props: { data },
      }
    }
    return { props: {} }
  } else if (params?.slug?.includes('info')) {
    const { ok, data } = await customAxios.get(`/api/treatment/info`)
    if (ok) {
      return {
        props: { data, page: 'info' },
      }
    }
    return { props: {} }
  } else if (params?.slug?.join('/') === undefined) {
    const { ok, data } = await customAxios.post(`/api/page/detail`, {
      slug: 'home'
    })
    if (ok) {
      return {
        props: { data },
      }
    }
    return { props: {} }
  } else {
    const { ok, data } = await customAxios.post(`/api/page/detail`, {
      slug: params?.slug?.join('/')
    })
    if (ok) {
      return {
        props: { data },
      }
    }
    return { props: {} }
  }
}

// export async function getStaticPaths() {
//   const {ok, data} = await customAxios.get(`/pages/slugs`)
//   let paths = []
//   if (ok) {
//     paths = data.map((slug) => {
//       return {
//         params: {
//           slug: slug.slug.split('/')
//         }
//       }
//     })
//   }

//   return {
//     paths: paths,
//     fallback: false,
//   }
// }

export default WebsitePages
