export default function Button ({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          background: #000000;
          border: 0;
          color: #ffffff;
          cursor: pointer;
          border-radius: 99px;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
        }
        button > :global(svg) {
          margin-right: 8px;
        }
        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
