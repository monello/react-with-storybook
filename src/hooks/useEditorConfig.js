// Slate
import { DefaultElement } from "slate-react";

export default function useEditorConfig(editor) {
    return { renderElement };
}

function renderElement(props) {
    // MRL: Object destructuring
    const { element, children, attributes } = props;
    // MRL: Based on the element.type this function will render "Custom" elements
    // MRL: It manually attaches the attributed that are pass in through props
    // MRL: It then simply passes any (props.)children along inside the custom element bodies
    switch (element.type) {
        case "paragraph":
            return <p {...attributes}>{children}</p>;
        case "h1":
            return <h1 {...attributes}>{children}</h1>;
        case "h2":
            return <h2 {...attributes}>{children}</h2>;
        case "h3":
            return <h3 {...attributes}>{children}</h3>;
        case "h4":
            return <h4 {...attributes}>{children}</h4>;
        default:
            // For the default case, we delegate to Slate's default rendering.
            return <DefaultElement {...props} />;
    }
}
