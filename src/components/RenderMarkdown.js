import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const _mapProps = (props) => ({
  ...props,

});

const RenderMarkdown = (props) => <ReactMarkdown rehypePlugins={[rehypeRaw]} {..._mapProps(props)} />

export default RenderMarkdown