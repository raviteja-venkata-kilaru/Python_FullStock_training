function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "Ravi", email: "Ravi@gmail.com" };
        resolve(data);
      }, 2000);
    });
  }
async function displayUserData() {
  try {
    const userData = await fetchUserData();
    console.log("Name:", userData.name);
    console.log("Email:", userData.email);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
  
displayUserData();