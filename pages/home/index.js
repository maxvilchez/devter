
export default function HomePage () {
  return (
    <>
      <main>
        <header>
          <h1>Inicio</h1>
        </header>
        <section></section>
        <nav></nav>
      </main>
      <style jsx>{`
        header: {
          align-items: center;
          border-bottom: 1px solid #ccc;
          height: 49px;
          display: flex;
          position: fixed;
          top: 0;
          width: 100%;
        }
        section: {
          padding-top: 100px;
        }
        nav: {
          bottom: 0;
          border-top: 1px solid #ccc;
          height: 49px;
          position: fixed;
          width: 100%;
        }`}</style>
    </>
  )
}
