export const Header = () => {
  return (
    <header className="container flex justify-between align-items py-5 mx-auto">
      <a href="/" className="logo">sampleapp.</a>
      <div className="actions">
        <button>Sign in</button>
      </div>
    </header>
  )
}


export default Header;