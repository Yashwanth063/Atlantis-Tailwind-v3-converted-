"use client";

import type React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import svgPaths from "../imports/svg-knollny4nu";
import svgQuestComplete from "../imports/svg-f1z862fadf";
import {
  CustomCoinIcon,
  CustomHomeIcon,
  CustomMapIcon,
  CustomMedalIcon,
  CustomRankingIcon,
  CustomSettingsIcon,
} from "./CustomIcons";
import imgBackground from "/images/background.png";
import { useColor } from "./ColorContext";
import ColorPicker from "./ColorPicker";
import { Slider } from "./ui/slider";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 255, 187"; // fallback to default green
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
};

const QuestComplete: React.FC<{
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
          <ChevronLeft className="!h-4 !w-4 text-white" />
        ) : (
          <ChevronRight className="!h-4 !w-4 text-white" />
        )}
      </Button>
    );
  };

  // Floating particles components
  const FloatingParticles1: React.FC = () => {
    const particles = [
      { left: "calc(20% + 7.937rem)", top: "9.584rem" },
      { left: "calc(20% + 14.317rem)", top: "15.666rem" },
      { left: "calc(60% + 9.806rem)", top: "11.972rem" },
      { left: "calc(60% + 10.702rem)", top: "5.629rem" },
      { left: "calc(60% + 13.687rem)", top: "14.397rem" },
      { left: "calc(20% + 7.750rem)", top: "20.815rem" },
      { left: "calc(40% + 1.279rem)", top: "5.443rem" },
      { left: "calc(40% + 1.652rem)", top: "14.584rem" },
      { left: "calc(60% + 3.352rem)", top: "5.070rem" },
      { left: "calc(60% + 5.068rem)", top: "15.666rem" },
      { left: "calc(20% + 8.310rem)", top: "4.697rem" },
      { left: "calc(20% + 14.951rem)", top: "12.047rem" },
      { left: "calc(60% + 4.695rem)", top: "12.979rem" },
      { left: "calc(60% + 15.925rem)", top: "8.651rem" },
      { left: "calc(60% + 6.561rem)", top: "10.517rem" },
      { left: "calc(20% + 17.078rem)", top: "15.666rem" },
      { left: "calc(20% + 8.869rem)", top: "16.449rem" },
      { left: "calc(60% + 14.060rem)", top: "21.188rem" },
      { left: "calc(60% + 8.463rem)", top: "14.994rem" },
    ];

    return (
      <>
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute bg-[rgba(255,255,255,0.4)] rounded-[3.75rem] h-[1.194px]  w-[1.194px] animate-pulse transition-all duration-300"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </>
    );
  };

  const FloatingParticles2: React.FC = () => {
    const particles = [
      { left: "calc(20% + 4.607rem)", top: "16.449rem" },
      { left: "calc(20% + 11.077rem)", top: "30.974rem" },
      { left: "calc(60% + 7.011rem)", top: "22.152rem" },
      { left: "calc(60% + 7.919rem)", top: "7.003rem" },
      { left: "calc(60% + 10.946rem)", top: "27.944rem" },
      { left: "calc(20% + 4.438rem)", top: "43.271rem" },
      { left: "calc(20% + 16.109rem)", top: "6.558rem" },
      { left: "calc(20% + 16.487rem)", top: "28.390rem" },
      { left: "calc(60% + 0.465rem)", top: "5.667rem" },
      { left: "calc(60% + 2.206rem)", top: "30.974rem" },
      { left: "calc(20% + 4.985rem)", top: "4.745rem" },
      { left: "calc(20% + 11.720rem)", top: "22.330rem" },
      { left: "calc(60% + 1.828rem)", top: "24.558rem" },
      { left: "calc(60% + 13.196rem)", top: "14.221rem" },
      { left: "calc(60% + 3.719rem)", top: "18.677rem" },
      { left: "calc(20% + 13.877rem)", top: "30.974rem" },
      { left: "calc(20% + 5.552rem)", top: "32.845rem" },
      { left: "calc(60% + 11.325rem)", top: "44.193rem" },
      { left: "calc(60% + 5.649rem)", top: "29.370rem" },
    ];

    return (
      <>
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute bg-[rgba(255,255,255,0.6)] rounded-[3.332rem] h-[1.858px] w-[1.858px] animate-pulse transition-all duration-300"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </>
    );
  };

  const FloatingParticles3: React.FC = () => {
    const particles = [
      { left: "calc(20% + 4.374rem)", top: "30.638rem" },
      { left: "calc(20% + 10.754rem)", top: "36.719rem" },
      { left: "calc(60% + 6.244rem)", top: "33.026rem" },
      { left: "calc(60% + 7.139rem)", top: "26.683rem" },
      { left: "calc(60% + 10.124rem)", top: "35.451rem" },
      { left: "calc(20% + 4.188rem)", top: "41.868rem" },
      { left: "calc(20% + 15.716rem)", top: "26.496rem" },
      { left: "calc(20% + 16.090rem)", top: "35.637rem" },
      { left: "calc(60% - 0.211rem)", top: "26.123rem" },
      { left: "calc(60% + 1.506rem)", top: "36.719rem" },
      { left: "calc(20% + 4.747rem)", top: "25.750rem" },
      { left: "calc(20% + 11.388rem)", top: "33.100rem" },
      { left: "calc(60% + 1.133rem)", top: "34.033rem" },
      { left: "calc(60% + 12.363rem)", top: "29.705rem" },
      { left: "calc(60% + 2.998rem)", top: "31.570rem" },
      { left: "calc(20% + 13.515rem)", top: "36.719rem" },
      { left: "calc(20% + 5.307rem)", top: "37.503rem" },
      { left: "calc(60% + 10.497rem)", top: "42.241rem" },
      { left: "calc(60% + 4.901rem)", top: "36.048rem" },
    ];

    return (
      <>
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute  bg-[rgba(255,255,255,0.5)] rounded-[3.731rem] h-[1.194px] w-[1.194px]  animate-pulse transition-all duration-300"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </>
    );
  };

  const RewardCard: React.FC<{
    title: string;
    progress?: number;
    maxProgress?: number;
    icon: "points" | "trophy";
  }> = ({ title, progress, maxProgress, icon }) => {
    return (
      <div
        className="backdrop-blur-[2.188rem] backdrop-filter basis-0 grow relative rounded-[1.402rem] shrink-0 2xl:aspect-square"
        style={{
          background: `linear-gradient(21deg, rgba(0, 0, 0, 0.40) -10.76%, rgba(${hexToRgb(
            primaryColor
          )}, 0.2) 127.18%)`,
        }}
      >
        <div className="flex flex-row items-center overflow-clip relative 2xl:w-full 2xl:h-full">
          <div className="box-border content-stretch flex flex-row gap-[0.569rem] items-center justify-start p-4 relative w-full h-full">
            <div
              className="[background-size:auto,_cover] basis-0 bg-[position:0%_0%,_50%_50%] grow relative rounded-[0.876rem] shrink-0 flex flex-col items-center justify-center gap-3 h-full max-2xl:p-3"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 97.457%), url('https://plus.unsplash.com/premium_photo-1673795753337-2f32418f12fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              {/* Title */}
              <div className="[text-shadow:rgba(0,0,0,0.46)_0px_6.762px_16.427px] flex flex-col font-rubik font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-xl text-center text-nowrap tracking-[0.0057px]">
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                  {title}
                </p>
              </div>

              {/* Icon and Value */}
              {icon === "points" && progress && maxProgress && (
                <div className="flex flex-col items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-11 h-11 !px-0 py-0 relative rounded-xl -mb-1.5 cursor-default"
                    style={{
                      boxShadow: "0px 0px 23.386px 0px rgba(0, 0, 0, 0.50)",
                      background: `linear-gradient(151.477deg, rgba(${hexToRgb(
                        primaryColor
                      )}, 0.3), rgb(0, 0, 0))`,
                    }}
                  >
                    <div
                      className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(151.477deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                          primaryColor
                        )}, 0.5) 188.68%)`,
                        zIndex: 1,
                      }}
                    >
                      <CustomCoinIcon
                        color={primaryColor}
                        className="!h-12 !w-12"
                      />
                    </div>
                  </Button>
                  <Badge
                    variant="secondary"
                    className="h-12 px-4 flex items-center -ml-1.5 rounded-2xl min-w-36 font-rubik"
                    style={{
                      background: `linear-gradient(170.484deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                        primaryColor
                      )}, 0.5) 188.68%)`,
                      border: `1px solid rgba(${hexToRgb(primaryColor)}, 0.3)`,
                      boxShadow: "0px 0px 23.3864px 0px rgba(0,0,0,0.5)",
                    }}
                  >
                    <div className="text-white font-medium text-xl tracking-[0.0125rem]">
                      {progress}/{maxProgress}
                    </div>
                  </Badge>
                </div>
              )}

              {icon === "trophy" && (
                <div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="2xl:w-[9.250rem] 2xl:h-[9.250rem] w-20 h-20 !px-0 py-0 relative rounded-3xl -mb-1.5 cursor-default"
                    style={{
                      boxShadow: "0px 0px 23.386px 0px rgba(0, 0, 0, 0.50)",
                      background: `linear-gradient(151.477deg, rgba(${hexToRgb(
                        primaryColor
                      )}, 0.3), rgb(0, 0, 0))`,
                    }}
                  >
                    <div
                      className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-3xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(151.477deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                          primaryColor
                        )}, 0.5) 188.68%)`,
                        zIndex: 1,
                      }}
                    >
                      <CustomMedalIcon
                        color={primaryColor}
                        className="2xl:!w-28 2xl:!h-28 !w-16 !h-16"
                      />
                    </div>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="absolute border inset-0 pointer-events-none rounded-[1.402rem]"
          style={{
            borderColor: `rgba(${hexToRgb(primaryColor)}, 0.2)`,
            boxShadow: `0px 3.58px 19.689px 0px rgba(${hexToRgb(
              primaryColor
            )}, 0.2)`,
          }}
        />
      </div>
    );
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black/90"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    >
      {/* Large glowing gradient backgrounds */}
      <div
        className="absolute h-[44.875rem] top-[-4.188rem] translate-x-[-50%] w-[40.75rem]"
        style={{ left: "calc(50% - 26px)" }}
      >
        <div className="absolute bottom-[-13.928%] left-[-15.337%] right-[-15.337%] top-[-13.928%]">
          <svg
            className="block h-full w-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 852 918"
          >
            <g filter={`url(#filter0_f_${primaryColor.replace("#", "")})`}>
              <path
                d={svgQuestComplete.p17d92c00}
                fill={`url(#paint0_linear_${primaryColor.replace("#", "")})`}
                fillOpacity="0.3"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="918"
                id={`filter0_f_${primaryColor.replace("#", "")}`}
                width="852"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur"
                  stdDeviation="50"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id={`paint0_linear_${primaryColor.replace("#", "")}`}
                x1="413.5"
                x2="413.5"
                y1="100"
                y2="919.949"
              >
                <stop stopColor={primaryColor} />
                <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Additional glowing backgrounds with rotations */}
      <div
        className="absolute flex h-[55.223rem] items-center justify-center top-[-11.938rem] translate-x-[-50%] w-[52.564rem]"
        style={{ left: "calc(70% - 124.488px)" }}
      >
        <div className="flex-none rotate-[17.888deg]">
          <div className="h-[44.875rem] relative w-[40.75rem]">
            <div className="absolute bottom-[-13.928%] left-[-15.337%] right-[-15.337%] top-[-13.928%]">
              <svg
                className="block h-full w-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 852 918"
              >
                <g filter={`url(#filter1_f_${primaryColor.replace("#", "")})`}>
                  <path
                    d={svgQuestComplete.p17d92c00}
                    fill={`url(#paint1_linear_${primaryColor.replace(
                      "#",
                      ""
                    )})`}
                    fillOpacity="0.15"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="918"
                    id={`filter1_f_${primaryColor.replace("#", "")}`}
                    width="852"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur"
                      stdDeviation="50"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id={`paint1_linear_${primaryColor.replace("#", "")}`}
                    x1="413.5"
                    x2="413.5"
                    y1="100"
                    y2="919.949"
                  >
                    <stop stopColor={primaryColor} />
                    <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute flex h-[55.223rem] items-center justify-center top-[-11.688rem] translate-x-[-50%] w-[52.564rem]"
        style={{ left: "calc(30% + 7.282rem)" }}
      >
        <div className="flex-none rotate-[162.112deg] scale-y-[-100%]">
          <div className="h-[44.875rem] relative w-[40.75rem]">
            <div className="absolute bottom-[-13.928%] left-[-15.337%] right-[-15.337%] top-[-13.928%]">
              <svg
                className="block h-full w-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 852 918"
              >
                <g filter={`url(#filter2_f_${primaryColor.replace("#", "")})`}>
                  <path
                    d={svgQuestComplete.p17d92c00}
                    fill={`url(#paint2_linear_${primaryColor.replace(
                      "#",
                      ""
                    )})`}
                    fillOpacity="0.15"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="918"
                    id={`filter2_f_${primaryColor.replace("#", "")}`}
                    width="852"
                    x="0"
                    y="0"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    />
                    <feGaussianBlur
                      result="effect1_foregroundBlur"
                      stdDeviation="50"
                    />
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id={`paint2_linear_${primaryColor.replace("#", "")}`}
                    x1="413.5"
                    x2="413.5"
                    y1="100"
                    y2="919.949"
                  >
                    <stop stopColor={primaryColor} />
                    <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

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

        {/* Quest Complete Container */}
        <div className="h-full flex-grow-1 flex flex-col justify-center items-center mt-10 2xl:gap-8 gap-6">
          {/* Quest Complete Title */}
          <div
            className="max-2xl:hidden flex flex-col justify-center leading-[normal] font-medium text-4xl text-center text-nowrap top-[9.75rem] tracking-[0.08px] uppercase whitespace-pre"
            style={{
              color: primaryColor,
            }}
          >
            <p className="adjustLetterSpacing block mb-0">Quest</p>
            <p className="adjustLetterSpacing block">Complete</p>
          </div>
          <div
            className="2xl:hidden flex flex-col justify-center leading-[normal] font-medium text-4xl text-center text-nowrap top-[9.75rem] tracking-[0.08px] uppercase whitespace-pre"
            style={{
              color: primaryColor,
            }}
          >
            <p className="adjustLetterSpacing block mb-0">Quest Complete</p>
          </div>

          {/* Main Quest Complete Card */}
          <div className=" backdrop-blur-[12.5rem] backdrop-filter rounded-[1.71rem] w-[42.75rem] bg-black/20 relative">
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center overflow-clip p-5 relative w-[42.75rem]">
              <div className="flex flex-col items-center relative 2xl:h-full w-full">
                <div className="box-border content-stretch flex flex-col 2xl:gap-[1.924rem] gap-6 items-center justify-start p-3 relative w-full">
                  {/* Success Message */}
                  <div className="flex flex-col font-rubik font-normal justify-end leading-[normal] relative shrink-0 text-[#ffffff] text-xl text-center tracking-[-0.0805px]">
                    <p className="adjustLetterSpacing block whitespace-pre-wrap">
                      Create Instincts! You Stayed - Empathy and instinct
                      leveled up!
                    </p>
                  </div>

                  {/* Rewards Section Header */}
                  <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                      <div className="absolute bottom-0 left-0 right-0 top-[-0.895px]">
                        <svg
                          className="block h-full w-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 237 1"
                        >
                          <line
                            stroke={`url(#paint0_linear_rewards_${primaryColor.replace(
                              "#",
                              ""
                            )})`}
                            strokeWidth="0.894962"
                            x2="236.341"
                            y1="0.552519"
                            y2="0.552519"
                          />
                          <defs>
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              id={`paint0_linear_rewards_${primaryColor.replace(
                                "#",
                                ""
                              )}`}
                              x1="236.341"
                              x2="0"
                              y1="0.999899"
                              y2="0.999903"
                            >
                              <stop stopColor={primaryColor} />
                              <stop
                                offset="0.484375"
                                stopColor={primaryColor}
                                stopOpacity="0.994792"
                              />
                              <stop
                                offset="1"
                                stopColor={primaryColor}
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-xl text-center text-nowrap tracking-[0.08px] uppercase"
                      style={{ color: primaryColor }}
                    >
                      <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                        Rewards
                      </p>
                    </div>
                    <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
                      <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
                        <div className="h-0 relative w-full">
                          <div className="absolute bottom-0 left-0 right-0 top-[-0.895px]">
                            <svg
                              className="block h-full w-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 237 1"
                            >
                              <line
                                stroke={`url(#paint1_linear_rewards_${primaryColor.replace(
                                  "#",
                                  ""
                                )})`}
                                strokeWidth="0.894962"
                                x2="236.341"
                                y1="0.552519"
                                y2="0.552519"
                              />
                              <defs>
                                <linearGradient
                                  gradientUnits="userSpaceOnUse"
                                  id={`paint1_linear_rewards_${primaryColor.replace(
                                    "#",
                                    ""
                                  )}`}
                                  x1="236.341"
                                  x2="0"
                                  y1="0.999899"
                                  y2="0.999903"
                                >
                                  <stop stopColor={primaryColor} />
                                  <stop
                                    offset="0.484375"
                                    stopColor={primaryColor}
                                    stopOpacity="0.994792"
                                  />
                                  <stop
                                    offset="1"
                                    stopColor={primaryColor}
                                    stopOpacity="0"
                                  />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rewards Cards */}
                  <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start px-3 relative shrink-0 w-full">
                    <RewardCard
                      title="Points"
                      progress={100}
                      maxProgress={300}
                      icon="points"
                    />

                    <RewardCard title="Empathy Pro" icon="trophy" />
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
                </div>
              </div>
            </div>

            {/* Glowing border effects */}
            <div className="absolute contents -top-1 left-1/2 translate-x-[-50%]">
              <div className="absolute flex h-2 items-center justify-center w-[27.5rem] -top-1 left-1/2 translate-x-[-50%]">
                <div className="flex-none scale-y-[-100%]">
                  <div
                    className="blur-xs filter h-2 w-[27.5rem]"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 440 7" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(22 0 0 0.35 220 3.5)"><stop stop-color="rgba(${hexToRgb(
                        primaryColor
                      )},1)" offset="0"/><stop stop-color="rgba(${hexToRgb(
                        primaryColor
                      )},0)" offset="1"/></radialGradient></defs></svg>')`,
                    }}
                  />
                </div>
              </div>
              <div className="absolute flex h-0.5 items-center justify-center w-[27.5rem] -top-1 left-1/2 translate-x-[-50%]">
                <div className="flex-none scale-y-[-100%]">
                  <div
                    className="blur-xs filter h-0.5 w-[27.5rem]"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 440 2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><rect x="0" y="0" height="100%" width="100%" fill="url(%23grad)" opacity="1"/><defs><radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="10" gradientTransform="matrix(22 0 0 0.1 220 1)"><stop stop-color="rgba(${hexToRgb(
                        primaryColor
                      )},1)" offset="0"/><stop stop-color="rgba(${hexToRgb(
                        primaryColor
                      )},0)" offset="1"/></radialGradient></defs></svg>')`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Inner Shadow Border */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[2.375rem]"
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

      {/* Floating particles */}
      <div
        className="absolute contents top-[4.697rem]"
        style={{ left: "calc(20% + 7.75rem)" }}
      >
        <FloatingParticles1 />
      </div>
      <div
        className="absolute contents top-[4.745rem]"
        style={{ left: "calc(20% + 4.438rem)" }}
      >
        <FloatingParticles2 />
      </div>
      <div
        className="absolute contents top-[25.75rem]"
        style={{ left: "calc(20% + 4.188rem)" }}
      >
        <FloatingParticles3 />
      </div>
    </div>
  );
};

// Helper Components (same as Feedback.tsx)
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
          <CustomRankingIcon color={primaryColor} className="!h-10 !w-10" />
        ) : icon === "settings" ? (
          <CustomSettingsIcon
            color={primaryColor}
            className="!h-10 !w-10 -mb-1"
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
              <CustomCoinIcon color={primaryColor} className="!h-12 !w-12" />
            ) : icon === "progress" ? (
              <span
                className="text-white font-medium text-[0.813rem] font-rubik tracking-[-0.007rem] text-shadow-[0px_2.867px_8.6px_rgba(0,_255,_187,_0.30)]"
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

export default QuestComplete;
