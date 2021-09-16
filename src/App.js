// React
import { useState } from 'react';

// components
import Editor from './components/Editor';

// utils
import ExampleDocument from './utils/ExampleDocument';

// React-Bootstrap
import { Navbar, Container } from 'react-bootstrap';

// CSS
import './App.css';

function App() {
  const [document, updateDocument] = useState(ExampleDocument);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="/app-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            WYSIWYG Editor
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App">
        <Editor document={document} onChange={updateDocument} />
      </div>
    </>
  );
}

export default App;
