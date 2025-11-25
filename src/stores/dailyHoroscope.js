import axios from "axios";
import { fallbackHoroscopes } from "./fallbackHoroscopes";

const USER_ID = "647635";
const API_KEY = "e58501b93ef9b2e6191a429fa0abc124c3551b18";

export const getDailyHoroscope = async (zodiac) => {
  try {
    const response = await axios.post(
      `https://json.astrologyapi.com/v1/horoscope_prediction/daily/${zodiac}`,
      { timezone: 5.5 },
      {
        auth: {
          username: USER_ID,
          password: API_KEY
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("API FAILED — Showing fallback for:", zodiac);
    return fallbackHoroscopes[zodiac];
  }
};
