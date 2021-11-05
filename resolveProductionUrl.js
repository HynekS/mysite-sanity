export default function resolveProductionUrl(document) {
  return `http://127.0.0.1:3000/post/${document.slug.current}?preview`
}