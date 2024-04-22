import React, { useEffect } from "react";
import "./style.css";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
import defaultImg from "../../assets/user.svg";

function Header() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading]);
  function logoutFnc() {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Logout Successful!");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (e) {
      toast.error(e.message);
    }
  }
  return (
    <div className="navbar">
      <p className="logo">ProfileForge . </p>
      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img
            src={user.photoURL ? user.photoURL : defaultImg}
            alt=""
            style={{
              borderRadius: "15%",
              height: "1.5rem",
              width: "1.5rem",
              color: "white",
            }}
          />
          <p
            className="logo link"
            onClick={logoutFnc}
            style={{ fontFamily: "cabin", fontSize: "1rem" }}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
