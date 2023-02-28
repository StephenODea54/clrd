export const determineClassName = (isSelected: boolean) => {
  if (isSelected) {
    return "px-5 py-2 text-xs font-medium text-slate-900 transition-colors duration-200 sm:text-sm bg-gray-100";
  } else {
    return "px-5 py-2 text-xs font-medium text-slate-900 transition-colors duration-200 sm:text-sm hover:bg-gray-100";
  };
};
