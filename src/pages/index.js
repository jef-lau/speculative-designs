import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1 style={{fontSize:'5em'}}>Speculative</h1>
    <h1 style={{fontSize:'5em',paddingLeft:'2em'}}>Designs</h1>
    <p style={{fontSize:'1.5em',padding:'0 0 2em 8em ',lineHeight:'2em',maxWidth:'500px'}}>We are building something great and can't wait for you to see it!</p>
    <p style={{fontSize:'1.2em',padding:'0 0 2em 10em ',lineHeight:'2em'}}><a href="mailto: hello@speculativedesigns.com">INQUIRIES</a></p>
    </div>
)

export default IndexPage
