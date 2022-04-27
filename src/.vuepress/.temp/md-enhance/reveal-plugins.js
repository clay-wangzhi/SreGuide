export const usePlugins = () => [
  import(
    /* webpackChunkName: "reveal" */ "reveal.js/plugin/markdown/markdown.esm.js"
  ),
  import(
    /* webpackChunkName: "reveal" */ "reveal.js/plugin/highlight/highlight.esm.js"
  ),
  import(
    /* webpackChunkName: "reveal" */ "reveal.js/plugin/math/math.esm.js"
  ),
  import(
    /* webpackChunkName: "reveal" */ "reveal.js/plugin/search/search.esm.js"
  ),
  import(
    /* webpackChunkName: "reveal" */ "reveal.js/plugin/notes/notes.esm.js"
  ),
  import(
    /* webpackChunkName: "reveal" */ "reveal.js/plugin/zoom/zoom.esm.js"
  )
];