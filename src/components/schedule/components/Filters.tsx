import { useState } from "react";
import { useTeamStore } from "../../../stores/selectedFilterStore";

import scheduleData from "../data/scheduleData";
import { determineClassName } from "../utils/determineClassName";

export const Filters = () => {

  const [data, setData] = useState(scheduleData.filters);
  const setTeam = useTeamStore((state) => state.setTeam);

  const handleClick = (filterId: number) => {
    const newFilters = [...data];
    
    const filtersToggled = newFilters.map(filter => {
      if (filter.id === filterId) {
        return { ...filter, isSelected: true}
      } else {
        return { ...filter, isSelected: false}
      };
    });

    setData(filtersToggled);

    const selectedFilter = filtersToggled.findIndex(filter => filter.isSelected);

    if (selectedFilter === 0) {
      setTeam("Varsity");
    } else if (selectedFilter === 1) {
      setTeam("Junior Varsity");
    } else {
      setTeam("Bantam");
    };
  };

  return(
    <div className="mt-6 md:flex md:items-center md:justify-between">
      <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg shadow-md">
        {data.map(filter => (
          <button
            onClick={() => handleClick(filter.id)}
            key={filter.id}
            className={determineClassName(filter.isSelected)}
          >
            {filter.label}
        </button>
        ))}
      </div>
    </div>
  );
};
