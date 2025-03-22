import Home from "../../pages/Home";

function LayoutDefault() {
    return (
        <>
            <header className="header">
                <h1 className="header__title">Header</h1>
            </header>
            <Home />
            <aside className="sidebar">
                <ul className="sidebar__menu">
                    <li className="sidebar__item">Home</li>
                    <li className="sidebar__item">About</li>
                    <li className="sidebar__item">Contact</li>
                </ul>
            </aside>

            <footer className="footer">
                <p className="footer__text">© 2025 My Website</p>
            </footer>
        </>
    )
}
export default LayoutDefault;