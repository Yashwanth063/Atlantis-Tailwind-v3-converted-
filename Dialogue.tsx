"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import svgPaths from "../imports/svg-knollny4nu";
import {
  CustomCoinIcon,
  CustomHomeIcon,
  CustomMapIcon,
  CustomRankingIcon,
  CustomSettingsIcon,
} from "./CustomIcons";
import imgBackground from "/images/background.png";
import imgCharacterAvatar from "/images/character-avatar.png";
import { useColor } from "./ColorContext";
import ColorPicker from "./ColorPicker";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Slider } from "./ui/slider";
import { ReplayPointDialog } from "./ReplayPointDialog";

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 255, 187"; // fallback to default green
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
};

const useTypewriter = (
  text: string,
  speed: number = 50,
  active: boolean = true
) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  // Reset when active state changes
  useEffect(() => {
    if (!active) {
      setDisplayText("");
      setIsComplete(false);
      setIsSkipped(false);
    }
  }, [active]);

  const skipTypewriter = useCallback(() => {
    if (active) {
      setDisplayText(text);
      setIsComplete(true);
      setIsSkipped(true);
    }
  }, [text, active]);

  const resetTypewriter = useCallback(() => {
    setDisplayText("");
    setIsComplete(false);
    setIsSkipped(false);
  }, []);

  useEffect(() => {
    // Only run typewriter when active
    if (!active || isSkipped) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (displayText.length >= text.length) {
      setIsComplete(true);
    }
  }, [displayText, text, speed, isSkipped, active]);

  return { displayText, isComplete, skipTypewriter, resetTypewriter };
};

