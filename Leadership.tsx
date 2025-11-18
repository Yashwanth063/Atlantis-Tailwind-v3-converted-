"use client";
import type React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
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
import { ReplayDialog } from "./ReplayDialog";

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "0, 255, 187"; // fallback to default green
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
};

const Leadership: React.FC<{
  onNavigate?: (direction: "left" | "right") => void;
}> = ({ onNavigate }) => {
  const { primaryColor } = useColor();
  const [selectedTab, setSelectedTab] = useState<"department" | "overall">(
    "department"
  );
  const [isReplayDialogOpen, setIsReplayDialogOpen] = useState(false);

  const handleRightNavigation = () => {
    onNavigate?.("right");
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
          <ChevronRight className="h-4 w-4 text-white" />
        )}
      </Button>
    );
  };

  // Sample leaderboard data
  const leaderboardData = [
    {
      name: "A",
      dailyPosition: 5,
      dailyScore: 300,
      actionPosition: 5,
      actionScore: 300,
      isUser: false,
    },
    {
      name: "Amanda",
      dailyPosition: 6,
      dailyScore: 800,
      actionPosition: 6,
      actionScore: 800,
      isUser: false,
    },
    {
      name: "Andrew",
      dailyPosition: 2,
      dailyScore: 560,
      actionPosition: 2,
      actionScore: 560,
      isUser: false,
    },
    {
      name: "Ashley",
      dailyPosition: 8,
      dailyScore: 300,
      actionPosition: 8,
      actionScore: 300,
      isUser: true,
    },
    {
      name: "Jane",
      dailyPosition: 8,
      dailyScore: 800,
      actionPosition: 8,
      actionScore: 800,
      isUser: false,
    },
    {
      name: "Josh",
      dailyPosition: 4,
      dailyScore: 800,
      actionPosition: 4,
      actionScore: 800,
      isUser: false,
    },
    {
      name: "John",
      dailyPosition: 1,
      dailyScore: 300,
      actionPosition: 1,
      actionScore: 300,
      isUser: false,
    },
    {
      name: "Joshua",
      dailyPosition: 1,
      dailyScore: 800,
      actionPosition: 1,
      actionScore: 800,
      isUser: false,
    },
  ];

  return (
    <div
      className="relative w-full h-screen overflow-hidden  bg-center bg-cover bg-black/90"
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
                className="sm:max-w-2xl rounded-2xl px-7 py-6 border-none shadow-lg"
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
                      <label className="text-2xl font-rubik mb-2 text-white font-normal tracking-normal">
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
                      className="w-[5.75rem] text-lg h-11 py-2 px-4 rounded-4xl transition-all duration-200 hover:scale-110 text-white hover:text-white mx-auto"
                      style={{
                        background: `linear-gradient(275.041deg
                              ,
                                rgba(${hexToRgb(
                                  primaryColor
                                )}, 0.7) 7.25%, rgba(3, 51, 38, 0.8) 84.803%)`,
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

        {/* Leadership Content */}
        <div className="h-full flex-grow  flex flex-col items-center justify-center pt-[7.25rem]">
          <div
            className="flex flex-col gap-5 max-h-fit max-w-7xl overflow-hidden h-full w-full items-center justify-start rounded-[2.375rem] relative px-10 md2x:pt-8 md2x:pb-8 pt-6 pb-6 backdrop-blur-3xl"
            style={{
              background: `linear-gradient(21deg, rgba(${hexToRgb(
                primaryColor
              )}, 0.05) -10.76%, rgba(${hexToRgb(primaryColor)}, 0.1) 127.18%)`,
            }}
          >
            {/* Leaderboard Title */}
            <div className="relative">
              <h1
                className="text-4xl font-normal tracking-normal text-center"
                style={{
                  color: primaryColor,      
                  textShadow: `rgba(${hexToRgb(
                    primaryColor
                  )}, 0.5) 0px 0px 9px`,
                }}
              >
                Leaderboard
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

            {/* Tabs using ShadCN */}
            <div className="w-full max-md2x:overflow-y-auto">
              <Tabs
                value={selectedTab}
                onValueChange={(value) =>
                  setSelectedTab(value as "department" | "overall")
                }
                className="w-full"
              >
                <TabsList
                  className="grid w-full grid-cols-2 bg-transparent p-0 gap-3 max-md2x:position-sticky max-md2x:top-0 max-md2x:z-10"
                  style={{
                    background: "transparent",
                  }}
                >
                  <TabsTrigger
                    value="department"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none border transition-all duration-200 hover:scale-[1.01] font-rubik font-medium text-xl tracking-[-0.048px] py-3.5 px-3 rounded-sm"
                    style={{
                      borderWidth: "0.548px",
                      borderColor:
                        selectedTab === "department"
                          ? `
                        rgba(${hexToRgb(primaryColor)}, 0.5)
                        `
                          : "#000000",
                      color:
                        selectedTab === "department"
                          ? primaryColor
                          : "rgba(255,255,255,0.5)",
                      boxShadow: "0px 0px 12.485px 0px rgba(0,0,0,0.5)",
                      opacity: selectedTab === "department" ? 1 : 0.8,
                      background: `linear-gradient(21deg, rgba(${hexToRgb(
                        primaryColor
                      )}, 0.02) -10.76%, rgba(${hexToRgb(
                        primaryColor
                      )}, 0.1) 127.18%)`,
                    }}
                  >
                    Department
                  </TabsTrigger>
                  <TabsTrigger
                    value="overall"
                    className="data-[state=active]:bg-transparent data-[state=active]:shadow-none border transition-all duration-200 hover:scale-[1.01] font-rubik font-medium text-xl tracking-[-0.048px] py-3.5 px-3 rounded-sm"
                    style={{
                      borderWidth: "0.548px",
                      borderColor:
                        selectedTab === "overall"
                          ? `
                        rgba(${hexToRgb(primaryColor)}, 0.5)
                        `
                          : "#000000",
                      color:
                        selectedTab === "overall"
                          ? primaryColor
                          : "rgba(255,255,255,0.5)",
                      boxShadow: "0px 0px 12.485px 0px rgba(0,0,0,0.5)",
                      opacity: selectedTab === "overall" ? 1 : 0.8,
                      background: `linear-gradient(21deg, rgba(${hexToRgb(
                        primaryColor
                      )}, 0.02) -10.76%, rgba(${hexToRgb(
                        primaryColor
                      )}, 0.1) 127.18%)`,
                    }}
                  >
                    Overall
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="department" className="mt-4">
                  {/* Leaderboard Table using shadcn */}
                  <div className="md2x:max-h-[calc(100svh-28.5rem)] overflow-auto relative rounded-[0.564rem] shrink-0 w-full">
                    <div
                      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-2 rounded-md w-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(0, 0, 0, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%)",
                        backgroundSize: "auto, cover",
                        backgroundPosition: "0% 0%, 50% 50%",
                      }}
                    >
                      <Table className="w-full table-fixed">
                        <TableHeader>
                          <TableRow className="border-b-0 hover:bg-transparent">
                            <TableHead className="text-[#7f7d83] font-poppins font-semibold text-sm text-center bg-[rgba(0,0,0,0.5)] border-r border-[#3d3d3d] h-[1.879rem] w-[10.38rem]">
                              Player Name
                            </TableHead>
                            <TableHead
                              className="text-[#7f7d83] font-poppins font-semibold text-sm text-center bg-[rgba(0,0,0,0.5)] border-r border-[#3d3d3d] h-[1.879rem] px-4"
                              colSpan={2}
                            >
                              Daily
                            </TableHead>
                            <TableHead
                              className="text-[#7f7d83] font-poppins font-semibold text-sm text-center bg-[rgba(0,0,0,0.5)] h-[1.879rem] px-4"
                              colSpan={2}
                            >
                              Actions
                            </TableHead>
                          </TableRow>
                          <TableRow className="border-b-0 hover:bg-transparent">
                            <TableHead className="bg-[rgba(0,0,0,0.5)] border-r border-[#3d3d3d] h-[1.879rem] w-[10.38rem]"></TableHead>
                            <TableHead className="text-[#7f7d83] font-poppins font-semibold text-sm text-center bg-[rgba(0,0,0,0.5)] border-r border-[#3d3d3d] h-[1.879rem] w-24">
                              Position
                            </TableHead>
                            <TableHead className="text-[#7f7d83] font-poppins font-semibold text-sm text-center bg-[rgba(0,0,0,0.5)] border-r border-[#3d3d3d] h-[1.879rem] w-24">
                              Score
                            </TableHead>
                            <TableHead className="text-[#7f7d83] font-poppins font-semibold text-sm text-center bg-[rgba(0,0,0,0.5)] border-r border-[#3d3d3d] h-[1.879rem] w-24">
                              Position
                            </TableHead>
                            <TableHead className="text-[#7f7d83] font-poppins font-semibold text-sm text-center bg-[rgba(0,0,0,0.5)] h-[1.879rem] w-24">
                              Score
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {leaderboardData.map((player, index) => (
                            <TableRow
                              key={index}
                              className="border-b h-[3.188rem]"
                              style={{
                                borderBottomColor: player.isUser
                                  ? primaryColor
                                  : "#3d3d3d",
                                borderBottomWidth: "0.751px",
                                backgroundColor: player.isUser
                                  ? `rgba(${hexToRgb(primaryColor)},0.15)`
                                  : "",
                              }}
                            >
                              <TableCell
                                className="font-rubik font-semibold text-base tracking-[-0.0376px] pl-[1.691rem] border-r border-[#3d3d3d] w-[10.38rem]"
                                style={{
                                  color: player.isUser
                                    ? primaryColor
                                    : "#ffffff",
                                  borderRightColor: player.isUser
                                    ? "#3d3d3d"
                                    : "#3d3d3d",
                                }}
                              >
                                {player.name}
                              </TableCell>
                              <TableCell
                                className="font-rubik font-semibold text-base tracking-[-0.0376px] text-center border-r border-[#3d3d3d] w-24"
                                style={{
                                  color: player.isUser
                                    ? primaryColor
                                    : "#ffffff",
                                  borderRightColor: player.isUser
                                    ? "#3d3d3d"
                                    : "#3d3d3d",
                                }}
                              >
                                {player.dailyPosition}
                              </TableCell>
                              <TableCell
                                className="font-rubik font-semibold text-base tracking-[-0.0376px] text-center border-r border-[#3d3d3d] w-24"
                                style={{
                                  color: player.isUser
                                    ? primaryColor
                                    : "#ffffff",
                                  borderRightColor: player.isUser
                                    ? "#3d3d3d"
                                    : "#3d3d3d",
                                }}
                              >
                                {player.dailyScore}
                              </TableCell>
                              <TableCell
                                className="font-rubik font-semibold text-base tracking-[-0.0376px] text-center border-r border-[#3d3d3d] w-24"
                                style={{
                                  color: player.isUser
                                    ? primaryColor
                                    : "#ffffff",
                                  borderRightColor: player.isUser
                                    ? "#3d3d3d"
                                    : "#3d3d3d",
                                }}
                              >
                                {player.actionPosition}
                              </TableCell>
                              <TableCell
                                className="font-rubik font-semibold text-base tracking-[-0.0376px] text-center w-24"
                                style={{
                                  color: player.isUser
                                    ? primaryColor
                                    : "#ffffff",
                                }}
                              >
                                {player.actionScore}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="overall" className="mt-4">
                  {/* Overall tab */}
                  <div className="h-[18.5rem] overflow-auto relative rounded-[0.564rem] shrink-0 w-full">
                    <div
                      className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-2 rounded-md w-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(0, 0, 0, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%)",
                        backgroundSize: "auto, cover",
                        backgroundPosition: "0% 0%, 50% 50%",
                      }}
                    >
                      <div className="flex items-center justify-center h-full w-full">
                        <p className="text-white text-lg font-rubik">
                          Overall leaderboard data would be displayed here
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-between items-center w-full">
              <NavigationArrow
                direction="left"
                onClick={() => onNavigate?.("left")}
              />
              <NavigationArrow
                direction="right"
                onClick={() => setIsReplayDialogOpen(true)}
                // onClick={() => onNavigate?.("right")}
              />
            </div>

            {/* Inset Shadow Border */}
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

      <ReplayDialog
        isOpen={isReplayDialogOpen}
        onOpenChange={setIsReplayDialogOpen}
        onReplay={() => {
          console.log("Replay clicked");
        }}
        onNext={() => {
          handleRightNavigation();
          setIsReplayDialogOpen(false);
        }}
      />
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
          <CustomRankingIcon color={primaryColor} className="!size-10" />
        ) : icon === "settings" ? (
          <CustomSettingsIcon color={primaryColor} className="!size-10 -mb-1" />
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

export default Leadership;
