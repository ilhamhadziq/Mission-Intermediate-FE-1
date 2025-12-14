// src/components/AuthLayout.jsx
import "../assets/css/general.css";
export default function AuthLayout({ children }) {
  return (
    <div>
      <header className="side">
        <img src="src/assets/images/logo.png" className="logo" />
      </header>

      <main>
        <section className="login-card">{children}</section>
      </main>
    </div>
  );
}
