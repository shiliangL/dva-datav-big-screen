const CDN = 'https://lib.baomitu.com/' // CDN Homepage: https://cdn.baomitu.com/
const publicPath = process.env.BASE_URL

function splicingPluginUrl (PluginName, version, fileName) {
  return `${CDN}${PluginName}/${version}/${fileName}`
}

export default {
  beautifierUrl: splicingPluginUrl('js-beautify', '1.13.5', 'beautifier.min.js'),
  monacoEditorUrl: `${publicPath}libs/monaco-editor/vs`,
  tinymceUrl: splicingPluginUrl('tinymce', '5.7.0', 'tinymce.min.js')
}
