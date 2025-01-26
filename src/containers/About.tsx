import preval from "preval.macro";
import React from "react";

import packageJson from "../../package.json";
import { Label, Value } from "../lib/components/LabelValue";
import { Row } from "../lib/components/Row";
import { ScrollListContainer } from "../lib/components/ScrollListContainer";
import { TitleBox } from "../lib/components/Title";

export const About: React.FC = () => {
  return (
    <ScrollListContainer>
      <TitleBox title="Fresh's FreeDeck Configurator">
        <Row>
          <Label>Software Version:</Label>
          <Value>{packageJson.version}</Value>
        </Row>
        <Row>
          <Label>Build:</Label>
          <Value>{preval`module.exports = new Date().getTime()`}</Value>
        </Row>
        <Row>
          <Label>Commit:</Label>
          <Value>{'N/A'}</Value>
        </Row>
        <Row>
          <Label>Software Repackaged by:</Label>
          <Value>{'JFresh @ FreshLabs Interactive 2025'}</Value>
        </Row>
      </TitleBox>
    </ScrollListContainer>
  );
};
