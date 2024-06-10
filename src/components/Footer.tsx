export const Footer = () => {
  return (
    <footer className="bg-accent py-5 text-sm">
      <section className="container flex flex-col md:flex-row gap-5 justify-between items-center">
        <span>© {new Date().getFullYear()} Built by lneves</span>
      </section>
    </footer>
  )
}

export default Footer;