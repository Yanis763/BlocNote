import Showdown from 'showdown';
import ReactHtmlParser from "react-html-parser";



const NoteDisplay = (props) => {
    const converter = new Showdown.Converter();
    const text = converter.makeHtml(props.value)

    return(
        <div>{ ReactHtmlParser(text) }</div>
    )
}

export default NoteDisplay;