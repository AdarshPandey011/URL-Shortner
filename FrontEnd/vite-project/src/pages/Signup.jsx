import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setTimeout(async () => {
      if (!username.trim() || !email.trim() || !password.trim()) {
        setError("All fields are required.");
        setLoading(false);
        return;
      }
      try {
        const res = await axios.post("http://localhost:3000/user/signup", {
          username,
          email,
          password,
        });
        setSuccess(res.data.message || "Signup successful!");
        setUsername("");
        setEmail("");
        setPassword("");
        

      } catch (err) {
        setError(
          err.response?.data?.message || "Signup failed. Please try again."
        );
      }
      setLoading(false);
    //   navigate("/home");
    }, 1000);
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
          <a href="/" style={{ margin: "0 20px", color: "#6a5af9", fontWeight: 500, textDecoration: "none" }}>Home</a>
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
            Create Your Account
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#444",
            marginBottom: 40
          }}>
            Sign up to start shortening your links!
          </p>
          <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
            maxWidth: 400,
            margin: "0 auto"
          }}>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
              style={{
                width: "100%",
                padding: "14px 20px",
                fontSize: "1.1rem",
                border: "none",
                borderRadius: "8px",
                background: "#f3f4f6",
                outline: "none",
                boxShadow: "0 2px 8px #eee",
                color: "#6b7280",
              }}
              required
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              style={{
                width: "100%",
                padding: "14px 20px",
                fontSize: "1.1rem",
                border: "none",
                borderRadius: "8px",
                background: "#f3f4f6",
                outline: "none",
                boxShadow: "0 2px 8px #eee",
                color: "#6b7280",
              }}
              required
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: "100%",
                padding: "14px 20px",
                fontSize: "1.1rem",
                border: "none",
                borderRadius: "8px",
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
                width: "100%",
                padding: "14px 0",
                fontSize: "1.1rem",
                border: "none",
                borderRadius: "8px",
                background: "linear-gradient(90deg, #6a5af9 0%, #38bdf8 100%)",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px #eee"
              }}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          {success && (
            <div style={{ color: "green", marginTop: 12, textAlign: "center" }}>
              {success}
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
  );
}