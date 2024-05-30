import { flatvue } from "@/assets";
import CmLogin from "@/components/ui/credentials/cmlogin";
import Image from "next/image";

import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="form-body">
      <div className="container-form" id="container">
        <div className="form-container sign-in">
          <div className="form-div">
            <Link href={"/"}>
              <Image width={250} src={flatvue.logo} alt="Logo" />
            </Link>
            <span>use your email / username password</span>
            <CmLogin />
          </div>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1 className="text-3xl font-semibold">Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <Link href={"/auth/register"}>
                <button id="login">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
