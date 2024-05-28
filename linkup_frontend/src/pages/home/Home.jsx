// import React from 'react'
import Stories from "../../components/Stories"
import "./home.scss"
import Posts from "../../components/Posts"
// import Update from "../../components/Update"
import Share from "../../components/Share"

function Home() {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home