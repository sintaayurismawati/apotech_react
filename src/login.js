import React, { useState } from "react"; // Import useState for managing state
import "./login.css";
import images from "./ImageLoader"; // Import the images
import { supabase } from "./db/supabaseClient"; // Import the Supabase client

function Login() {
  const [username, setUsername] = useState(""); // State for username input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading status

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading to true
    setError(""); // Clear any existing error

    // Verifikasi username dan password di tabel users
    const { data: userData, error: fetchError } = await supabase
      .from("users") // Ganti 'users' dengan nama tabel Anda
      .select("*") // Ambil semua kolom
      .eq("username", username) // Cek username
      .single(); // Ambil satu data

    if (fetchError) {
      setError(fetchError.message);
      setLoading(false);
      return; // Hentikan eksekusi jika ada error
    }

    // Cek password (pastikan password yang disimpan dalam bentuk hash)
    if (userData && userData.password === password) {
      // Handle successful login
      console.log("User:", userData); // Log user info
      setLoading(false); // Set loading to false
      // Redirect or perform additional actions as needed
    } else {
      setError("Username atau password salah"); // Set error message
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="login-page">
      <img
        className="img-container"
        src={images["image4.jpeg"]} // Access the image using the filename
        style={{ width: "50%", height: "100%" }}
        alt="Login Background"
      />
      <div className="container1">
        <div className="login-container" id="login-container">
          <img
            src={images["Logo_ApoTech.png"]} // Access the logo image
            style={{
              height: "40px",
              width: "200px",
              display: "block",
              margin: "auto",
            }}
            alt="ApoTech Logo"
          />
          <h1 style={{ textAlign: "center", color: "#07837b" }}>Welcome!</h1>
          <h4 style={{ textAlign: "center", color: "#475353" }}>
            Silahkan Login untuk melanjutkan
          </h4>
          <form id="loginForm" onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username} // Controlled input for username
                onChange={(e) => setUsername(e.target.value)} // Update state on change
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password} // Controlled input for password
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
              />
            </div>
            <button id="loginButton" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"} {/* Show loading text */}
            </button>
            {error && (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}{" "}
            {/* Display error message */}
          </form>
          <p style={{ textAlign: "center" }}>
            Belum punya akun?{" "}
            <a
              href="#"
              onClick={() => {
                /* Add your showSignUp logic here */
              }}
            >
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
