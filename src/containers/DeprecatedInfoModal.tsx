import React from "react";
import { useNavigate } from "react-router";

import { FDWindow } from "../lib/components/Window";

export const DeprecatedInfoModal: React.FC<{}> = () => {
  const nav = useNavigate();

  return (
    <FDWindow
      className="w-auto h-auto"
      visible={true}
      setClose={() => {
        nav("/");
        localStorage.setItem("dontShow128Info", "true");
      }}
      title="Important Info"
    >
      <div className="flex flex-col items-center space-y-4 p-8 text-xl">
        <div className="text-danger-500 text-4xl pb-4">Attention!</div>
        <div>I've edited the entire build of this software side and hardware side.</div>
        <div>This software will ONLY work with JFresh's FreeDeck.</div>
        <div>If you have problems, click the help button and go to the discussion forum.</div>
        <div>Thank you for purchasing Fresh's FreeDeck!  ENJOY!</div>
      </div>
    </FDWindow>
  );
};
