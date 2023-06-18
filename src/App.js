import styles from '../src/App.module.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Container  from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './api/axiosDefaults'
import LandingPage from './pages/landing-page/LandingPage';
import SignUpForm from './pages/auth/SignUpForm';
import LogInForm from './pages/auth/LogInForm';
import ScrollButton from './components/ScrollButton';
import CreateCustomTask from './pages/custom-tasks/CreateCustomTask';

function App() {

	return (
		<div className={ styles.App }>
			<NavBar />
				<Container>
					<Switch>
						<Route exact path="/" render={()=> <LandingPage />} />
						<Route exact path="/dashboard" render={()=> <h1>Dashboard</h1>} />
						<Route exact path="/login" render={()=> <LogInForm />} />
						<Route exact path="/signup" render={()=> <SignUpForm />} />
						<Route exact path="/createcustomtask" render={() => <CreateCustomTask /> } />
						<Route render={()=><p>Page not found</p>} />
					</Switch>
				</Container>
				<ScrollButton />
			<Footer />
		</div>
	);
}

export default App;
