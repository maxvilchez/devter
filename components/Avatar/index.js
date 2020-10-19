export default function Avatar ({ alt, src, text }) {
  return (
    <div className="container">
      <img src={src} className="avatar" alt={alt} />
      {text && <strong>{text}</strong>}
      <style jsx>{`
        .container {
          align-items: center;
          display: flex
        }
        .avatar {
          border-radius: 9999px;
          height: 49px;
          width: 49px;
        }
        .avatar + strong {
          margin-left: 8px;
        }
      `}</style>
    </div>
  )
}
