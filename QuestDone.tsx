"use client";

import type React from "react";
import { useState } from "react";
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
import { Slider } from "./ui/slider";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface QuestDoneData {
  id: number;
  title: string;
  progress: number;
  maxProgress: number;
  backgroundImage: string;
  isCompleted: boolean;
}

const questsDoneData: QuestDoneData[] = [
  {
    id: 1,
    title: "Quest1",
    progress: 100,
    maxProgress: 300,
    backgroundImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&crop=center",
    isCompleted: false,
  },
];

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 255, 187"; // fallback to default green
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
};

const QuestDone: React.FC<{
  onNavigate?: (direction: "left" | "right") => void;
}> = ({ onNavigate }) => {
  const { primaryColor } = useColor();
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null);

  const QuestCard: React.FC<{ quest: QuestDoneData; index: number }> = ({
    quest,
  }) => {
    const isSelected = selectedQuest === quest.id;

    return (
      <div
        className="relative overflow-hidden rounded-[1.25rem] cursor-pointer transition-all duration-300 hover:scale-105 mix-blend-hard-light"
        style={{
          background: `rgba(${hexToRgb(primaryColor)}, 0.02)`,
          backgroundImage: `linear-gradient(to bottom, rgba(${hexToRgb(
            primaryColor
          )}, 0.08) 3%, rgba(${hexToRgb(primaryColor)}, 0) 100%)`,
          filter: isSelected
            ? `drop-shadow(0px 0px 20px ${primaryColor})`
            : "none",
        }}
        onClick={() => {
          setSelectedQuest(isSelected ? null : quest.id);
          onNavigate?.("right");
        }}
      >
        {/* Quest Card Content */}
        <div className="flex flex-row items-center overflow-hidden relative w-full h-full">
          <div className="box-border flex flex-row gap-2 items-center justify-start p-4 relative w-full h-full">
            {/* Inner Quest Frame */}
            <div
              className="flex-1 h-full min-h-[10.5rem] relative rounded-[0.75rem] overflow-hidden"
              style={{
                backgroundImage: `url('${quest.backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-[0.75rem]" />

              <div className="flex flex-col items-center relative w-full h-full z-10">
                <div className="box-border flex flex-col gap-0.5 items-center justify-start relative w-full h-full">
                  {/* Quest Title Section */}
                  <div
                    className="flex flex-row gap-1.5 mt-5 items-center justify-start text-center"
                    style={{
                      textShadow: `rgba(${hexToRgb(
                        primaryColor
                      )}, 0.46) 0px 9px 22px`,
                      filter: `drop-shadow(0px 1px 5px rgba(${hexToRgb(
                        primaryColor
                      )}, 0.25))`,
                      color: primaryColor,
                    }}
                  >
                    <p className="block leading-normal whitespace-pre text-3xl font-medium tracking-[0.005rem]">
                      {quest.title.replace(/(\d+)$/, "")}
                    </p>
                    <p className="text-3xl font-medium tracking-[-0.007rem]">
                      {quest.id}
                    </p>
                  </div>

                  {/* Progress Bar Section */}
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 !px-0 py-0 relative rounded-xl"
                      style={{
                        boxShadow: `0px 0px 23.386px 0px rgba(${hexToRgb(
                          primaryColor
                        )}, 0.50)`,
                        background: `linear-gradient(2.477deg, rgba(${hexToRgb(
                          primaryColor
                        )}, 0.8), rgb(0, 0, 0))`,
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
                      className="h-9 px-4 flex items-center -ml-1.5 rounded-[0.625rem] min-w-24 font-rubik"
                      style={{
                        background: `linear-gradient(170.484deg, rgb(0, 0, 0) 17.606%, rgba(${hexToRgb(
                          primaryColor
                        )}, 0.5) 188.68%)`,
                        border: `1px solid rgba(${hexToRgb(
                          primaryColor
                        )}, 0.5)`,
                        boxShadow: `0px 0px 23.3864px 0px rgba(${hexToRgb(
                          primaryColor
                        )}, 0.5)`,
                      }}
                    >
                      <div className="text-white font-medium text-sm">
                        {quest.progress}/
                        <span style={{ color: primaryColor }}>
                          {quest.maxProgress}
                        </span>
                      </div>
                    </Badge>
                  </div>

                  {/* Quest Status */}
                  <div
                    className="flex flex-row items-center justify-center text-center pt-2 mt-3 w-full"
                    style={{
                      borderTop: `1px solid ${primaryColor}`,
                    }}
                  >
                    <p
                      className="text-xl font-medium tracking-[-0.007rem] font-rubik"
                      style={{
                        color: primaryColor,
                        textShadow: `rgba(${hexToRgb(
                          primaryColor
                        )}, 0.5) 0px 0px 9px`,
                      }}
                    >
                      Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Border */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[1.25rem]"
          style={{
            border: `1px solid rgba(${hexToRgb(primaryColor)}, 0.1)`,
          }}
        />
      </div>
    );
  };

  const NavigationArrow: React.FC<{
    direction: "left" | "right";
    onClick: () => void;
  }> = ({ direction, onClick }) => {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        className="w-[3.125rem] h-[2.125rem] py-2 px-4 rounded-3xl transition-all duration-200 hover:scale-110"
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
          <ChevronLeft className="!h-4  !w-4 text-white" />
        ) : (
          <ChevronRight className="!h-4  !w-4 text-white" />
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

        {/* Quest Content */}
        <div className="h-full flex-grow-1 flex flex-col justify-center items-center pt-5">
          <div
            className="flex flex-col gap-5 max-h-fit max-w-[92vw] md2x:min-h-[34.5rem] md2x:max-w-[76rem] h-full w-full items-center justify-start rounded-3xl relative px-10 pt-5 pb-4"
            style={{
              background: `linear-gradient(21deg, rgba(0, 0, 0, 0.80) -10.76%, rgba(${hexToRgb(
                primaryColor
              )}, 0.1) 20%, rgba(10, 10, 10, 0.85) 197.18%)`,
            }}
          >
            {/* Quest Title */}
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
                Quest
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

            {/* Quest Cards Grid */}
            <div className="max-md2x:hidden flex-1 w-full">
              <div className="flex flex-col gap-5 w-full h-full">
                <div className="grid grid-cols-3 gap-5 w-full">
                  {questsDoneData.slice(0, 3).map((quest, index) => (
                    <div key={quest.id} className="flex-1">
                      <QuestCard quest={quest} index={index} />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-5 w-full">
                  {questsDoneData.slice(3, 6).map((quest, index) => (
                    <div key={quest.id} className="flex-1">
                      <QuestCard quest={quest} index={index + 3} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full px-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="md2x:hidden w-full"
              >
                <CarouselContent>
                  {questsDoneData.map((quest, index) => (
                    <CarouselItem key={quest.id} className="basis-1/3">
                      <QuestCard quest={quest} index={index} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="bg-background/80" />
                <CarouselPrevious className="bg-background/80" />
              </Carousel>
            </div>

            {/* Inset Shadow Border */}
            <div
              className="absolute inset-0 pointer-events-none rounded-3xl"
              style={{
                boxShadow: `0px 0px 11px 0px inset ${primaryColor}`,
              }}
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-16 left-12 right-12 flex justify-between items-center">
          <NavigationArrow
            direction="left"
            onClick={() => onNavigate?.("left")}
          />
          {/* <NavigationArrow
            direction="right"
            onClick={() => onNavigate?.("right")}
          /> */}
        </div>
      </div>
    </div>
  );
};

// Helper Components (Reused from CharacterSelection)
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
      className="w-12 h-12 !px-0 py-0 relative rounded-2xl hover:scale-110 transition transform duration-300 group"
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

export default QuestDone;
