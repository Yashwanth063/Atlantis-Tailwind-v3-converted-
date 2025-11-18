"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import svgPaths from "../imports/svg-zldmzd5udy";
import svgPaths2 from "../imports/svg-knollny4nu";
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

interface LoadingScreenProps {
  onNavigate?: (direction: "left" | "right") => void;
}

const LoadingGroup1: React.FC<{ delay: number; progress: number }> = ({
  delay,
  progress,
}) => {
  const { primaryColor } = useColor();

  // Total number of bars - much fewer for cleaner look
  const totalBars = 45;
  const barWidth = 4;
  const barSpacing = 8; // 4px gap between bars
  const barHeight = 20;
  const totalWidth = totalBars * barSpacing;

  // Calculate how many bars should be filled
  const filledBars = Math.floor((progress / 100) * totalBars);

  // Generate bars with gaps
  const bars = [];
  for (let i = 0; i < totalBars; i++) {
    const isFilled = i < filledBars;

    bars.push(
      <rect
        key={i}
        x={20 + i * barSpacing} // Start after the left pole
        y={5}
        width={barWidth}
        height={barHeight}
        fill={primaryColor}
        opacity={isFilled ? 1 : 0.2}
        style={{
          filter: isFilled ? `drop-shadow(0 0 2px ${primaryColor})` : "none",
        }}
      />
    );
  }

  // Progress marker position
  const markerX = 20 + (progress / 100) * (totalBars * barSpacing);

  return (
    <div
      className="absolute bottom-[82.93%] left-[38.285%] right-[35.7%] top-[16.093%] transition-opacity duration-500"
      style={{
        opacity: progress > 0 ? 1 : 0,
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <svg
          className="block w-full h-8"
          viewBox={`0 0 ${totalWidth + 40} 30`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Left pole */}
          <rect
            x={10}
            y={0}
            width={3}
            height={30}
            fill={primaryColor}
            opacity={0.9}
          />

          {/* Right pole */}
          <rect
            x={totalWidth + 27}
            y={0}
            width={3}
            height={30}
            fill={primaryColor}
            opacity={0.9}
          />

          {/* All bars */}
          {bars}

          {/* Top triangle marker */}
          {progress > 0 && progress < 100 && (
            <>
              <polygon
                points={`${markerX},0 ${markerX - 4},8 ${markerX + 4},8`}
                fill={primaryColor}
                opacity={0.9}
              />

              <polygon
                points={`${markerX},30 ${markerX - 4},22 ${markerX + 4},22`}
                fill={primaryColor}
                opacity={0.9}
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

const LoadingGroup2: React.FC<{ delay: number }> = ({ delay }) => {
  const { primaryColor } = useColor();

  return (
    <div
      className="absolute bottom-[92.466%] left-[37.216%] right-[46.933%] top-[4.795%] animate-pulse opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "2000ms",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
      }}
    >
      <div className="flex-none h-[0.717rem] rotate-[180deg] scale-y-[-100%] w-[13.736rem]">
        <svg
          className="block h-full w-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 220 12"
        >
          <g id="Group 5">
            <path d={svgPaths.p278cb700} fill={primaryColor} id="Vector" />
            <path d={svgPaths.pd21ba80} fill={primaryColor} id="Vector_2" /> 
            <path d={svgPaths.p26c28270} fill={primaryColor} id="Vector_3" /> 
            <path
              clipRule="evenodd"
              d={svgPaths.p12598d00}
              fill={primaryColor} 
              fillRule="evenodd"
              id="Vector_4"
            />
            <path d={svgPaths.p18b3700} fill={primaryColor} id="Vector_5" /> 
            <path
              clipRule="evenodd"
              d={svgPaths.p26c87470}
              fill={primaryColor}
              fillRule="evenodd"
              id="Vector_6"
            />
            <path d={svgPaths.p1431fff0} fill={primaryColor} id="Vector_7" /> 
            <path
              clipRule="evenodd"
              d={svgPaths.p2f5c5700}
              fill={primaryColor} 
              fillRule="evenodd"
              id="Vector_8"
            />
            <path d={svgPaths.p21ed0a00} fill={primaryColor} id="Vector_9" /> 
            <path
              clipRule="evenodd"
              d={svgPaths.p3f128100}
              fill={primaryColor} 
              fillRule="evenodd"
              id="Vector_10"
            />
            <path d={svgPaths.p16045500} fill={primaryColor} id="Vector_11" /> 
            <path
              clipRule="evenodd"
              d={svgPaths.p225acc00}
              fill={primaryColor} 
              fillRule="evenodd"
              id="Vector_12"
            />
            <path d={svgPaths.p3e1d0700} fill={primaryColor} id="Vector_13" /> 
            <path
              clipRule="evenodd"
              d={svgPaths.p1f42d980}
              fill={primaryColor} 
              fillRule="evenodd"
              id="Vector_14"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

const LoadingGroup3: React.FC<{ delay: number }> = ({ delay }) => {
  const { primaryColor } = useColor();

  return (
    <div
      className="absolute bottom-[92.466%] left-[48.932%] right-[35.355%] top-[4.795%] animate-pulse opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "2000ms",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
      }}
    >
      <svg
        className="block h-full w-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 218 12"
      >
        <g id="Group 8">
          <path d={svgPaths.p28b7200} fill={primaryColor} id="Vector" />
          <path d={svgPaths.p3ca7f500} fill={primaryColor} id="Vector_2" /> 
          <path d={svgPaths.p36492900} fill={primaryColor} id="Vector_3" /> 
          <path
            clipRule="evenodd"
            d={svgPaths.pe001100}
            fill={primaryColor} 
            fillRule="evenodd"
            id="Vector_4"
          />
          <path d={svgPaths.p29deb4c0} fill={primaryColor} id="Vector_5" /> 
          <path
            clipRule="evenodd"
            d={svgPaths.p1d6bbc00}
            fill={primaryColor} 
            fillRule="evenodd"
            id="Vector_6"
          />
          <path d={svgPaths.p201bc900} fill={primaryColor} id="Vector_7" /> 
          <path
            clipRule="evenodd"
            d={svgPaths.p21e00400}
            fill={primaryColor} 
            fillRule="evenodd"
            id="Vector_8"
          />
          <path d={svgPaths.p3e47600} fill={primaryColor} id="Vector_9" /> 
          <path
            clipRule="evenodd"
            d={svgPaths.p397df280}
            fill={primaryColor} 
            fillRule="evenodd"
            id="Vector_10"
          />
          <path d={svgPaths.p2eadec00} fill={primaryColor} id="Vector_11" /> 
          <path
            clipRule="evenodd"
            d={svgPaths.pab94580}
            fill={primaryColor} 
            fillRule="evenodd"
            id="Vector_12"
          />
          <path d={svgPaths.p2bd0a300} fill={primaryColor} id="Vector_13" /> 
          <path
            clipRule="evenodd"
            d={svgPaths.p4bfd40}
            fill={primaryColor} 
            fillRule="evenodd"
            id="Vector_14"
          />
        </g>
      </svg>
    </div>
  );
};

const LoadingGroup4: React.FC<{ delay: number }> = ({ delay }) => {
  const { primaryColor } = useColor();

  return (
    <div
      className="absolute bottom-[65.069%] left-[52.998%] right-[31.013%] top-[32.192%] animate-pulse opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "2000ms",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
      }}
    >
      <svg
        className="block h-full w-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 222 12"
      >
        <g id="Group 6">
          <path d={svgPaths.p37182400} fill={primaryColor} id="Vector" />
          <path d={svgPaths.p34c0dac0} fill={primaryColor} id="Vector_2" />
          <path d={svgPaths.p15313100} fill={primaryColor} id="Vector_3" />
          <path
            clipRule="evenodd"
            d={svgPaths.p229725f0}
            fill={primaryColor}
            fillRule="evenodd"
            id="Vector_4"
          />
          <path d={svgPaths.p3f158d00} fill={primaryColor} id="Vector_5" />
          <path
            clipRule="evenodd"
            d={svgPaths.p2b26b900}
            fill={primaryColor}
            fillRule="evenodd"
            id="Vector_6"
          />
          <path d={svgPaths.p23d6e480} fill={primaryColor} id="Vector_7" />
          <path
            clipRule="evenodd"
            d={svgPaths.p2187db00}
            fill={primaryColor}
            fillRule="evenodd"
            id="Vector_8"
          />
          <path d={svgPaths.p51a5b00} fill={primaryColor} id="Vector_9" />
          <path
            clipRule="evenodd"
            d={svgPaths.p116dab80}
            fill={primaryColor}
            fillRule="evenodd"
            id="Vector_10"
          />
          <path d={svgPaths.p33a4e300} fill={primaryColor} id="Vector_11" />
          <path
            clipRule="evenodd"
            d={svgPaths.p4784c00}
            fill={primaryColor}
            fillRule="evenodd"
            id="Vector_12"
          />
          <path d={svgPaths.p12411a60} fill={primaryColor} id="Vector_13" />
          <path
            clipRule="evenodd"
            d={svgPaths.p1eef5400}
            fill={primaryColor}
            fillRule="evenodd"
            id="Vector_14"
          />
        </g>
      </svg>
    </div>
  );
};

const LoadingGroup5: React.FC<{ delay: number }> = ({ delay }) => {
  const { primaryColor } = useColor();

  return (
    <div
      className="absolute bottom-[65.068%] left-[34.114%] right-[46.933%] top-[32.192%] animate-pulse opacity-0"
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: "2000ms",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
      }}
    >
      <div className="flex-none h-[0.717rem] rotate-[180deg] scale-y-[-100%] w-[16.423rem]">
        <svg
          className="block h-full w-ful"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 263 12"
        >
          <g id="Group 7">
            <path d={svgPaths.p3d1cf700} fill={primaryColor} id="Vector" />
            <path d={svgPaths.p26d50d00} fill={primaryColor} id="Vector_2" />
            <path d={svgPaths.p32930a00} fill={primaryColor} id="Vector_3" />
            <path
              clipRule="evenodd"
              d={svgPaths.p172bc300}
              fill={primaryColor}
              fillRule="evenodd"
              id="Vector_4"
            />
            <path d={svgPaths.pbd15400} fill={primaryColor} id="Vector_5" />
            <path
              clipRule="evenodd"
              d={svgPaths.p37d9b380}
              fill={primaryColor}
              fillRule="evenodd"
              id="Vector_6"
            />
            <path d={svgPaths.pf63a480} fill={primaryColor} id="Vector_7" />
            <path
              clipRule="evenodd"
              d={svgPaths.pbfb9100}
              fill={primaryColor}
              fillRule="evenodd"
              id="Vector_8"
            />
            <path d={svgPaths.p1d656d00} fill={primaryColor} id="Vector_9" />
            <path
              clipRule="evenodd"
              d={svgPaths.pc198900}
              fill={primaryColor}
              fillRule="evenodd"
              id="Vector_10"
            />
            <path d={svgPaths.p3d79de80} fill={primaryColor} id="Vector_11" />
            <path
              clipRule="evenodd"
              d={svgPaths.p26321980}
              fill={primaryColor}
              fillRule="evenodd"
              id="Vector_12"
            />
            <path d={svgPaths.p1d8c8580} fill={primaryColor} id="Vector_13" />
            <path
              clipRule="evenodd"
              d={svgPaths.p2a22e100}
              fill={primaryColor}
              fillRule="evenodd"
              id="Vector_14"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onNavigate }) => {
  const { primaryColor } = useColor();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Auto-navigate to character selection after loading completes
          setTimeout(() => {
            onNavigate?.("right");
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onNavigate]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black/90"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 relative h-full flex">

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
                      <label className="text-2xl font-rubik mb-2 text-white font-normal tracking-tight">
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

        {/* Main Loading Content */}
        <div className="h-fit mt-auto flex-grow flex flex-col justify-center items-center relative translate-y-[6.25rem]">
          {/* Background Union Shape */}
          <div className="absolute flex h-[26.128rem] items-center justify-center left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none">
            <div className="flex-none scale-y-[-100%] w-full">
              <div className="h-[26.128rem] relative w-full">
                <div className="absolute bottom-[-6.629%] left-[-1.734%] right-[-1.734%] top-[-4.8%]">
                  <svg
                    className="block h-full w-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 1426 467"
                  >
                    <g filter="url(#filter0_di_loading)" id="Union">
                      <mask fill="white" id="path-1-inside-1_loading">
                        <path d={svgPaths.p17e7b480} />
                      </mask>
                      <path d={svgPaths.p17e7b480} fill="#171717" />
                      <path
                        d={svgPaths.p1856c00}
                        fill="url(#paint0_linear_loading)"
                        mask="url(#path-1-inside-1_loading)"
                      />
                    </g>
                    <defs>
                      <filter
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="465.826"
                        id="filter0_di_loading"
                        width="1425.67"
                        x="0.111481"
                        y="0.933644"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="3.82216" />
                        <feGaussianBlur stdDeviation="11.9443" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.733333 0 0 0 0.3 0"
                        />
                        <feBlend
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="effect1_dropShadow_loading"
                        />
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_loading"
                          mode="normal"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="3.82216" />
                        <feGaussianBlur stdDeviation="7.35766" />
                        <feComposite
                          in2="hardAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                        />
                        <feBlend
                          in2="shape"
                          mode="normal"
                          result="effect2_innerShadow_loading"
                        />
                      </filter>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_loading"
                        x1="447.966"
                        x2="522.786"
                        y1="163.137"
                        y2="535.758"
                      >
                        <stop stopColor="#033326" />
                        <stop offset="1" stopColor={primaryColor} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Loading Content Container */}
          <div className="relative w-full max-w-6xl h-[25rem] z-10">
            {/* Animated Loading Groups */}
            <LoadingGroup1 delay={0} progress={loadingProgress} />
            {/* Progress Text */}
            <div className="absolute bottom-[18.25rem] left-1/2 -translate-x-[10%] z-20">
              <span
                className="text-sm font-medium font-rubik tracking-wider"
                style={{ color: primaryColor }}
              >
                {loadingProgress.toFixed(0)}%
              </span>
            </div>
            <LoadingGroup2 delay={200} />
            <LoadingGroup3 delay={400} />
            <LoadingGroup4 delay={600} />
            <LoadingGroup5 delay={800} />

            {/* Central Text */}
            <div
              className="absolute flex flex-col font-['Lato:Regular',_sans-serif] justify-center leading-[0] not-italic text-[#ffffff] text-[2rem] text-center text-nowrap top-1/2 left-1/2 translate-x-[-45%] tracking-[0.08px] z-20"
              style={{
                textShadow: `rgba(${hexToRgb(primaryColor)}, 0.6) 0px 0px 20px`,
                filter: `drop-shadow(0 0 10px rgba(${hexToRgb(
                  primaryColor
                )}, 0.3))`,
              }}
            >
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre animate-pulse">
                Your learning adventure awaits
              </p>
            </div>

            {/* Progress Indicator */}
            {/* <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden z-20">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${loadingProgress}%`,
                  backgroundColor: primaryColor,
                  boxShadow: `0 0 10px rgba(${hexToRgb(primaryColor)}, 0.6)`,
                }}
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced animations */}
      <style>{`
        @keyframes loadingPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes loadingGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(${hexToRgb(primaryColor)}, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(${hexToRgb(primaryColor)}, 0.8));
          }
        }

        .animate-pulse {
          animation: loadingPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

// Helper Components (Same as Note.tsx)
const TopNavButton: React.FC<{ icon: string; isDropdownTrigger?: boolean }> = ({
  icon,
  isDropdownTrigger = false,
}) => {
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

  const commonStyles = {
    borderRadius: "16px",
    boxShadow: "0px 0px 23.386px 0px rgba(0, 0, 0, 0.50)",
    background: `linear-gradient(151.477deg, rgba(${hexToRgb(
      primaryColor
    )}, 0.3), rgb(0, 0, 0))`,
  };

  const commonClasses =
    "w-12 h-12 relative rounded-2xl hover:scale-110 transition-transform duration-300 group cursor-pointer";

  const content = (
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
        <CustomSettingsIcon color={primaryColor} className="h-10 w-10 -mb-1" />
      ) : (
        <IconElement />
      )}
    </div>
  );

  if (isDropdownTrigger) {
    return (
      <div className={commonClasses} style={commonStyles}>
        {content}
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`${commonClasses} px-0 py-0`}
      style={commonStyles}
    >
      {content}
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
              <CustomCoinIcon color={primaryColor} className="h-12 w-12" />
            ) : icon === "progress" ? (
              <span
                className="text-white font-medium text-[0.813rem] font-rubik tracking-tight text-shadow-[0px_2.867px_8.6px_rgba(0,_255,_187,_0.30)]"
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
          <span className="text-white font-medium text-[0.813rem]">{label}</span>
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
        return svgPaths2.p1a822c00;
      case "home":
        return svgPaths2.p3bf15400;
      case "map":
        return svgPaths2.p285e4100;
      case "settings":
        return svgPaths2.p2037cc80;
      case "coin":
        return svgPaths2.p1444db00;
      default:
        return svgPaths2.p1444db00;
    }
  };

  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
      <path d={getIconPath()} fill={color} />
    </svg>
  );
};

export default LoadingScreen;
