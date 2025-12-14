// src/components/AuthLayout.jsx
import "../assets/css/header.css";
export default function AuthLayout({ children }) {
  return (
    <>
      <header>
        <img src="src/assets/images/logo.png" className="logo" />
      </header>

      <main>
        <section className="login-card">{children}</section>
      </main>
    </>
  );
}
