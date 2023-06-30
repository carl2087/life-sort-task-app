import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min"; 
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('renders NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    const loginLink = screen.getByText('Log In');
    expect(loginLink).toBeInTheDocument();
});

test('renders link to the users profiles for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const profileAvatar = await screen.findByText('Profile');
    expect(profileAvatar).toBeInTheDocument();
});

test('renders link to create a task for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const createTask = await screen.findByText('Create Task');
    expect(createTask).toBeInTheDocument();
});

test('renders link to the dashboard for a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const dashboard = await screen.findByText('Dashboard');
    expect(dashboard).toBeInTheDocument();
});

test('renders log in and sign up button again on logout', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const logOutLink = await screen.findByText('Log out');
    expect(logOutLink).toBeInTheDocument()
    fireEvent.click(logOutLink);

    const loginLink = await screen.findByText('Log In');
    const signUpLink = await screen.findByText('Sign Up');

    expect(loginLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
});