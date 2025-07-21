import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit =  (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShortUrl("");
    setCopied(false);
    setTimeout(async() => {
      if (url.trim() === "") {
        setError("Please enter a valid URL.");
        setLoading(false);
        return;
      }
      //setShortUrl("https://short.ly/" + Math.random().toString(36).substring(2, 8));
      await axios.post("http://localhost:3000/", { originalUrl:url })
      .then(res => {
        setShortUrl(res.data.shortUrl);
        console.log(res.data);
      })
      setLoading(false);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "linear-gradient(90deg, #6a5af9 0%, #38bdf8 100%)",
      padding: "0",
      margin: "0",
      fontFamily: "Inter, sans-serif",
      display: "flex",
      flexDirection: "column"
    }}>
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px 64px 0 64px",
        background: "transparent"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#3b82f6",
            marginRight: 10
          }}>🔗</span>
          <span style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#6a5af9"
          }}>LinkShort</span>
        </div>
        <div>
          <a href="#" style={{ margin: "0 20px", color: "#6a5af9", fontWeight: 500, textDecoration: "none" }}>Home</a>
          <a href="#" style={{ margin: "0 20px", color: "#6a5af9", fontWeight: 500, textDecoration: "none" }}>Features</a>
          <a href="#" style={{ margin: "0 20px", color: "#6a5af9", fontWeight: 500, textDecoration: "none" }}>Pricing</a>
          <span style={{
            marginLeft: 30,
            padding: "8px 16px",
            border: "2px solid #6a5af9",
            borderRadius: "50px",
            color: "#6a5af9",
            fontWeight: 700
          }}>AN</span>
        </div>
      </nav>
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          maxWidth: 700,
          width: "100%",
          padding: "60px 20px 0 20px",
          textAlign: "center"
        }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: 800,
            background: "linear-gradient(90deg, #6a5af9 0%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 16
          }}>
            Shorten Your Links Instantly
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#444",
            marginBottom: 40
          }}>
            Fast, secure, and customizable URL shortening for professionals and businesses.
          </p>
          <form onSubmit={handleSubmit} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
            marginBottom: 32
          }}>
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Enter your URL here..."
              style={{
                flex: 1,
                padding: "18px 20px",
                fontSize: "1.1rem",
                border: "none",
                borderRadius: "8px 0 0 8px",
                background: "#f3f4f6",
                outline: "none",
                boxShadow: "0 2px 8px #eee",
                color: "#6b7280",
              }}
              required
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "18px 32px",
                fontSize: "1.1rem",
                border: "none",
                borderRadius: "0 8px 8px 0",
                background: "linear-gradient(90deg, #6a5af9 0%, #38bdf8 100%)",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px #eee"
              }}
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </button>
          </form>
          <div style={{
            background: "#f9fafb",
            borderRadius: 12,
            boxShadow: "0 2px 8px #eee",
            padding: "32px 24px",
            margin: "0 auto",
            maxWidth: 600
          }}>
            <div style={{ fontWeight: 600, color: "#444", marginBottom: 12 }}>See it in action</div>
            <div style={{
              fontFamily: "monospace",
              fontSize: "1.1rem",
              color: "#6b7280",
              marginBottom: 10
            }}>
              { "https://example.com"}
            </div>
            {shortUrl && (
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12
              }}>
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1.2rem",
                    color: "#6a5af9",
                    fontWeight: 700,
                    textDecoration: "none"
                  }}
                >
                  {shortUrl}
                </a>
                <button
                  onClick={handleCopy}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 6,
                    border: "none",
                    background: "linear-gradient(90deg, #6a5af9 0%, #38bdf8 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
            {error && (
              <div style={{ color: "red", marginTop: 12, textAlign: "center" }}>
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}