exports.fetchFunc = (postcode) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.carbonintensity.org.uk/regional/postcode/${postcode}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return resolve(data.data[0]);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
