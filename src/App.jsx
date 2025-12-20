import './App.css';
// connecting components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import IssuesManagement from './components/IssuesManagement';

import Container from './components/Container';



function App() {
  return (
    <>
<NavBar></NavBar>

<IssuesManagement></IssuesManagement>

{/* card section */}
 <section
          class="grid grid-cols-1 md:grid-cols-12 gap-5 w-[95%] mx-2 min-h-screen"
        >
          
        </section>
<Footer></Footer>
    </>
  )
}

export default App
