import { delay } from "../utils/helpers";
import { ContactFormData } from "../types";

export const contactService = {
  submitInquiry: async (
    data: ContactFormData,
  ): Promise<{ success: boolean; referenceId: string }> => {
    await delay(1200);
    if (!data.name || !data.email || !data.message) {
      throw new Error("Missing required fields");
    }
    return {
      success: true,
      referenceId: `INQ-${Date.now().toString().slice(-6)}`,
    };
  },
};
