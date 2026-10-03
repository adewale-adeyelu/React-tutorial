const Navbar = () => {
    return (  
        <section className="bg-red-400 flex justify-between items-center w-full top-0">
            <div>
                <a href="/">Home</a>
            </div>
            <div className="space-x-2">
                <a href="/about">
                    about
                </a>
                <a href="/faq">
                    faq
                </a>
                <a href="">
                    hero
                </a>
            </div>
            <button className="text-amber-300">
                button
            </button>
        </section>
    );
}
 
export default Navbar;