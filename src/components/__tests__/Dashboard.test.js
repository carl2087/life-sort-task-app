import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "../../pages/dashboard/Dashboard";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";



test('renders links to each task page', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <Dashboard />
            </CurrentUserProvider>
        </Router>
    )

    const customTask = await screen.findByText('Custom Tasks');
    const quickTask = await screen.findByText('Quick Tasks');
    const holidayTask = await screen.findByText('Holiday Tasks');

    expect(customTask).toBeInTheDocument();
    expect(quickTask).toBeInTheDocument();
    expect(holidayTask).toBeInTheDocument();
})