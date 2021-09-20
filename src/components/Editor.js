// React
import { useMemo, useCallback, useEffect } from "react";
import PropTypes from 'prop-types';

// Slate
import { withReact, Slate, Editable } from "slate-react";
import { createEditor } from "slate";

// React-Bootstrap
import { Container } from 'react-bootstrap';

// Custom Hooks
import useEditorConfig from "../hooks/useEditorConfig";
import useSelection from "../hooks/useSelection";

// Utils
import ErrorBoundary from "../utils/ErrorBoundary";

// Components
import Toolbar from "./Toolbar";

// CSS
import "./Editor.css";

const Editor = ({ document, onChange, placeholder }) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const { renderElement, renderLeaf } = useEditorConfig(editor);
    const [selection, setSelection] = useSelection(editor);

    const onChangeHandler = useCallback(
        (document) => {
            onChange(document);
            setSelection(editor.selection);
            console.log('Editor.js -> [onChangeHandler] selection:', editor.selection);
        },
        [editor.selection, onChange, setSelection]
    );

    useEffect(() => {
        console.log('Editor Re-Rendered, even when the user just clicks somewhere inside the Editor');
    });

    return (
        <ErrorBoundary>
            <Slate editor={editor} value={document} onChange={onChangeHandler}>
                <Container className={"editor-container"}>
                    <Toolbar selection={selection} />
                    <div className="editor">
                        <Editable
                            placeholder={placeholder}
                            renderElement={renderElement}
                            renderLeaf={renderLeaf} />
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
