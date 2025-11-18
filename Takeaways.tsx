"use client";

import type React from "react";
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
import { useColor } from "./ColorContext";
import ColorPicker from "./ColorPicker";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Slider } from "./ui/slider";

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 255, 187"; // fallback to default green
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
};

const Takeaways: React.FC<{
  onNavigate?: (direction: "left" | "right") => void;
}> = ({ onNavigate }) => {
  const { primaryColor } = useColor();

  const NavigationArrow: React.FC<{
    direction: "left" | "right";
    onClick: () => void;
  }> = ({ direction, onClick }) => {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        className="w-[3.75rem] h-10 py-2 px-4 rounded-[2rem] transition-all duration-200 hover:scale-110"
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
          <ChevronLeft className="!w-4 !h-4 text-white" />
        ) : (
          <ChevronRight className="!w-4 !h-4 text-white" />
        )}
      </Button>
    );
  };

  // Takeaway items from the Figma design
  const takeawayItems = [
    "Tune in to others' emotions before shifting the focus",
    "Avoid minimizing or rushing past discomfort—sit with strong feelings",
    "Ask open questions to help others explore what they're feeling",
    "Recognize when to listen versus when to offer solutions",
    "Support others' own coping mechanisms, not just your own approaches",
    "Emotional intelligence builds trust, even in the busiest teams",
  ];

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
                className="sm:max-w-2xl rounded-[2rem] px-7 py-6 border-none shadow-lg"
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
                  <div className="w-full">
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
                      <label className="text-2xl font-rubik mb-2 text-white font-normal tracking-[-0.005rem]">
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
                      className="w-[5.75rem] text-lg h-11 py-2 px-4 rounded-[2rem] transition-all duration-200 hover:scale-110 text-white hover:text-white mx-auto"
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

        {/* Takeaways Content */}
        <div className="h-full flex-grow flex flex-col justify-center items-center pt-24">
          <div className="overflow-hidden relative rounded-[2.375rem] w-full max-w-[54.875rem] ">
            <div
              className="flex flex-col gap-5 max-h-fit max-w-[54.875rem] overflow-hidden h-full w-full items-center justify-start rounded-[2.375rem] relative px-10 py-8 backdrop-blur-[3.724rem]"
              style={{
                background: `linear-gradient(21deg, rgba(${hexToRgb(
                  primaryColor
                )}, 0.05) -10.76%, rgba(${hexToRgb(
                  primaryColor
                )}, 0.1) 127.18%)`,
              }}
            >
              {/* Takeaways Title */}
              <div className="relative">
                <h1
                  className="text-4xl font-normal tracking-[0.005rem] text-center"
                  style={{
                    color: primaryColor,
                    textShadow: `rgba(${hexToRgb(
                      primaryColor
                    )}, 0.5) 0px 0px 9px`,
                  }}
                >
                  Takeaways
                </h1>
              </div>

              {/* Decorative Line */}
              <div className="flex items-center justify-center relative w-full">
                <div className="w-full">
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

              {/* Takeaways Content Area */}
              <div className=" w-full flex items-center justify-center p-4 overflow-y-auto">
                <div className="w-full max-w-4xl mx-auto overflow-x-hidden overflow-y-auto">
                  <div className="relative">
                    {/* Takeaways List */}
                    <div className="relative z-10 w-full">
                      <div
                        className="flex flex-col font-rubik font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[1.194rem] text-justify tracking-[-0.09px]"
                        style={{ width: "min-content" }}
                      >
                        <ul className="list-disc space-y-2 mt-2">
                          {takeawayItems.map((item, index) => (
                            <li key={index} className="mb-0 ms-[1.792rem]">
                              <span className="leading-[2.986rem] block">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="flex justify-between items-center w-full">
                <NavigationArrow
                  direction="left"
                  onClick={() => onNavigate?.("left")}
                />
                <NavigationArrow
                  direction="right"
                  onClick={() => onNavigate?.("right")}
                />
              </div>

              {/* Inset Shadow Border */}
              <div
                className="absolute inset-0 pointer-events-none rounded-[2.375rem]"
                style={{
                  boxShadow: `0px 0px 11px 0px inset ${primaryColor}`,
                }}
              />
            </div>
            {/* Additional Background Ellipses */}
            <div className="absolute flex h-[27.69rem] items-center justify-center left-[30.092rem] mix-blend-lighten top-[0.428rem] w-[31.188rem] pointer-events-none">
              <div className="flex-none rotate-[33.283deg]">
                <div className="h-[15.169rem] relative w-[27.352rem]">
                  <div className="absolute bottom-[-167.188%] left-[-92.72%] right-[-92.72%] top-[-167.188%]">
                    <svg
                      className="block h-full w-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 1250 1055"
                    >
                      <g
                        filter={`url(#filter_takeaways_1_${primaryColor.replace(
                          "#",
                          ""
                        )})`}
                        opacity="0.2"
                        style={{ mixBlendMode: "lighten" }}
                      >
                        <ellipse
                          cx="624.819"
                          cy="527.354"
                          fill={primaryColor}
                          rx="218.819"
                          ry="121.354"
                        />
                      </g>
                      <defs>
                        <filter
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                          height="1054.26"
                          id={`filter_takeaways_1_${primaryColor.replace(
                            "#",
                            ""
                          )}`}
                          width="1249.19"
                          x="0.223328"
                          y="0.223328"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            mode="normal"
                            result="shape"
                          />
                          <feGaussianBlur
                            result="effect1_foregroundBlur"
                            stdDeviation="202.888"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute flex h-[27.69rem] items-center justify-center left-[-12.004rem] mix-blend-lighten top-[1.433rem] w-[31.188rem] pointer-events-none">
              <div className="flex-none rotate-[33.283deg]">
                <div className="h-[15.169rem] relative w-[27.352rem]">
                  <div className="absolute bottom-[-167.188%] left-[-92.72%] right-[-92.72%] top-[-167.188%]">
                    <svg
                      className="block h-full w-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 1250 1055"
                    >
                      <g
                        filter={`url(#filter_takeaways_2_${primaryColor.replace(
                          "#",
                          ""
                        )})`}
                        opacity="0.06"
                        style={{ mixBlendMode: "lighten" }}
                      >
                        <ellipse
                          cx="624.819"
                          cy="527.354"
                          fill={primaryColor}
                          rx="218.819"
                          ry="121.354"
                        />
                      </g>
                      <defs>
                        <filter
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                          height="1054.26"
                          id={`filter_takeaways_2_${primaryColor.replace(
                            "#",
                            ""
                          )}`}
                          width="1249.19"
                          x="0.223328"
                          y="0.223328"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            mode="normal"
                            result="shape"
                          />
                          <feGaussianBlur
                            result="effect1_foregroundBlur"
                            stdDeviation="202.888"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Effects */}
            <div className="absolute h-[25rem] w-[30.75rem] -top-[5rem] -right-[5rem] mix-blend-exclusion opacity-20 pointer-events-none">
              <div
                className="absolute inset-0 rounded-full blur-[9.375rem]"
                style={{
                  background: primaryColor,
                  transform: "scale(0.8)",
                }}
              />
            </div>
            <div className="absolute h-[25rem] w-[30.75rem] -top-[7.5rem] left mix-blend-exclusion opacity-15 pointer-events-none">
              <div
                className="absolute inset-0 rounded-full blur-[9.375rem]"
                style={{
                  background: primaryColor,
                  transform: "scale(0.8)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components (same as Note.tsx)
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
      className="w-12 h-12 !px-0 py-0 relative rounded-2xl hover:scale-110 transition-transform duration-300 group"
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
          <CustomRankingIcon color={primaryColor} className="!w-10 !h-10" />
        ) : icon === "settings" ? (
          <CustomSettingsIcon
            color={primaryColor}
            className="!w-10 !h-10 -mb-1"
          />
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
          className="w-12 h-12 !px-0 py-0 relative rounded-2xl"
          style={{
            borderRadius: "16px",
            boxShadow: "0px 0px 23.386px 0px rgba(0, 0, 0, 0.50)",
            background: `linear-gradient(151.477deg, rgba(${hexToRgb(
              primaryColor
            )}, 0.3), rgb(0, 0, 0))`,
          }}
        >
          <div
            className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-2xl flex items-center justify-center backdrop-blur-sm"
            style={{
              background: `linear-gradient(151.477deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                primaryColor
              )}, 0.5) 188.68%)`,
              borderRadius: "16px",
              zIndex: 1,
            }}
          >
            {icon === "coin" ? (
              <CustomCoinIcon color={primaryColor} className="!w-12 !h-12" />
            ) : icon === "progress" ? (
              <span
                className="text-white font-medium text-[0.813rem] font-rubik -tracking-[0.007rem] text-shadow-[0px_2.867px_8.6px_rgba(0,_255,_187,_0.30)]"
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

export default Takeaways;
