import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import MarkdownInput from 'MarkdownInput';
import NoteDisplay from 'NoteDisplay';


const App = () => {
    const [value, setValue] = useState('');
    const handleUpdate = (newValue) => {
        console.log(newValue);
        setValue(newValue);
    }
    return (
        <div>
            <NoteDisplay value={value} />
            <MarkdownInput onUpdate={handleUpdate}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

