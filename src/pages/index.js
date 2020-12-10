import React from "react"
import { navigate } from 'gatsby';

import { Layout, Login } from '../components';
import { auth } from '../firebase';

const IndexPage = () => {
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => user &&  navigate('/chat', { replace: true }))
  }, []);
  
  return (
    <Layout>
      <Login/>
    </Layout>
  )
}

export default IndexPage
