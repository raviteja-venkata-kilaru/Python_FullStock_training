function fetchUserData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
async function displayUserData(data) {
  try {
    const userData = await fetchUserData(data);
    console.log("Name:", userData.name);
    console.log("Email:", userData.email);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
const data = { id: 1, name: "Ravi", email: "Ravi@gmail.com" };
displayUserData(data);