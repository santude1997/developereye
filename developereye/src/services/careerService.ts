import { delay } from "../utils/helpers";
import { CareerApplicationData } from "../types";

export const careerService = {
  submitApplication: async (
    data: CareerApplicationData,
  ): Promise<{ success: boolean; applicationId: string }> => {
    await delay(1200);
    if (!data.name || !data.email || !data.positionApplied) {
      throw new Error("Missing required fields");
    }
    return {
      success: true,
      applicationId: `APP-${Date.now().toString().slice(-6)}`,
    };
  },
};
