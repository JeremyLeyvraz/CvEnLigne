function Header() {
    return (
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-10">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Ton Nom</h1>
        <p className="text-xl">Développeur React & Passionné par la Tech</p>
      </header>
    );
  }
  
  export default Header;