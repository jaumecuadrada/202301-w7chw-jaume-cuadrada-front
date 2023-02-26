const friendsUrl =
  "https://two02301-w7chwe-jaume-cuadrada-back.onrender.com/friends";

const getApiData = async () => {
  try {
    const response = await fetch(friendsUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getApiData;
