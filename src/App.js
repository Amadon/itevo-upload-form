import React, {useState, useRef} from "react";
import './App.css';
import Attribute from "./components/Attribute";
import Image from "./components/Image";
require('dotenv').config()

function App() {
    const form = useRef(null)
    const handleSubmit = e => {
        e.preventDefault()
        const data = new FormData(form.current)
        fetch('http://localhost:80', {
            method: 'POST',
            body: data,
        }).then(res => res.json()).then(json => console.log(json))
    }

    const [attributes, setAttributes] = useState(0);
    const attributeChildren = [];
    for (let i = 0; i < attributes; i += 1) {
        attributeChildren.push(<Attribute key={i} number={i}/>);
    }

    const [images, setImages] = useState(0);
    const imageChildren = [];
    for (let i = 0; i < images; i += 1) {
        imageChildren.push(<Image key={i} number={i}/>);
    }

    return (
        <React.Fragment>
            <div className="App">
                <h1>Upload Form</h1>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="submit" name="Upload"/>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name"/>
                        <label htmlFor="beschreibung">Beschreibung</label>
                        <input type="text" className="form-control" name="beschreibung"/>
                        <label htmlFor="preis">Preis</label>
                        <input type="text" className="form-control" name="preis"/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-dark" onClick={() => setAttributes(attributes + 1)}>+
                        </button>
                        {attributeChildren}
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-dark" onClick={() => setImages(images + 1)}>+</button>
                        {imageChildren}
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default App;
