const friendsUrl =
  "https://two02301-w7chwe-jaume-cuadrada-back.onrender.com/friends";

const getApiData = async () => {
  const response = await fetch(friendsUrl);
  const data = await response.json();
  return data;
};

export default getApiData;
