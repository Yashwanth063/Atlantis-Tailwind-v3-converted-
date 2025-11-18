"use client";

import React from "react";
import { Button } from "./ui/button";
import { useColor } from "./ColorContext";
import { Dialog, DialogContent } from "./ui/dialog";

// Helper function to convert hex to RGB        
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 255, 187"; // fallback to default green
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
};

interface ReplayDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onReplay: () => void;
  onNext: () => void;
}

export const ReplayDialog: React.FC<ReplayDialogProps> = ({
  isOpen,
  onOpenChange,
  onReplay,
  onNext,
}) => {
  const { primaryColor } = useColor();

  const handleReplay = () => {
    onReplay();
    onOpenChange(false);
  };

  const handleNextClick = () => {
    onNext();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[35.75rem] p-0 bg-transparent border-none shadow-none"
        showCloseButton={false}
      >
        <div className="backdrop-blur-[2.5rem] backdrop-filter relative rounded-3xl w-full p-6 overflow-hidden">
          <div className="basis-0 box-border content-stretch flex flex-col gap-8 grow h-full items-center justify-end  p-0 relative shrink-0">
            {/* Main Content */}
            <div className="flex flex-col gap-6 w-full">
              {/* Title Section */}
              <div
                className="text-3xl font-rubik flex items-center justify-center h-44 font-normal tracking-tight text-center"
                style={{
                  color: "#ffffff",
                  textShadow: `rgba(${hexToRgb(
                    primaryColor
                  )}, 0.5) 0px 0px 9px`,
                }}
              >
                <p className="mt-5">Would you like to replay ?</p>
              </div>
            </div>

            {/* Replay Button & Next Button */}
            <div className="flex items-center justify-center relative shrink-0 w-full z-10 gap-8">
              <Button
                onClick={handleReplay}
                variant="ghost"
                size="sm"
                className="max-w-32 w-full h-12 py-2 px-4 rounded-3xl transition-all duration-200 hover:scale-110 text-lg font-medium tracking-tight font-rubik text-white hover:text-white"
                style={{
                  background: `linear-gradient(100deg ,
                        rgba(${hexToRgb(
                          primaryColor
                        )}) -27.25%, rgba(0, 0, 0, 0.8) 127.803%)`,
                  border: `1px solid rgba(${hexToRgb(primaryColor)}, 0.5)`,
                  boxShadow: `0px 0px 21.786px 0px rgba(${hexToRgb(
                    primaryColor
                  )}, 0.4)`,
                }}
              >
                Replay   
              </Button>

              <Button
                onClick={handleNextClick}
                variant="ghost"
                size="sm"
                className="max-w-32 w-full h-12 py-2 px-4 rounded-3xl transition-all duration-200 hover:scale-110 text-lg font-medium tracking-tight font-rubik text-white hover:text-white"
                style={{
                  background: `linear-gradient(100deg ,
                        rgba(${hexToRgb(
                          primaryColor
                        )}) -27.25%, rgba(0, 0, 0, 0.8) 127.803%)`,
                  border: `1px solid rgba(${hexToRgb(primaryColor)}, 0.5)`,
                  boxShadow: `0px 0px 21.786px 0px rgba(${hexToRgb(
                    primaryColor
                  )}, 0.4)`,
                }}
              >
                Next
              </Button>
            </div>

            {/* Background Ellipse */}
            <div className="absolute h-[24.843rem] left-[21.611rem] mix-blend-lighten w-[27.362rem]">
              <div className="absolute bottom-[-102.084%] left-[-92.686%] right-[-92.686%] top-[-102.084%]">
                <svg
                  className="block h-full w-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1250 1210"
                >
                  <g
                    filter={`url(#filter0_f_replay_${primaryColor.replace(
                      "#",
                      ""
                    )})`}
                    id="Ellipse 7187"
                    opacity="0.2"
                    style={{ mixBlendMode: "lighten" }}
                  >
                    <ellipse
                      cx="624.898"
                      cy="604.747"
                      fill={primaryColor}
                      rx="218.898"
                      ry="198.747"
                    />
                  </g>
                  <defs>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="1209.05"
                      id={`filter0_f_replay_${primaryColor.replace("#", "")}`}
                      width="1249.35"
                      x="0.223328"
                      y="0.223328"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                      />
                      <feGaussianBlur
                        result="effect1_foregroundBlur_49_33"
                        stdDeviation="202.888"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="absolute bottom-[-200.084%] left-[-200.686%] top-[-100.084%] right-[-110.686%]">
                <svg
                  className="block h-full w-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1250 1210"
                >
                  <g
                    filter={`url(#filter0_f_replay_${primaryColor.replace(
                      "#",
                      ""
                    )})`}
                    id="Ellipse 7187"
                    opacity="0.1"
                    style={{ mixBlendMode: "lighten" }}
                  >
                    <ellipse
                      cx="624.898"
                      cy="604.747"
                      fill={primaryColor}
                      rx="218.898"
                      ry="198.747"
                    />
                  </g>
                  <defs>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="1209.05"
                      id={`filter0_f_replay_${primaryColor.replace("#", "")}`}
                      width="1249.35"
                      x="0.223328"
                      y="0.223328"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                      />
                      <feGaussianBlur
                        result="effect1_foregroundBlur_49_33"
                        stdDeviation="202.888"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Card Borders and Effects */}
          <div className="absolute inset-0 pointer-events-none shadow-[1.58049px_3.16098px_12.6439px_0px_inset_rgba(248,248,248,0.06)]" />
          <div
            className="absolute border-solid inset-0 pointer-events-none rounded-3xl"
            style={{
              border: `1.18537px solid ${primaryColor}33`,
              boxShadow: `0px 3.16098px 3.16098px 0px rgba(${hexToRgb(
                primaryColor
              )}, 0.12)`,
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
