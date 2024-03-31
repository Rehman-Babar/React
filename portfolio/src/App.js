import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './utils/Theme.js'
import Navbar from './component/navbar/index.js';
import Hero from './component/hero/index.js';
import Skills from './component/skills/index.js';
// import Education from './component/Education/index.js';
import Projects from './component/projects/index.js';
import {BrowserRouter as  Router} from 'react-router-dom'
import Experience from './component/experience/index.js';
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height:100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  return (
  
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
          <Skills/>
          <Experience/>
          
        </Wrapper>
        <Projects/>
      </Body>
      </Router>
    </ThemeProvider>
    
    )
}

export default App;
