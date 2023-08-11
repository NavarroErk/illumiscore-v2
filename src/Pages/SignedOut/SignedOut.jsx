import React from "react";
import { useNavigate } from "react-router-dom";

function SignedOut() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 1100);

  return (
    <div style={{ color: "white", fontSize: "32px" }}>
      YOU HAVE BEEN SIGNED OUT
    </div>
  );
}

export default SignedOut;
