// React
import { useMemo } from "react";
// import { useMemo, useRef } from "react";
import PropTypes from 'prop-types';

// Slate
import { withReact, Slate, Editable } from "slate-react";
import { createEditor } from "slate";

// React-Bootstrap
import { Container } from 'react-bootstrap';

// Utils
import ErrorBoundary from "../utils/ErrorBoundary";

// CSS
import "./Editor.css";

const Editor = ({ document, onChange, placeholder }) => {
    const editor = useMemo(() => withReact(createEditor()), []);

    // const editorRef = useRef()
    // if (!editorRef.current) editorRef.current = withReact(createEditor())
    // const editor = editorRef.current

    return (
        <ErrorBoundary>
            <Slate editor={editor} value={document} onChange={onChange}>
                <Container className={"editor-container"}>
                    <div className="editor">
                        <Editable placeholder={placeholder} />
                    </div>
                </Container>
            </Slate>
        </ErrorBoundary>
    )
}

// MRL: Specify the "shape" of the expected date on this component, either using propTypes (as below) or by using TypeScript instead of Vanilla JS
Editor.propTypes = {
    /** The document property must be an array of objects */
    document: PropTypes.arrayOf(PropTypes.object),
    /** Event to change the document state */
    onChange: PropTypes.func.isRequired,
    /** Text to display when the Editor has no content */
    placeholder: PropTypes.string
}

// MRL: Describe default values for any props.
Editor.defaultProps = {
    document: [{}],
    placeholder: 'Enter some text...'
}

export default Editor;
