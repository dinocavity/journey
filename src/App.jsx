import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
