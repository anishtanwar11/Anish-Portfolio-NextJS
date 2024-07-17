"use client";
import { useEffect, useState } from "react";

export default function LeetCodeCard() {
  const [stats, setStats] = useState({
    totalSolved: 0,
    ranking: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
  });

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/anishtanwar")
      .then((response) => response.json())
      .then((data) => {
        setStats({
          totalSolved: data.totalSolved,
          ranking: data.ranking,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
        });
      })
      .catch((error) => {
        console.error("Error fetching LeetCode stats:", error);
      });
  }, []);

  const { totalSolved, ranking, easySolved, mediumSolved, hardSolved } = stats;
  const totalSolvedProblems = easySolved + mediumSolved + hardSolved;

  const easyPercentage = (easySolved / totalSolvedProblems) * 100;
  const mediumPercentage = (mediumSolved / totalSolvedProblems) * 100;
  const hardPercentage = (hardSolved / totalSolvedProblems) * 100;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center rounded-lg">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mr-10">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `conic-gradient(
                               #14b8a6 0deg ${easyPercentage}deg,
                                #eab308 ${easyPercentage}deg ${
                easyPercentage + mediumPercentage
              }deg,
                                #E11D48 ${
                                  easyPercentage + mediumPercentage
                                }deg ${
                easyPercentage + mediumPercentage + hardPercentage
              }deg,
                                #14b8a6 ${
                                  easyPercentage +
                                  mediumPercentage +
                                  hardPercentage
                                }deg 360deg
                            )`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white dark:bg-black rounded-full flex flex-col items-center justify-center">
                <div className="text-gray-800 dark:text-white text-2xl">{totalSolved}</div>
                <div className="text-green-400 text-lg">Solved</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center justify-center border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]   rounded-[5px] h-8 w-24 md:w-28">
            <div className="bg-teal-500 w-[5px] h-8 absolute left-0 rounded-l-[5px]"></div>
            <div className="text-neutral-600 dark:text-neutral-300 ">Easy</div>
            <div className="text-gray-800 dark:text-white ml-2">{easySolved}</div>
          </div>
          <div className="relative flex items-center justify-center border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]  rounded-[5px] h-8 w-24 md:w-28">
            <div className=" bg-yellow-500 w-[5px] h-8 absolute left-0 top-0 rounded-l-[5px]"></div>
            <div className="text-neutral-600 dark:text-neutral-300 ">Med.</div>
            <div className="text-gray-800 dark:text-white ml-2">{mediumSolved}</div>
          </div>
          <div className="relative flex items-center justify-center border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]  rounded-[5px] h-8 w-24 md:w-28">
            <div className=" bg-red-500 w-[5px] h-8 absolute left-0 rounded-l-[5px]"></div>
            <div className="text-neutral-600 dark:text-neutral-300 ">Hard</div>
            <div className="text-gray-800 dark:text-white ml-2">{hardSolved}</div>
          </div>
          {/* <div className="flex items-center bg-gray-700 p-3 rounded-md">
                        <div className="text-green-400 border-l-4 border-green-400 pl-2">Ranking</div>
                        <div className="text-white ml-2">{ranking}</div>
                    </div> */}
        </div>
      </div>

  
    </div>
  );
}











