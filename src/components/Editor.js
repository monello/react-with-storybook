// React
import { useMemo } from "react";
import PropTypes from 'prop-types';

// Slate
import { withReact, Slate, Editable } from "slate-react";
import { createEditor } from "slate";

// React-Bootstrap
import { Container } from 'react-bootstrap';

// CSS
import "./Editor.css";

const Editor = ({ document, onChange, placeholder }) => {
    const editor = useMemo(() => withReact(createEditor()), []);

    return (
        <Slate editor={editor} value={document} onChange={onChange}>
            <Container className={"editor-container"}>
                <div className="editor">
                    <Editable placeholder={placeholder} />
                </div>
            </Container>
        </Slate>
    )
}

// MRL: Specify the "shape" of the expected date on this component, either using propTypes (as below) or by using TypeScript instead of Vanilla JS
Editor.propTypes = {
    /** The  */
    document: PropTypes.array,
    /** Event to change the task to the Archived state */
    onChange: PropTypes.func.isRequired,
}

// MRL: Describe default values for any props. Data type for these will be inferred
Editor.defaultProps = {
    placeholder: 'Enter some text...'
}

export default Editor;
