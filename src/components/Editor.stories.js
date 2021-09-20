// React
import { useState } from 'react';

// Component
import Editor from './Editor'

// Example Documents
import ExampleDocument, { BlankDocument, SmallDocument } from '../utils/ExampleDocuments';

// MRL: Tell Storybook about the component we are documenting.
// MRL: component -- the component itself
// MRL: title -- how to refer to the component in the sidebar of the Storybook app
export default {
    component: Editor,
    title: 'SlateJS/Editor'
}

// MRL: Stories are defined by functions that return a rendered component, given different props for each story (state)

// MRL: We create a "Template" function that we can re-use for each story.
// MRL: This helps us type less code as we don't need new functions for each story, we can re-use the Template function for each story by implementing the JS .bind() function to make copies if this Template Function
const Template = args => {
    const [document, updateDocument] = useState(args.document);                 // Pass the args.document to the useState - this is passed in for each story see Blank.args and Prefilled.arg below
    return <Editor {...args} document={document} onChange={updateDocument} />   // Pass the document ref returned by useState to the document prop and updateDocument to the onChange prop
}

// MRL: STORY 1 - The Blank Slate Editor
// MRL: This is where we use .bind() to make a "new" function (copy of the Template function instance)
export const Blank = Template.bind({})
Blank.args = {
    document: BlankDocument
}

// MRL: STORY 2 - Now with pre-filled content
export const Prefilled = Template.bind({})
Prefilled.args = {
    document: SmallDocument
}

// MRL: STORY 3 - some Custom Elements
export const CustomElements = Template.bind({})
CustomElements.args = {
    document: ExampleDocument
}
