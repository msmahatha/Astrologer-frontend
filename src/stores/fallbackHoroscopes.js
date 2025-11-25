const today = new Date();
const prediction_date = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

export const fallbackHoroscopes = {
  aries: {
    status: true,
    sun_sign: "aries",
    prediction_date,
    prediction:
      "Today brings a strong burst of confidence. You may feel motivated to start something new or take charge of a situation. Conversations flow smoothly, and someone may appreciate your leadership."
  },

  taurus: {
    status: true,
    sun_sign: "taurus",
    prediction_date,
    prediction:
      "A calm and steady day. You may focus on comfort, stability, or financial decisions. A small but meaningful conversation with a loved one brings emotional clarity."
  },

  gemini: {
    status: true,
    sun_sign: "gemini",
    prediction_date,
    prediction:
      "Your mind stays active today. Messages, calls, or ideas keep coming. You’ll express yourself clearly, and someone may seek your advice or opinion."
  },

  cancer: {
    status: true,
    sun_sign: "cancer",
    prediction_date,
    prediction:
      "Your emotions stabilize today, making it easier to focus on what matters. A family-related matter may bring comfort. Good day for healing, reflection, and personal space."
  },

  leo: {
    status: true,
    sun_sign: "leo",
    prediction_date,
    prediction:
      "Your natural charm is high today. People notice your presence and energy. Good day to showcase your creativity or take a bold decision you’ve been delaying."
  },

  virgo: {
    status: true,
    sun_sign: "virgo",
    prediction_date,
    prediction:
      "Productivity increases today. You may find solutions to tasks that felt stuck earlier. Attention to detail pays off, especially in work or planning."
  },

  libra: {
    status: true,
    sun_sign: "libra",
    prediction_date,
    prediction:
      "Balance returns to your relationships. A peaceful conversation helps resolve something that was bothering you. Creativity and harmony guide your actions today."
  },

  scorpio: {
    status: true,
    sun_sign: "scorpio",
    prediction_date,
    prediction:
      "Your intuition is strong today. You may uncover something hidden or understand someone’s feelings easily. Good for deep thinking and quiet focus."
  },

  sagittarius: {
    status: true,
    sun_sign: "sagittarius",
    prediction_date,
    prediction:
      "Optimism leads your day. You may get an opportunity for travel, learning, or starting something exciting. Keep your energy open to new possibilities."
  },

  capricorn: {
    status: true,
    sun_sign: "capricorn",
    prediction_date,
    prediction:
      "Discipline helps you complete an important task today. You may receive appreciation for your consistency. Long-term planning works in your favor."
  },

  aquarius: {
    status: true,
    sun_sign: "aquarius",
    prediction_date,
    prediction:
      "Ideas flow freely today. You may think about innovation, future plans, or changes you want to make. A surprising insight may arrive by evening."
  },

  pisces: {
    status: true,
    sun_sign: "pisces",
    prediction_date,
    prediction:
      "Your emotional sensitivity is high today, but in a positive way. Music, art, or peaceful surroundings help you relax. A dream or intuition may give you guidance."
  }
};
