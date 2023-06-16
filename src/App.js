import styles from '../src/App.module.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Container  from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LandingPage from './pages/landing-page/LandingPage';

function App() {
	return (
		<div className={ styles.App }>
			<NavBar />
				<Container>
					<Switch>
						<Route exact path="/" render={()=> < LandingPage />} />
						<Route exact path="/signin" render={()=> <h1>Sign In</h1>} />
					</Switch>
				</Container>
			<Footer />
		</div>
	);
}

export default App;
