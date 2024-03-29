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
    <div className="min-h-screen md:p-8 lg:p-14 p-0 bg-gradient-to-br from-sky-500 to-indigo-500">
      <article className="container max-w-3xl rounded-lg prose prose-slate lg:prose-lg prose-a:text-indigo-600 mx-auto shadow-lg p-8 bg-gradient-to-br from-white to-slate-200">
        <Component {...pageProps} components={components} />
      </article>
    </div>
  )
}

export default MyApp

