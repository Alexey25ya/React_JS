// Создать компонент TextInput, который содержит текстовое поле ввода и отображает введённый текст под ним в реальном времени.

import { useState } from "react";

function TextInput() {
    const [text, setText] = useState("");
    const updateText = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={updateText} />
            <p>{text}</p>
        </div>
    );
}

export default TextInput;