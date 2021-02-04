const MarkdownInput = (props) =>  {
    const handleChange = (event) => {
        props.onUpdate(event.target.value);
    };
    // const handleSave = () => {
        
    // }
    return (
        <div>
            <textarea cols="30" rows="10" onChange={handleChange} placeholder="Votre texte ici"/>
            <button>Save</button>
        </div>
    )
}

export default MarkdownInput;