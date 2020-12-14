import WebsitePage from "WebsitePage"
import TreatmentPage from "TreatmentPage"
import Page404 from "components/Page404"
import customAxios from 'utils/customAxios'

const WebsitePages = (props) => {
  if (props?.data?.model_type === 'page') {
    return (
      <WebsitePage {...props.data} />
    )
  } else if (props?.data?.model_type === 'treatment') {
    return (
      <TreatmentPage {...props.data} />
    )
  } else {
    return (
      <Page404 />
    )
  }
}

export async function getServerSideProps({ params }) {
  if (params?.slug?.includes('treatment')) {
    const { ok, data } = await customAxios.post(`/api/treatment/detail`, {
      slug: params?.slug[1]
    })  
    if (ok) {
      return {
        props: { data },
      }
    }

    return { props: {} }
  } else {
    const { ok, data } = await customAxios.post(`/api/page/detail`, {
      slug: params?.slug?.join('/') ? params?.slug?.join('/') : 'home'
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
