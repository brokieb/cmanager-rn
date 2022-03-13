// INPUT TYPES
// > TEXT
// > NUMBER
// > PHONE
// > EMAIL
// > DATE
// > MONEY

// GROUP TYPES
// > TEXT
// > CHECKBOX
// > RADIO

const clientFormData = [
  {
    groupName: "contactDetails",
    groupTitle: "Dane kontaktowe",
    groupType: "text",
    groupInputs: [
      { title: "Imię", name: "name", type: "text" },
      { title: "Nazwisko", name: "surname", type: "text", required: true },
      { title: "Telefon", name: "phone", type: "text", required: true },
      { title: "Email", name: "email", type: "email" },
    ],
  },
  {
    groupTitle: "Czego szuka?",
    groupName: "whatLooking",
    groupType: "checkbox",
    groupInputs: [
      { title: "mieszkanie", name: "flat" },
      { title: "Dom", name: "house" },
      { title: "Lokal", name: "businessPremises" },
      { title: "Działka", name: "plot" },
    ],
  },
  {
    groupName: "details",
    groupTitle: "Szczegóły",
    groupType: "text",
    groupInputs: [
      { title: "Do jakiej kwoty", name: "maxMoney", type: "money" },
      { title: "Do kiedy", name: "maxDate", type: "date" },
    ],
  },
  {
    groupName: "range",
    groupTitle: "Zakresy",
    groupType: "text",
    groupInputs: [
      { title: "Piętro", name: "floor", type: "range" },
      { title: "Pokoi", name: "room", type: "range" },
      { title: "Metraż", name: "yardage", type: "range" },
    ],
  },
  {
    groupTitle: "Wymagania",
    groupName: "requirements",
    groupType: "checkbox",
    groupInputs: [
      { title: "Centrum", name: "cityCenter" },
      { title: "Obrzeża", name: "outskirtsCity" },
      { title: "Przystanek", name: "busStop" },
      { title: "Ośrodek zdrowia", name: "healthCenter" },
      { title: "Balkon", name: "balcony" },
      { title: "Garaż", name: "garage" },
      { title: "Parking dla niepełnosprawnych", name: "disabledParking" },
      { title: "Parking", name: "parking" },
      { title: "Przedszkole", name: "kindergarten" },
      { title: "Szkoła", name: "school" },
      { title: "Umeblowane", name: "furnished" },
    ],
  },
];

export default clientFormData;
