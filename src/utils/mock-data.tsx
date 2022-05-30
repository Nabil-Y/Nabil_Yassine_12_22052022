/**
 * Mock API data
 */
const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Barack",
      lastName: "Odama",
      age: 41,
    },
    score: 0.2,
    keyData: {
      calorieCount: 2030,
      proteinCount: 215,
      carbohydrateCount: 260,
      lipidCount: 60,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Peggy",
      lastName: "Carter",
      age: 38,
    },
    score: 0.4,
    keyData: {
      calorieCount: 2400,
      proteinCount: 120,
      carbohydrateCount: 180,
      lipidCount: 80,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 300,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 280,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 240,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-05",
        kilogram: 81,
        calories: 180,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 312,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 410,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 70,
        calories: 260,
      },
      {
        day: "2020-07-02",
        kilogram: 71,
        calories: 240,
      },
      {
        day: "2020-07-03",
        kilogram: 69,
        calories: 380,
      },
      {
        day: "2020-07-04",
        kilogram: 70,
        calories: 450,
      },
      {
        day: "2020-07-05",
        kilogram: 68,
        calories: 150,
      },
      {
        day: "2020-07-06",
        kilogram: 68,
        calories: 172,
      },
      {
        day: "2020-07-07",
        kilogram: 67,
        calories: 350,
      },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 31,
      },
      {
        day: 2,
        sessionLength: 25,
      },
      {
        day: 3,
        sessionLength: 41,
      },
      {
        day: 4,
        sessionLength: 48,
      },
      {
        day: 5,
        sessionLength: 20,
      },
      {
        day: 6,
        sessionLength: 20,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 40,
      },
      {
        day: 2,
        sessionLength: 50,
      },
      {
        day: 3,
        sessionLength: 60,
      },
      {
        day: 4,
        sessionLength: 20,
      },
      {
        day: 5,
        sessionLength: 35,
      },
      {
        day: 6,
        sessionLength: 48,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    },
    data: [
      {
        value: 90,
        kind: 1,
      },
      {
        value: 130,
        kind: 2,
      },
      {
        value: 150,
        kind: 3,
      },
      {
        value: 40,
        kind: 4,
      },
      {
        value: 180,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    },
    data: [
      {
        value: 240,
        kind: 1,
      },
      {
        value: 220,
        kind: 2,
      },
      {
        value: 90,
        kind: 3,
      },
      {
        value: 75,
        kind: 4,
      },
      {
        value: 250,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
];

export default {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};
