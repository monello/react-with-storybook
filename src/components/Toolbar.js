// React
import PropTypes from 'prop-types';

// Bootstrap
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

// Styles
import "./Toolbar.css";

const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph", "multiple"];
const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];

const Toolbar = ({ selection, previousSelection }) => {
    return (
        <div className="toolbar">
            {/* Dropdown for paragraph styles */}
            <DropdownButton
                className={"block-style-dropdown"}
                disabled={false}
                id="block-style"
                title={getLabelForBlockStyle("paragraph")}
            >
                {PARAGRAPH_STYLES.map((blockType) => (
                    <Dropdown.Item eventKey={blockType} key={blockType}>
                        {getLabelForBlockStyle(blockType)}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
            {/* Buttons for character styles */}
            {CHARACTER_STYLES.map((style) => (
                <ToolBarButton
                    key={style}
                    icon={<i className={`bi ${getIconForButton(style)}`} />}
                    isActive={false}
                />
            ))}
        </div>
    );
}

// MRL: Specify the "shape" of the expected date on this component, either using propTypes (as below) or by using TypeScript instead of Vanilla JS
Toolbar.propTypes = {
    /** The the current selection data */
    selection: PropTypes.object,
    /** The previous selection data */
    previousSelection: PropTypes.object,
}

const ToolBarButton = props => {
    const { icon, isActive, ...otherProps } = props;
    return (
        <Button
            variant="outline-primary"
            className="toolbar-btn"
            active={isActive}
            {...otherProps}
        >
            {icon}
        </Button>
    );
}

const getIconForButton = style => {
    switch (style) {
        case "bold":
            return "bi-type-bold";
        case "italic":
            return "bi-type-italic";
        case "code":
            return "bi-code-slash";
        case "underline":
            return "bi-type-underline";
        case "image":
            return "bi-file-image";
        case "link":
            return "bi-link-45deg";
        default:
            throw new Error(`Unhandled style in getIconForButton: ${style}`);
    }
}

const getLabelForBlockStyle = style => {
    switch (style) {
        case "h1":
            return "Heading 1";
        case "h2":
            return "Heading 2";
        case "h3":
            return "Heading 3";
        case "h4":
            return "Heading 4";
        case "paragraph":
            return "Paragraph";
        case "multiple":
            return "Multiple";
        default:
            throw new Error(`Unhandled style in getLabelForBlockStyle: ${style}`);
    }
}

export default Toolbar;
