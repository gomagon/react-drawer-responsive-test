import React, { memo, FC, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./Common.css";

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMenuIconDisplayed = () => {
    console.log("onMenuIconDisplayed");
  };

  const onMenuClicked = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  useEffect(() => {
    navigate("/test1");
  }, []);

  return (
    <>
      <div className="HeaderArea">
        <label className="HeaderLabel">header</label>
        <div className="ButtonArea">
          <button onClick={() => onMenuClicked("/test1")}>test1</button>
          <button onClick={() => onMenuClicked("/test2")}>test2</button>
          <button onClick={() => onMenuClicked("/test3")}>test3</button>
        </div>
        <div className="IconArea" onAnimationEnd={onMenuIconDisplayed}>
          <AiOutlineMenu onClick={() => setIsOpen(true)} className="Icon" />
        </div>
      </div>
      <nav className={`DrawerMenu ${isOpen && "DrawerMenu--isOpen"}`}>
        <ul onClick={() => onMenuClicked("/test1")}>test1</ul>
        <ul onClick={() => onMenuClicked("/test2")}>test2</ul>
        <ul onClick={() => onMenuClicked("/test3")}>test3</ul>
      </nav>
      {isOpen && (
        <label
          className="OverlayLabelUnderMenu"
          onClick={() => setIsOpen(false)}
        />
      )}
      <Outlet />
    </>
  );
});
