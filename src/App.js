import { Fragment } from 'react';
import './App.css';
import About from './components/About';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';
import AppFooter from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
	return (
		<Fragment>
			<NavBar/>
			<About/>
			<Projects/>
			<Skills/>
			<Contact/>
			<AppFooter/>
			<BackToTop/>
		</Fragment>
	);
}

export default App;
