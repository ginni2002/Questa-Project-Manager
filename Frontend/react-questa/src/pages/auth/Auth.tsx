import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import "./Auth.css";

const Auth = () => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-5">
            {active ? <Signup /> : <Login />}
            <div>
              <span>
                {active ? "Already have account?" : "Don't have account?"}
              </span>
              <Button variant="ghost" onClick={() => setActive(!active)}>
                <u>{active ? "Login" : "Sign up"}</u>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;