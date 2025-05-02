import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      {isLogin ? <Login /> : <Signup />}
      <button onClick={toggleForm}>
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
    </div>
  );
}

export default AuthPage;
