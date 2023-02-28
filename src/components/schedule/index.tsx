import { useEffect, useState } from "react";
import { useTeamStore } from "../../stores/selectedFilterStore";

import type { IGame } from "./types";

import { getSchedule } from "./api/Schedule";
import scheduleData from "./data/scheduleData";
import { determineTableHeaderRoundness } from "./utils/determineTableHeaderRoundness";

import { Filters } from "./components/Filters";

export const Schedule = () => {

  const team = useTeamStore((state) => state.team);

  const [schedule, setSchedule] = useState<IGame[]>([]);

  useEffect(() => {
    getSchedule().then(res => setSchedule(res.data));
  }, []);

  return(
    <section className="px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-10 mx-auto mt-16 pb-16 sm:pb-24 lg:-mb-12 lg:pb-0flex flex-col space-y-8">

      <h3 className="mt-16 text-3xl leading-[1.5] tracking-tighter text-slate-900 sm:text-[2.5rem] sm:leading-[3.5rem]">
        2022 Schedule
      </h3>

      <Filters />

      <table className="w-full block md:table text-sm text-left text-slate-600 shadow-md table-auto overflow-x-scroll">
        <thead className="text-slate-600 uppercase bg-gray-100">
            <tr>
              {scheduleData.tableHeaders.map((header, index) => (
                <th
                  key={header.id}
                  scope="col"
                  className={determineTableHeaderRoundness(index, scheduleData.tableHeaders)}
                >
                  {header.label}
                </th>
              ))}
            </tr>
        </thead>
        <tbody>
          {schedule.filter(game => game.team === team).map(game => (
            <tr
              key={game.gameId}
              className="bg-white border-b whitespace-nowrap "
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-slate-900 rounded-bl-lg"
              >
                <img
                  src={game.opponentLogo}
                  alt={`${game.opponent} ${game.opponentNickName}'s Logo`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">{game.opponent}</div>
                  <div className="font-normal text-gray-500">{game.opponentNickName}</div>
                </div>
              </th>
              <td className="px-6 py-4 text-slate-900">
                <div className="text-base font-semibold">{game.gameLocation}</div>
                <div className="font-normal text-gray-500">{game.gameAddress}</div>
              </td>
              <td className="px-6 py-4 text-slate-900">
                {game.gameDate}
              </td>
              <td className="px-6 py-4 text-slate-900">
                {game.gameTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
