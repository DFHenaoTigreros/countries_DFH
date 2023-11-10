const validation = (activity) => {
  const errors = {};
  
  if(activity.name === "") errors.name = "Enter a name";
  if(/^\d+$/.test(activity.name)) errors.name = "Cannot have numbers";
  if(activity.difficulty < 1) errors.difficulty = "The difficulty must be greater than zero";
  if(activity.difficulty > 5) errors.difficulty = "The difficulty must be less than six";
  if(activity.duration < 1) errors.duration = "The duration must be greater than zero";
  if(activity.duration > 13) errors.duration = "The duration must be less than thirteen";
  if(!["Summer", "Fall", "Winter", "Spring"].includes(activity.season)) errors.season = "The season must be Summer, Fall, Winter or Spring";
  if(activity.countries.length === 0) errors.countries = "Select a country";
  return errors;
}

export default validation;