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
import CustomTaskPage from './pages/custom-tasks/CustomTaskPage';
import CustomTaskEdit from './pages/custom-tasks/CustomTaskEdit';
import Dashboard from './pages/dashboard/Dashboard';
import Customtasks from './pages/custom-tasks/Customtasks';

function App() {

	return (
		<div className={ styles.App }>
			<NavBar />
				<Container fluid>
					<Switch>
						<Route exact path="/" render={()=> <LandingPage />} />
						<Route exact path="/dashboard" render={()=> <Dashboard />} />
						<Route exact path="/customtasks" render={() => <Customtasks />} />
						<Route exact path="/login" render={()=> <LogInForm />} />
						<Route exact path="/signup" render={()=> <SignUpForm />} />
						<Route exact path="/createcustomtask" render={() => <CreateCustomTask /> } />
						<Route exact path="/customtask/:id" render={() => <CustomTaskPage /> } />
						<Route exact path="/customtask/:id/edit" render={() => <CustomTaskEdit />} />
						<Route render={()=><p>Page not found</p>} />
					</Switch>
				</Container>
				<ScrollButton />
			<Footer />
		</div>
	);
}

export default App;
