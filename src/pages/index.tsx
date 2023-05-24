import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        This is the website of <strong>Souhail Merroun.</strong>
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home</title>
