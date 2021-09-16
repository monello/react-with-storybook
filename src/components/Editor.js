// React
import { useMemo } from "react";

// Slate
import { withReact, Slate, Editable } from "slate-react";
import { createEditor } from "slate";

// React-Bootstrap
import { Container } from 'react-bootstrap';

// CSS
import "./Editor.css";

const Editor = ({ document, onChange }) => {
    const editor = useMemo(() => withReact(createEditor()), []);

    return (
        <Slate editor={editor} value={document} onChange={onChange}>
            <Container className={"editor-container"}>
                <div className="editor">
                    <Editable />
                </div>
            </Container>
        </Slate>
    )
}

export default Editor;
