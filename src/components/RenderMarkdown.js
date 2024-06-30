import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'

const _mapProps = (props) => ({
  ...props,

});

const RenderMarkdown = (props) => <ReactMarkdown rehypePlugins={[rehypeHighlight]} {..._mapProps(props)} />

export default RenderMarkdown