export const Header = () => {
  return (
    <header className="container flex justify-between items-center  mx-auto">
      <a href="/" className="logo text-primary text-2xl">sampleapp.</a>
      <div className="actions">
        <button className="btn btn-neutral">Se Connecter</button>
      </div>
    </header>
  )
}


export default Header;