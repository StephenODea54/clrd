const paymentInfo = [
  "Cash",
  "Check",
  "Debit/Credit Card",
  <>
    CashApp (
      <a href="https://cash.app/$CLRD2021/">
        <span className="text-lime-600 no-underline hover:text-lime-300">
        $CLRD2021
        </span>
      </a>
    )
  </>,
  <>
    Venmo (
      <a href="https://venmo.com/CLRD2021">
        <span className="text-sky-600 no-underline hover:text-sky-300">
          @CLRD2021
        </span>
      </a>
    )
  </>,
];

const pricing = [
  {
    id: 1,
    pricingInfo: {
      team: "Cheerleading",
      price: 125,
      startingGrade: "1st",
      endingGrade: "6th",
    },
    equipment: [
      {
        id: 2,
        label: "Uniform",
      },
      {
        id: 3,
        label: "Shoes",
      },
      {
        id: 4,
        label: "Bows",
      },
      {
        id: 5,
        label: "Socks",
      },
      {
        id: 6,
        label: "Spanks",
      },
      {
        id: 7,
        label: "Midriff",
      },
    ],
  },
  {
    id: 8,
    pricingInfo: {
      team: "Football",
      price: 85,
      startingGrade: "1st",
      endingGrade: "6th",
    },
    equipment: [
      {
        id: 9,
        label: "Uniform",
      },
      {
        id: 10,
        label: "Helmet",
      },
      {
        id: 11,
        label: "Shoulder Pads",
      },
      {
        id: 12,
        label: "Integrated Pants",
      },
      {
        id: 13,
        label: "Socks",
      },
      {
        id: 14,
        label: "Mouth Piece",
      },
    ],
  },
];

const formElements = [
  {
    id: 1,
    name: "Registration Form",
    form: "/forms/registrationForm.pdf",
  },
  {
    id: 2,
    name: "Emergency Medical Release Form",
    form: "/forms/emergencyMedicalForm.pdf",
  },
  {
    id: 3,
    name: "Parental Contract",
    form: "/forms/parentalContract.pdf",
  },
  {
    id: 4,
    name: "Photo Release Form",
    form: "/forms/photoReleaseForm.pdf",
  },
];

const SocialIcons = [
  {
    id: 1,
    url: "https://www.facebook.com/CampbellLittleRedDevils/",
    network: "facebook",
  },
  {
    id: 2,
    url: "#",
    network: "instagram",
  },
  {
    id: 3,
    url: "#",
    network: "youtube",
  },
];

export default {
  paymentInfo,
  pricing,
  formElements,
  SocialIcons,
};
