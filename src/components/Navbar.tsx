const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><h1>Substitutions</h1></a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Suggest new Substitution</a>
            </div>
        </nav>
    );
}
 
export default Navbar;