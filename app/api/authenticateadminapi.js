import axios from "axios";

export default async function adminSignup(signupData) {
  try {
    const response = await axios.post("http://localhost:3003/admin/signup", {
      adminName: signupData.adminName,
      adminEmail: signupData.adminEmail,
      adminPassword: signupData.adminPassword,
      branchName: signupData.branchName,
      branchLocation: signupData.branchLocation,
      managerName: signupData.managerName,
      managerEmail: signupData.managerEmail,
      managerPassword: signupData.managerPassword,
    });

    return response.data;
  } catch (error) {
    console.error("Error during signup:", error.message);

    return {
      error: true,
      message: error.response
        ? error.response.data.error
        : "Network error or server unavailable",
      status: error.response ? error.response.status : 500,
      details: error.response ? error.response.data.details || null : null,
    };
  }
}

export async function adminLogin(details) {
  try {
    const response = await axios.post("http://localhost:3003/admin/login", {
      email: details.email,
      password: details.password,
    });

    return {
      success: true,
      token: response.data.token,
      message: response.data.message || "Login successful",
    };
  } catch (error) {
    console.error("Error during login:", error.message);

    return {
      error: true,
      message: error.response
        ? error.response.data.error
        : "Network error or server unavailable",
      status: error.response ? error.response.status : 500,
      details: error.response ? error.response.data.details || null : null,
    };
  }
}

export async function dashboardDetails() {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get("http://localhost:3003/admin/branch/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    console.error("Error fetching dashboard details:", err.message);
    return {
      error: true,
      message: "Network error or server unavailable",
      status: err.response ? err.response.status : 500,
      details: err.response ? err.response.data.details || null : null,
    };
  }
}
