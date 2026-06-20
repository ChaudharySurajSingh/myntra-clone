import { LockKeyhole, Mail, Phone, UserRound, X } from "lucide-react";
import { useState } from "react";

function AuthModal({ mode, onClose, onModeChange, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const isSignup = mode === "signup";

  const handleChange = (field, value) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fallbackName = form.email.split("@")[0] || "Fashion User";
    onSuccess({
      name: isSignup ? form.name || fallbackName : fallbackName,
      email: form.email,
      phone: form.phone
    });
  };

  return (
    <div className="authOverlay" role="dialog" aria-modal="true" aria-label="Account">
      <form className="authCard" onSubmit={handleSubmit}>
        <div className="authBanner">
          <div>
            <p>{isSignup ? "Create Account" : "Login"}</p>
            <h2>{isSignup ? "Join Myntra Insider" : "Login to your account"}</h2>
            <span>{isSignup ? "Save wishlist, track orders and unlock member deals." : "Access wishlist, orders, bag and personalized deals."}</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Close account modal">
            <X size={20} />
          </button>
        </div>

        <div className="authTabs">
          <button type="button" className={!isSignup ? "active" : ""} onClick={() => onModeChange("login")}>Login</button>
          <button type="button" className={isSignup ? "active" : ""} onClick={() => onModeChange("signup")}>Signup</button>
        </div>

        <div className="authFields">
          {isSignup && (
            <label>
              <span><UserRound size={16} /> Full Name</span>
              <input value={form.name} onChange={(event) => handleChange("name", event.target.value)} placeholder="Enter your name" />
            </label>
          )}

          <label>
            <span><Mail size={16} /> Email</span>
            <input type="email" value={form.email} onChange={(event) => handleChange("email", event.target.value)} placeholder="you@example.com" required />
          </label>

          {isSignup && (
            <label>
              <span><Phone size={16} /> Mobile Number</span>
              <input value={form.phone} onChange={(event) => handleChange("phone", event.target.value)} placeholder="10 digit mobile number" />
            </label>
          )}

          <label>
            <span><LockKeyhole size={16} /> Password</span>
            <input type="password" value={form.password} onChange={(event) => handleChange("password", event.target.value)} placeholder="Enter password" required />
          </label>
        </div>

        <p className="authTerms">By continuing, you agree to Terms of Use and Privacy Policy.</p>
        <button className="authSubmit" type="submit">{isSignup ? "Create Account" : "Login"}</button>

        <button className="authSwitch" type="button" onClick={() => onModeChange(isSignup ? "login" : "signup")}>
          {isSignup ? "Already have an account? Login" : "New to Myntra? Create an account"}
        </button>
      </form>
    </div>
  );
}

export default AuthModal;
