import styles from '../src/App.module.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Container  from 'react-bootstrap/Container';
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
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
import CreateQuickTask from './pages/quick-tasks/CreateQuickTask';
import QuickTaskPage from './pages/quick-tasks/QuickTaskPage';
import QuickTaskEdit from './pages/quick-tasks/QuickTaskEdit';
import QuickTasks from './pages/quick-tasks/QuickTasks';
import HolidayTaskPage from './pages/holiday-tasks/HolidayTaskPage';
import CreateHolidayTask from './pages/holiday-tasks/CreateHolidayTask';
import HolidayTasks from './pages/holiday-tasks/HolidayTasks';
import HolidayTaskEdit from './pages/holiday-tasks/HolidayTaskEdit';
import ProfilePage from './pages/profiles/ProfilePage';
import ProfileEdit from './pages/profiles/ProfileEdit';

function App() {

	return (
		<div className={ styles.App }>
			<NavBar />
				<Container fluid>
					<Switch>
						<Route exact path="/" render={()=> <LandingPage />} />
						<Route exact path="/dashboard" render={()=> <Dashboard />} />
						<Route exact path="/login" render={()=> <LogInForm />} />
						<Route exact path="/signup" render={()=> <SignUpForm />} />
						<Route exact path="/createcustomtask" render={() => <CreateCustomTask /> } />
						<Route exact path="/customtask/:id" render={() => <CustomTaskPage /> } />
						<Route exact path="/customtask/:id/edit" render={() => <CustomTaskEdit />} />
						<Route exact path="/customtasks" render={() => <Customtasks />} />
						<Route exact path="/createquicktask" render={() => <CreateQuickTask /> } />
						<Route exact path="/quicktask/:id" render={() => <QuickTaskPage /> } />
						<Route exact path="/quicktask/:id/edit" render={() => <QuickTaskEdit /> } />
						<Route exact path="/quicktasks" render={() => <QuickTasks />} />
						<Route exact path="/createholidaytask" render={() => <CreateHolidayTask />} />
						<Route exact path="/holiday/:id" render={() => <HolidayTaskPage />} />
						<Route exact path="/holidaytasks" render={() => <HolidayTasks />} />
						<Route exact path="/holidaytask/:id/edit" render={() => <HolidayTaskEdit />} />
						<Route exact path="/profiles/:id" render={() => <ProfilePage />} />
						<Route exact path='/profile/:id/edit' render={() => <ProfileEdit />} />
						<Route render={()=><p>Page not found</p>} />
					</Switch>
				</Container>
				<ScrollButton />
			<Footer />
		</div>
	);
}

export default App;
