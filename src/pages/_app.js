import 'katex/dist/katex.min.css'
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'
import { useEffect } from 'react'

import '../styles/global.css'
import 'prismjs/themes/prism-tomorrow.css'


const App = ({ Component, pageProps }) => {

  useEffect(() => {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
    ]
    });
  }, [Component])

  return (
    <>
    <span className="theme-greenie" />
    
    <Component {...pageProps} />
  </>
  )
}

export default App

