import { Minus, Undo } from "lucide-react";
import { useState } from "react";
import { roundToDecimals } from "~/utils/roundToDecimals";

export function Welcome() {
  const initialPatternPoints = 10;
  const iconSize = 48

  const [patternPoints, setPatternPoints] = useState<number[]>([initialPatternPoints]);
  const pointsToDisplay = patternPoints[patternPoints.length - 1]

  console.log({ patternPoints });
  

  const onClickDiscount = () => {
    setPatternPoints((prevPoints) => {
      const lastPointValue = prevPoints[prevPoints.length - 1];
      if (lastPointValue <= 0) return prevPoints;
      return [...prevPoints, roundToDecimals({number: lastPointValue -0.2})]
    })
  }

  const onClickRevert = () => {
    setPatternPoints((prevPoints) => {
        if (prevPoints.length <= 1) return prevPoints;
      
        return [prevPoints[0], ...prevPoints.slice(1, -1)];
      });
  }
  
  return (
    <main className="h-full background">
      <div className="z-10 h-full w-full flex flex-col items-center pt-16 pb-4 justify-between relative">
        <h1 className="text-white">TAEKWON-DO Patterns</h1>
        <h1 className="text-6xl text-white">{pointsToDisplay}</h1>
        <div className="flex items-center justify-between w-full p-8">
          <button className="rounded-[50%] bg-indigo-700 p-2" onClick={onClickRevert}><Undo size={iconSize} color="white"/></button>
          <button className="bg-red-700 rounded-[50%] p-2" onClick={onClickDiscount}><Minus size={iconSize} color="white"/></button>
        </div>
      </div>
    </main>
  );
}