const Dialogue: React.FC<{
  onNavigate?: (direction: "left" | "right") => void;
}> = ({ onNavigate }) => {
  const { primaryColor } = useColor();
  const [isReplayPointDialogOpen, setIsReplayPointDialogOpen] = useState(false);

  const handleReplay = () => {
    // Reset any dialogue state here
    console.log("Replay clicked");
  };

  const dialogueText =
    "You're leading a high-stakes tech project in Neo-City 2100, working with Nova, a brilliant but guarded engineer. Your team just wrapped a tense sprint after a major glitch nearly derailed the launch of your AI-powered orbital spaceship.";

  const { displayText, isComplete, skipTypewriter, resetTypewriter } =
    useTypewriter(dialogueText, 10 , true);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Skip on any key press (except modifier keys)
      if (
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        !event.shiftKey
      ) {
        if (!isComplete) {
          skipTypewriter();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isComplete, skipTypewriter]);

  const handleSkipDialogue = useCallback(() => {
    if (!isComplete) {
      skipTypewriter();
    }
  }, [isComplete, skipTypewriter]);

  const handleNavigation = useCallback(
    (direction: "left" | "right") => {
      resetTypewriter();
      onNavigate?.(direction);
    },
    [resetTypewriter, onNavigate]
  );

  const NavigationArrow: React.FC<{
    direction: "left" | "right";
    onClick: () => void;
  }> = ({ direction, onClick }) => {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        className="w-[3.75rem] h-10 py-2 px-4 rounded-3xl transition-all duration-200 hover:scale-110"
        style={{
          background: `linear-gradient(${
            direction === "left" ? "275.041deg" : "90deg"
          },
            rgba(${hexToRgb(primaryColor)}, 0.6) 7.25%, rgba(${hexToRgb(
            primaryColor
          )}, 0.15) 84.803%)`,
          border: `1px solid ${primaryColor}`,
          boxShadow: `0px 0px 15.9542px 0px rgba(${hexToRgb(
            primaryColor
          )}, 0.3)`,
        }}
      >
        {direction === "left" ? (
          <ChevronLeft className="h-4 w-4 text-white" />
        ) : (
          <ChevronRight className="h-4  w-4 text-white" />
        )}
      </Button>
    );
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black/90"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 relative h-full flex">
        {/* Top Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 h-[5.5rem] flex items-center justify-between bg-[url('/images/top-nav-bg.png')] bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <TopNavButton icon="home" />
            <TopNavButton icon="map" />
          </div>
          <div className="flex items-center gap-4">
            <StatusBar label="50" icon="progress" />
            <StatusBar label="100" icon="coin" />
            <TopNavButton icon="ranking" />
            <Dialog>
              <DialogTrigger asChild>
                <div className="translate-y-1">
                  <TopNavButton icon="settings" />
                </div>
              </DialogTrigger>
              <DialogContent
                className="sm:max-w-2xl rounded-3xl px-7 py-6 border-none shadow-lg"
                style={{
                  background: `linear-gradient(151.477deg, rgb(0,0,0) 17.606%, rgba(${hexToRgb(
                    primaryColor
                  )}, 0.6) 218.68%)`,
                  border: `1px solid linear-gradient(151.477deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                    primaryColor
                  )}, 0.4) 188.68%)`,
                  boxShadow: "0px 0px 23.4px 0px rgba(0, 0, 0, 0.50)",
                }}
              >
                <h2
                  className="text-center text-3xl py-1 font-medium"
                  style={{
                    color: primaryColor,
                    textShadow: `0 0 9px rgba(${hexToRgb(primaryColor)}, 0.49)`,
                  }}
                >
                  Settings
                </h2>

                {/* Decorative Line */}
                <div className="flex items-center justify-center relative w-full">
                  <div className="w-full overflow-y-auto">
                    <div className="h-[1px] relative w-full">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(90deg, transparent 0%, ${primaryColor} 48%, transparent 100%)`,
                          opacity: 0.995,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-8 mt-3 mb-2 max-w-md mx-auto w-full pt-5 pb-3">
                  <div className="flex flex-col gap-10">
                    {/* Music Volume */}
                    <div className="flex flex-col gap-1 items-center">
                      <label className="text-2xl font-rubik mb-2 text-white font-normal tracking-tight">
                        Music Volume
                      </label>
                      <Slider
                        defaultValue={[40]}
                        max={100}
                        step={1}
                        className="w-full"
                        // trackClassName="bg-white/70"
                        // thumbClassName="bg-white border border-gray-300 shadow-sm"
                      />
                    </div>

                    {/* Voice Over Volume */}
                    <div className="flex flex-col gap-1 items-center">
                      <label className="text-2xl font-rubik mb-2 text-white font-normal tracking-[-0.005rem]">
                        Voice over volume
                      </label>
                      <Slider
                        defaultValue={[20]}
                        max={100}
                        step={1}
                        className="w-full"
                        // trackClassName="bg-white/70"
                        // thumbClassName="bg-white border border-gray-300 shadow-sm"
                      />
                    </div>
                    {/* Color Picker */}
                    <div className="flex flex-col gap-1 items-center">
                      <label className="text-2xl font-rubik mb-2 text-white font-normal tracking-[-0.005rem]">
                        Set Theme
                      </label>
                      <ColorPicker />
                    </div>
                  </div>

                  {/* Okay button */}
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-[5.75rem] text-lg h-11 py-2 px-4 rounded-3xl transition-all duration-200 hover:scale-110 text-white hover:text-white mx-auto"
                      style={{
                        background: `linear-gradient(275.041deg
                              ,
                                rgba(${hexToRgb(
                                  primaryColor
                                )}, 0.7) 7.25%, rgba(0, 0, 0, 0.8) 84.803%)`,
                        border: `1px solid ${primaryColor}`,
                        boxShadow: `0px 0px 15.9542px 0px rgba(3, 51, 38, 0.8)`,
                      }}
                    >
                      Okay
                    </Button>
                  </DialogTrigger>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Dialogue Content */}
        <div className="h-full flex-grow flex flex-col justify-end items-center">
          <div
            className="flex flex-col gap-5 max-h-fit h-full w-full items-center min-h-48 justify-start rounded-2xl relative px-6 py-5 backdrop-filter backdrop-blur-[3.724rem]"
            style={{
              background: `linear-gradient(21deg, rgba(${hexToRgb(
                primaryColor
              )}, 0.05) -10.76%, rgba(${hexToRgb(
                primaryColor
              )}, 0.12) 127.18%)`,
            }}
          >
            <div className="flex gap-40 items-start w-full">
              {/* Character Section */}
              <div className="flex flex-col items-center">
                {/* Background blocker - larger area to block content behind character */}
                <div
                  className="absolute w-[8.563rem] h-[8rem] rounded-full -translate-y-1/4 translate-x-12pct-times-6 left-0"
                  style={{
                    background: `linear-gradient(21deg, rgba(10, 10, 10, 1) -10.76%, rgba(50, 50, 50, 1) 127.18%)`,
                    zIndex: 1,
                  }}
                />
                <div
                  className="rounded-full p-3 absolute left-0 transform -translate-y-1/4 translate-x-12pct-times-6"
                  style={{
                    background: `rgba(${hexToRgb(primaryColor)}, 0.1)`,
                    zIndex: 2,
                  }}
                >
                  {/* Character Avatar */}
                  <div
                    className="relative w-[7.063rem] h-[6.5rem] rounded-full overflow-hidden p-3"
                    style={{
                      border: `1px solid ${primaryColor}`,
                    }}
                  >
                    <img
                      src={imgCharacterAvatar || "/placeholder.svg"}
                      alt="Nova character"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Inset Shadow Border */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-full"
                    style={{
                      boxShadow: `0px 0px 11px 0px inset rgba(${hexToRgb(
                        primaryColor
                      )}, 0.1), 0px 0px 20px 0px rgba(${hexToRgb(
                        primaryColor
                      )}, 0.3)`,
                    }}
                  />
                </div>
                {/* Character Name */}
                <div className="relative">
                  <h2
                    className="text-3xl translatex1 mt-35 tracking-tight  text-start text-shadow-[0px_2.867px_8.6px_rgba(0,_255,_187,_0.30)]"
                    style={{
                      color: primaryColor,
                      textShadow: `rgba(${hexToRgb(
                        primaryColor
                      )}, 0.5) 0px 0px 9px`,
                    }}
                  >
                    Nova
                  </h2>
                </div>
              </div>

              <div className="w-full">
                <div className="relative">
                  <div className="absolute h-[25rem] w-[30.75rem] -top-[5rem] -right-[5rem] mix-blend-exclusion opacity-20 pointer-events-none">
                    <div
                      className="absolute inset-0 rounded-full blur-[21.875rem]"
                      style={{
                        background: primaryColor,
                      }}
                    />
                  </div>
                  <div className="absolute h-[25rem] w-[30.75rem] -top-[7.5rem] left-10 mix-blend-exclusion opacity-15 pointer-events-none">
                    <div
                      className="absolute inset-0 rounded-full blur-[21.875rem]"
                      style={{
                        background: primaryColor,
                      }}
                    />
                  </div>

                  {/* HIDDEN FOR NOW */}
                  {/* {!isComplete && (
                    <div className="absolute -top-3 -right-0.5 text-xs opacity-60 text-white">
                      Press any key or click text to skip
                    </div>
                  )} */}

                  <div className="relative z-10 w-full">
                    <div className="flex flex-col font-rubik font-normal text-[1.188rem] text-justify tracking-tight leading-[2rem]">
                      <div className="w-full">
                        <p
                          className="block transition-all  duration-300 cursor-pointer hover:opacity-90 min-h-[6rem] text-white max-lg:max-h-[134px] max-lg:overflow-y-auto ps-1"
                          onClick={handleSkipDialogue}
                          onDoubleClick={handleSkipDialogue}
                        >
                          {displayText}
                          {!isComplete && (
                            <span
                              className="animate-pulse ml-1 font-bold"
                              style={{ color: primaryColor }}
                            >
                              |
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center w-full mb-2"
             style={{ marginTop: "-5%" }}>
              <NavigationArrow
                direction="left"
                onClick={() => handleNavigation("left")}
              />
              <NavigationArrow
                direction="right"
                // onClick={() => setIsReplayPointDialogOpen(true)}
                onClick={() => handleNavigation("right")}
              />
            </div>

            {/* Inset Shadow Border */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                boxShadow: `0px 0px 11px 0px inset rgba(${hexToRgb(
                  primaryColor
                )}, 0.3), 0px 0px 20px 0px rgba(${hexToRgb(
                  primaryColor
                )}, 0.2)`,
              }}
            />
          </div>
        </div>
      </div>

      <ReplayPointDialog
        isOpen={isReplayPointDialogOpen}
        onOpenChange={setIsReplayPointDialogOpen}
        onReplay={handleReplay}
      />
    </div>
  );
  
};

// Helper Components (unchanged from original)
const TopNavButton: React.FC<{ icon: string }> = ({ icon }) => {
  const { primaryColor } = useColor();

  const IconElement = () => {
    switch (icon) {
      case "home":
        return <CustomHomeIcon color={primaryColor} size={20} />;
      case "map":
        return <CustomMapIcon color={primaryColor} size={20} />;
      case "ranking":
        return <CustomRankingIcon color={primaryColor} size={20} />;
      case "settings":
        return <CustomSettingsIcon color={primaryColor} size={20} />;
      default:
        return <IconComponent type={icon} color={primaryColor} />;
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-12 h-12 px-0 py-0 relative rounded-2xl hover:scale-110 transition-transform duration-300 group"
      style={{
        borderRadius: "16px",
        boxShadow: "0px 0px 23.386px 0px rgba(0, 0, 0, 0.50)",
        background: `linear-gradient(151.477deg, rgba(${hexToRgb(
          primaryColor
        )}, 0.3), rgb(0, 0, 0))`,
      }}
    >
      <div
        className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-2xl flex items-center justify-center"
        style={{
          background: `linear-gradient(151.477deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
            primaryColor
          )}, 0.5) 188.68%)`,
          borderRadius: "16px",
          zIndex: 1,
        }}
      >
        {icon === "ranking" ? (
          <CustomRankingIcon color={primaryColor} className="h-10 w-10" />
        ) : icon === "settings" ? (
          <CustomSettingsIcon color={primaryColor} className="h-10  w-10 -mb-1" />
        ) : (
          <IconElement />
        )}
      </div>
    </Button>
  );
};

const StatusBar: React.FC<{ label: string; icon?: string }> = ({
  label,
  icon,
}) => {
  const { primaryColor } = useColor();

  return (
    <div className="flex items-center">
      {icon && (
        <Button
          variant="ghost"
          size="sm"
          className="w-12 h-12 px-0 py-0 relative rounded-2xl"
          style={{
            borderRadius: "16px",
            boxShadow: "0px 0px 23.386px 0px rgba(0, 0, 0, 0.50)",
            background: `linear-gradient(151.477deg, rgba(${hexToRgb(
              primaryColor
            )}, 0.3), rgb(0, 0, 0))`,
          }}
        >
          <div
            className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-2xl flex items-center justify-center backdrop-blur-xs"
            style={{
              background: `linear-gradient(151.477deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                primaryColor
              )}, 0.5) 188.68%)`,
              borderRadius: "16px",
              zIndex: 1,
            }}
          >
            {icon === "coin" ? (
              <CustomCoinIcon color={primaryColor} className="h-12 w-12 " />
            ) : icon === "progress" ? (
              <span
                className="text-white font-medium text-[0.813rem] font-rubik   tracking-wide  text-shadow-[0px_2.867px_8.6px_rgba(0,_255,_187,_0.30)]"
                style={{ color: primaryColor }}
              >
                {label}%
              </span>
            ) : (
              <IconComponent type={icon} color={primaryColor} />
            )}
          </div>
        </Button>
      )}
      {label === "50" ? (
        <div className="flex-1 relative -ml-2.5 min-w-24">
          <div
            className="w-full h-8 rounded-[0.625rem] overflow-hidden"
            style={{
              background: `linear-gradient(179.484deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                primaryColor
              )}, 0.4) 188.68%)`,
              border: `1px solid rgba(${hexToRgb(primaryColor)}, 0.1)`,
              boxShadow: "0px 0px 15.3543px 0px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="h-full transition-all duration-500 ease-out rounded-[0.625rem] shadow-[0px_0px_2.378px_0px_rgba(0,_255,_187,_0.30)_inset,_0px_2.867px_8.6px_0px_rgba(0,_255,_187,_0.60)]"
              style={{
                width: `${(Number(label) / 100) * 100}%`,
                backgroundColor: primaryColor,
                boxShadow: `0px 0px 9.93511px 0px rgba(184,184,184,0.2)`,
              }}
            />
          </div>
        </div>
      ) : (
        <Badge
          variant="secondary"
          className="h-8 px-4 flex items-center -ml-1.5 rounded-[0.625rem] min-w-24 font-rubik"
          style={{
            background: `linear-gradient(170.484deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
              primaryColor
            )}, 0.4) 188.68%)`,
            border: `1px solid rgba(${hexToRgb(primaryColor)}, 0.2)`,
            boxShadow: "0px 0px 23.3864px 0px rgba(0,0,0,0.5)",
          }}
        >
          <span className="text-white font-medium text-[0.813rem]">
            {label}
          </span>
        </Badge>
      )}
    </div>
  );
};

const IconComponent: React.FC<{ type: string; color: string }> = ({
  type,
  color,
}) => {
  const getIconPath = () => {
    switch (type) {
      case "ranking":
        return svgPaths.p1a822c00;
      case "home":
        return svgPaths.p3bf15400;
      case "map":
        return svgPaths.p285e4100;
      case "settings":
        return svgPaths.p2037cc80;
      case "coin":
        return svgPaths.p1444db00;
      default:
        return svgPaths.p1444db00;
    }
  };

  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
      <path d={getIconPath()} fill={color} />
    </svg>
  );
};

export default Dialogue;
