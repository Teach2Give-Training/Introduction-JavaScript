// storage.js

// Save user preferences (e.g., genre, rating)
export const savePreferences = (preferences) => {
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
};

// Retrieve saved preferences
export const getPreferences = () => {
  const preferences = localStorage.getItem('userPreferences');
  return preferences ? JSON.parse(preferences) : {};
};
