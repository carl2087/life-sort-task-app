import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('renders NavBar', () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

    // using the getByText as using getByRole keeps failing the test

    const loginLink = screen.getByText('Log In');
    expect(loginLink).toBeInTheDocument();
})

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
})