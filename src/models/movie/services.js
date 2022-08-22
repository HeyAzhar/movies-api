const Movie = require("./index");

exports.insertMany = (body) =>
  Movie.insertMany(body).catch((error) => {
    throw error;
  });

exports.get = async (body) => {
  const { limit, page } = body.filter;
  const lmt = limit && parseInt(limit, 10) > 0 ? parseInt(limit, 10) : 10;
  const pg = page && parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
  const skip = (pg - 1) * limit;

  let query = {};

  if (body.value)
    query = {
      $or: [
        { title: new RegExp(body.value, "i") },
        { cast: { $in: [new RegExp(body.value, "i")] } },
        { genres: { $in: [new RegExp(body.value, "i")] } },
      ],
    };

  !isNaN(body.value) &&
    query.$or?.push({
      year: parseInt(body.value),
    });

  const total = await Movie.countDocuments(query);

  const data = await Movie.find(query)
    .sort("-createdAt")
    .skip(skip)
    .limit(lmt)
    .lean();

  return {
    page: pg,
    limit: lmt,
    total,
    data,
  };
};
