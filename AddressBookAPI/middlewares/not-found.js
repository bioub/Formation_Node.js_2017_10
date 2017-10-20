'use strict';

const notFound = (req, res) => {
  res.statusCode = 404;
  return res.json({
    msg: 'Not Found',
  });
};

module.exports = notFound;
