import Head from 'next/head'

const MetaData = ({title, description}) => (
  <Head>
          <title> {title} </title>
          <meta 
              name="description" 
              content={description}
          />
  </Head>
)
export default MetaData