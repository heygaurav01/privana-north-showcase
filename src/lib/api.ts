interface FormSubmissionData {
  name: string;
  phone: string;
  email: string;
  countryCode: string;
  message?: string;
}

interface ApiSubmissionData {
  name: string;
  phone: string;
  email: string;
  promotion_code: string;
  ip_address: string;
  message?: string;
}

// Get user's IP address
export const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip || "0.0.0.0";
  } catch (error) {
    console.error("Failed to get user IP:", error);
    // Fallback IP
    return "0.0.0.0";
  }
};

// Submit form data to API
export const submitFormData = async (
  formData: FormSubmissionData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Get user's IP address
    const userIP = await getUserIP();

    // Prepare API data
    const apiData: ApiSubmissionData = {
      name: formData.name,
      phone: `${formData.countryCode}${formData.phone}`,
      email: formData.email,
      promotion_code: "GDmryxHr44EfDA==",
      ip_address: userIP,
      ...(formData.message ? { message: formData.message } : {}),
    };

    const response = await fetch("http://api.elaris.ltd/api/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: true,
      message:
        result?.message ||
        "Form submitted successfully! We will contact you soon.",
    };
  } catch (error) {
    console.error("API submission error:", error);
    return {
      success: false,
      message: "Failed to submit form. Please try again later.",
    };
  }
};
