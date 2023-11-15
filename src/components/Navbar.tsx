const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><h1>Smart Subs</h1></a>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <a href="/create">Suggest New Substitution</a>
            </div>
        </nav>
    );
}
 
export default Navbar;