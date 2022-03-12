import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { Content } from './index.styled';

function App() {

  const [accordion, setAccordion] = useState("Title")

  return <BrowserRouter>
    <div> 
      <Header />
        <Content>
        <NavBar accordion={accordion} setAccordion={setAccordion} /> 

        </Content> 
    </div>
    </BrowserRouter>
}

export default App;
