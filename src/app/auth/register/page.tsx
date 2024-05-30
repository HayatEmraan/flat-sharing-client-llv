import { flatvue } from "@/assets";
import CmRegister from "@/components/ui/credentials/cmregister";
import Image from "next/image";

import Link from "next/link";

const RegisterPage = async () => {
  return (
    <div className="form-body">
      <div className="container-form" id="container">
        <div className="form-container sign-up">
          <div className="form-div">
            <Link href={"/"}>
              <Image width={250} src={flatvue.logo} alt="Logo" />
            </Link>
            <span>use your email for registration</span>
            <CmRegister />
          </div>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-right">
              <h1 className="text-3xl font-semibold">Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <Link href={"/auth/login"}>
                <button id="login">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
