import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer";


test('renders Footer', () => {
    render(
        <Router>
            <Footer />
        </Router>
    )

    const socialLink = screen.getByAltText('Facebook logo')
    expect(socialLink).toBeInTheDocument();
})