import React from "react";
import { useNavigate } from "react-router";

import { Anchor } from "../lib/components/Anchor";
import { CtrlDuo } from "../lib/components/CtrlDuo";
import { TitleBox } from "../lib/components/Title";
import { FDWindow } from "../lib/components/Window";

export const HelpModal: React.FC<{}> = () => {
  const nav = useNavigate();

  return (
    <FDWindow
      className="w-help h-full"
      visible={true}
      setClose={() => {
        nav("/");
      }}
      title="Help"
    >
      <div className="space-y-4 p-8 text-xl overflow-y-scroll">
        <TitleBox title="Tips and tricks">
          <p>
            You can hold <b>ctrl</b> (<b>cmd</b> on mac) to show more detailed
            information or advanced functionality on almost any screen.
          </p>
          <CtrlDuo>
            <p>Try it out!</p>
            <p>Yaaaaay you did it! 👍</p>
          </CtrlDuo>
        </TitleBox>
        <TitleBox title="FreeDeck Discussion">
          You can find all info here{" "}
          <Anchor
            newTab
            href="https://discord.gg/psCy3QkjwA"
          >
            here
          </Anchor>
        </TitleBox>
      </div>
    </FDWindow>
  );
};
