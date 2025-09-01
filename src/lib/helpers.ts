import {daysMapping, monthMapping} from "@/lib/data";

export const currency = (amount: number, showSymbol: boolean = true) => {
    const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GH₵",
    }).format(amount);

    const value = formattedAmount.replace("GH₵", "GH₵");

    if (showSymbol) {
        return value;
    }
    return value.slice(3);
};


/**
 * Sanitizes and formats a phone number to Ghana format starting with 233
 * @param {string} phoneNumber - The input phone number
 * @returns {string|null} - Formatted phone number starting with 233 or null if invalid
 */
export const sanitizeGhanaPhoneNumber = (phoneNumber: string): string | null => {
    if (!phoneNumber) {
        return null;
    }
    let cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.startsWith('233')) {
        return cleaned;
    } else if (cleaned.startsWith('0')) {
        return '233' + cleaned.substring(1);
    } else if (cleaned.length === 9) {
        return '233' + cleaned;
    } else if (cleaned.startsWith('1') || cleaned.startsWith('2') ||
        cleaned.startsWith('5') || cleaned.startsWith('3')) {
        if (cleaned.length === 9) {
            return '233' + cleaned;
        }
    }
    return null;
}

export const deriveMonthName = (range = 'daily') => {
      const todayDate = new Date();
      switch (range) {
          case 'daily':
              const day = todayDate.getDay().toString();
              // @ts-ignore
              return daysMapping[day];
          case "monthly":
              const month = todayDate.getDay().toString();
              // @ts-ignore
              return monthMapping[month];
          case "yearly":
              return todayDate.getFullYear()
      }
}


export const calculateMessageCount = (value: string) => {
    return Math.ceil(value.length / 159) || 0;
}