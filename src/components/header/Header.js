import { useEffect } from "react";
import logo from '../../assets/img/logo.png';
import { isAuth } from "../../util/Util";
import { TopMenu } from "../menu/TopMenu";
import "./Header.css";

export const Header = () => {
  useEffect(() => { }, []);
  return (
    <div>
      <div className="flex text-center">
        <img className="logo" src={logo} alt="logo" />
        <h1>Movies.com</h1>
      </div>
      {isAuth() ? <TopMenu /> : ""}
    </div>
  );
};
