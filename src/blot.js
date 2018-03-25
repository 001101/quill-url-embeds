import Quill from 'quill'
const BlockEmbed = Quill.import('blots/block/embed')

class UrlEmbed extends BlockEmbed {
  static create (url) {
    let node = super.create()
    node.setAttribute('data-url-embed', url)
    node.setAttribute('contenteditable', 'false')
    return node
  }

  static value (node) {
    return node.getAttribute('data-url-embed')
  }
}
UrlEmbed.blotName = 'urlEmbed'
UrlEmbed.className = 'url-embed'
UrlEmbed.tagName = 'div'

export default UrlEmbed
