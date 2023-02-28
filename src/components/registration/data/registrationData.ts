const grades = Array.from({length: 6}, (_, i) => i + 1);

const states = [
  {
    id: 1,
    state: "OH",
  },
  {
    id: 2,
    state: "PA",
  },
];

const teams = [
  {
    id: 1,
    team: "Football",
  },
  {
    id: 2,
    team: "Cheerleading",
  },
];

const termsAndAgreements = [
  {
    id: 1,
    label: "The above information is correct, and my child is physically able to participate.",
  },
  {
    id: 2,
    label: "I will conduct myself in a positive manner whenever I am dealing with football players, cheerleaders,coaches, other parents, fans or board members at practices, games or any other CLRD event.",
  },
  {
    id: 3,
    label: "I understand the organization is ran by volunteers who give their time, skills, and knowledge to help our children become better football players and cheerleaders.",
  },
  {
    id: 4,
    label: "I understand the safety and well-being of our children is everyone's responsibility and the organization's first priority.",
  },
  {
    id: 5,
    label: "I understand all CLRD issued uniforms and equipment must be returned at the end of the season.",
  },
  {
    id: 6,
    label: "I understand the success of this organization depends on the support and participation of the parents/guardians in this league.",
  },
  {
    id: 7,
    label: "I understand that I may be asked to participate in fundraisers or volunteer at home games.",
  },
];

export default {
  grades,
  teams,
  states,
  termsAndAgreements
};
