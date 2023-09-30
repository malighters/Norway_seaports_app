import { Additional } from './components/Additional';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainInfo } from './components/MainInfo';
import { data } from '../data.js';

function App() {
  return (
    <>
      <Header />
      <main>
        <MainInfo />
        <Additional seaports={data.seaports} />
     </main>
     <Footer />
    </>
  )
}

export default App;
