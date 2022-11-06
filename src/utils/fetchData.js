// Rapid Api - опции
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

// export const youtubeOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//     'X-RapidAPI-Key': '68671a8debmsh33c4eedafa8d62cp1dd3bbjsnb277f5c91308',
//   },
// };

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};

