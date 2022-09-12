import "@code-hike/mdx/styles"
import "../styles/global.css"
import "asciinema-player/dist/bundle/asciinema-player.css"
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  const components = {
    ...pageProps.components,
    a: Link
  }

  return (
    <div className="min-h-screen p-20 bg-slate-300">
      <article className="container prose prose-slate lg:prose-lg mx-auto shadow-md p-8 bg-slate-50">
        <Component {...pageProps} components={components} />
      </article>
    </div>
  )
}

export default MyApp

