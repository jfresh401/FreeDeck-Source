import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  BoltIcon,
  LanguageIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { SunIcon as SunIconAlt } from "@heroicons/react/24/solid";
import c from "clsx";
import React, { useContext } from "react";

import {
  fontLarge,
  fontMedium,
  fontSmall,
  fontSmaller,
} from "../../../definitions/fonts";
import { EImageMode, ETextPosition } from "../../../definitions/modes";
import { TextSettings } from "../../../generated";
import { CtrlDuo } from "../../../lib/components/CtrlDuo";
import { Label, Value } from "../../../lib/components/LabelValue";
import { Row } from "../../../lib/components/Row";
import { FDSelect } from "../../../lib/components/SelectInput";
import { FDSlider } from "../../../lib/components/Slider";
import { FDSwitch } from "../../../lib/components/Switch";
import { TextArea } from "../../../lib/components/TextArea";
import { TitleBox } from "../../../lib/components/Title";
import {
  ConfigDispatchContext,
  ConfigStateContext,
} from "../../../states/configState";

export const ImageSettings: React.FC<{
  displayIndex: number;
  pageId: string;
}> = ({ displayIndex, pageId }) => {
  const configState = useContext(ConfigStateContext);
  const display =
    pageId === "dbd"
      ? configState.defaultBackDisplay.display
      : configState.pages.byId[pageId].displayButtons[displayIndex].display;

  const configDispatch = useContext(ConfigDispatchContext);

  const setBlack = (blackThreshold: number) => {
    display.imageSettings.blackThreshold = blackThreshold;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setWhite = (whiteThreshold: number) => {
    display.imageSettings.whiteThreshold = whiteThreshold;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setBrightness = (brightness: number) => {
    display.imageSettings.brightness = brightness;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setContrast = (contrast: number) => {
    display.imageSettings.contrast = contrast;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setInvert = (invert: boolean) => {
    display.imageSettings.invert = invert;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setAutoCrop = (autoCrop: boolean) => {
    display.imageSettings.autoCrop = autoCrop;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setImageMode = (imageMode: EImageMode) => {
    display.imageSettings.imageMode = imageMode;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setfontName = (font: TextSettings["font"]) => {
    display.textSettings.font = font;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setText = (text: string) => {
    display.textSettings.text = text;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setTextPosition = (position: ETextPosition) => {
    display.textSettings.position = position;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };
  const setIconWidthMultiplier = (value: number) => {
    display.textWithIconSettings.iconWidthMultiplier = value;
    configDispatch.setDisplaySettings({
      displaySettings: display,
      pageId,
      buttonIndex: displayIndex,
    });
  };

  return (
    <div className="grid grid-cols-2 gap-2 grid-rows-1 w-full h-full">
      <div className="relative flex flex-col bg-gray-800 rounded-xl">
        <div
          className={c(
            "z-10 bg-gray-900 opacity-80 top-0 left-0 right-0 bottom-0 absolute rounded-xl",
            display.originalImage ? "hidden" : "block"
          )}
          title="These options are disabled. Load an image by clicking on the black box or just enter some text"
        />
        <TitleBox title="Image" className="h-full">
          <Row className="h-8">
            <CtrlDuo>
              <BoltIcon className="h-7 w-7" />
              <Label>Image mode</Label>
            </CtrlDuo>
            <CtrlDuo>
              <FDSelect
                className="w-56"
                value={display.imageSettings.imageMode}
                disabled={!display.originalImage}
                onChange={(value) => setImageMode(value)}
                options={[
                  { text: "Normal (simple icons)", value: EImageMode.normal },
                  { text: "Dither (Pictures)", value: EImageMode.dither },
                  {
                    text: "Hybrid (complex icons)",
                    value: EImageMode.hybrid,
                  },
                ]}
              />
              <Value>{display.imageSettings.imageMode}</Value>
            </CtrlDuo>
          </Row>
          {!!(display.imageSettings.imageMode === EImageMode.normal) && (
            <>
              <Row className="h-8">
                <CtrlDuo>
                  <SunIconAlt className="h-7 w-7" />
                  <Label>White Threshold</Label>
                </CtrlDuo>
                <FDSlider
                  disabled={!display.originalImage}
                  className="w-44"
                  min={0}
                  max={128}
                  step={1}
                  value={display.imageSettings.whiteThreshold}
                  onChange={(event) =>
                    setWhite(event.currentTarget.valueAsNumber)
                  }
                />
              </Row>
              <Row className="h-8">
                <CtrlDuo>
                  <SunIcon className="h-7 w-7" />
                  <Label>Black Threshold</Label>
                </CtrlDuo>
                <FDSlider
                  disabled={!display.originalImage}
                  className="w-44"
                  min={128}
                  max={255}
                  step={1}
                  value={display.imageSettings.blackThreshold}
                  onChange={(event) =>
                    setBlack(event.currentTarget.valueAsNumber)
                  }
                />
              </Row>
            </>
          )}
          {!!(
            display.imageSettings.imageMode === EImageMode.dither ||
            display.imageSettings.imageMode === EImageMode.hybrid
          ) && (
            <>
              <Row className="h-8">
                <CtrlDuo>
                  <SunIconAlt className="h-7 w-7" />
                  <Label>Brightness:</Label>
                </CtrlDuo>
                <FDSlider
                  disabled={!display.originalImage}
                  min={-1}
                  max={1}
                  step={0.02}
                  value={display.imageSettings.brightness}
                  onChange={(event) =>
                    setBrightness(event.currentTarget.valueAsNumber)
                  }
                />
              </Row>
              <Row className="h-8">
                <CtrlDuo>
                  <MoonIcon className="h-7 w-7" />
                  <Label>Contrast:</Label>
                </CtrlDuo>
                <FDSlider
                  disabled={!display.originalImage}
                  min={-1}
                  max={1}
                  step={0.02}
                  value={display.imageSettings.contrast}
                  onChange={(event) =>
                    setContrast(event.currentTarget.valueAsNumber)
                  }
                />
              </Row>
            </>
          )}
          <Row className="h-8">
            <CtrlDuo>
              <ArrowPathIcon className="h-7 w-7" />
              <Label>Invert</Label>
            </CtrlDuo>
            <CtrlDuo>
              <FDSwitch
                disabled={!display.originalImage}
                onChange={(value) => setInvert(value)}
                value={display.imageSettings.invert}
              />
              <Value>{!!display.imageSettings.invert ? "on" : "off"}</Value>
            </CtrlDuo>
          </Row>
          <Row className="h-8">
            <CtrlDuo>
              <MagnifyingGlassIcon className="h-7 w-7" />
              <Label>AutoCrop</Label>
            </CtrlDuo>
            <CtrlDuo>
              <FDSwitch
                disabled={!display.originalImage}
                onChange={(value) => setAutoCrop(value)}
                value={display.imageSettings.autoCrop}
              />
              <Value>{!!display.imageSettings.autoCrop ? "on" : "off"}</Value>
            </CtrlDuo>
          </Row>
        </TitleBox>
      </div>

      <div className="relative flex flex-col bg-gray-800 rounded-xl">
        <TitleBox title="Text" className="h-full">
          <Row>
            <TextArea
              className="w-full"
              placeholder={"Enter text"}
              value={display.textSettings.text ?? ""}
              onChange={(value) => setText(value)}
            />
          </Row>
          <Row className="h-8">
            <CtrlDuo>
              <AdjustmentsHorizontalIcon className="h-7 w-7" />
              <Label>Position:</Label>
            </CtrlDuo>
            <CtrlDuo>
              <FDSelect
                className="w-44"
                value={display.textSettings.position}
                onChange={(value) => setTextPosition(value)}
                options={[
                  { value: ETextPosition.right, text: "right" },
                  { value: ETextPosition.bottom, text: "bottom" },
                ]}
              />
              <Value>{display.textSettings.position}</Value>
            </CtrlDuo>
          </Row>
          <Row className="h-8">
            <CtrlDuo>
              <LanguageIcon className="h-7 w-7" />
              <Label>Font:</Label>
            </CtrlDuo>
            <CtrlDuo>
              <FDSelect
                className="w-44"
                value={display.textSettings.font}
                onChange={(value) => setfontName(value)}
                options={[
                  { value: fontSmaller, text: "xs" },
                  { value: fontSmall, text: "medium" },
                  { value: fontMedium, text: "large" },
                  { value: fontLarge, text: "xl" },
                ]}
              />
              <Value>{display.textSettings.font}</Value>
            </CtrlDuo>
          </Row>
          <Row className="h-8">
            <CtrlDuo>
              <ArrowsPointingOutIcon className="h-7 w-7" />
              <Label>Icon width:</Label>
            </CtrlDuo>
            <FDSlider
              disabled={
                !display.textSettings.text?.length ||
                display.textSettings.position === ETextPosition.bottom
              }
              min={0.1}
              max={0.9}
              step={0.01}
              value={display.textWithIconSettings.iconWidthMultiplier}
              onChange={(event) =>
                setIconWidthMultiplier(event.currentTarget.valueAsNumber)
              }
            />
          </Row>
        </TitleBox>
      </div>
    </div>
  );
};
