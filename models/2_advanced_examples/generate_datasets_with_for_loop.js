 const countries = [
    "GB",
    "US",
    "FR",
    "TH",
    "NG"
  ];

countries.forEach(country => {
  publish("reporting_" + country)
    .query(ctx => `
      select * from ${ref(dataset_1)}
      where country = ${country}
      )`);
});