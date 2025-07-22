import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });

      const token = res.data.token;
      login(token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials.");
    }
    setLoading(false);
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
            Welcome Back!
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#444",
            marginBottom: 40
          }}>
            Login to your account to shorten URLs instantly.
          </p>

          <form onSubmit={handleLogin} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
            maxWidth: 400,
            margin: "0 auto"
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* 👇 Signup link here */}
          <p style={{ marginTop: 16, fontSize: "0.95rem", color: "#444" }}>
            Don’t have an account?{" "}
            <Link to="/signup" style={{ color: "#6a5af9", fontWeight: "bold", textDecoration: "none" }}>
              Sign up
            </Link>
          </p>

          {error && (
            <div style={{ color: "red", marginTop: 12, textAlign: "center" }}>
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
