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
						<Route exact path="/" render={()=> <LandingPage />} />
						<Route exact path="/dashboard" render={()=> <h1>Dashboard</h1>} />
						<Route exact path="/login" render={()=> <h1>Log In</h1>} />
						<Route exact path="/signup" render={()=> <h1>Sign Up</h1>} />
						<Route render={()=><p>Page not found</p>} />
					</Switch>
				</Container>
			<Footer />
		</div>
	);
}

export default App;
