const prettyDate = (date) => {
  const iso = date.toISOString();

  return iso.split('T')[0] + ', at ' + iso.split('T')[1].substring(0, 5);
};

export { prettyDate };
