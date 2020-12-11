import React from "react"
import { navigate } from "gatsby"

import { Layout } from "../components"
import { auth } from "../firebase"

const IndexPage = () => {
  React.useEffect(() => {
    auth.onAuthStateChanged(user =>
      navigate(user ? "/chat" : "/login", { replace: true })
    )
  }, [])

  return <Layout />
}

export default IndexPage
