const repository = require('../repositories/giphy.repository'); 
const service = require('../services/count.service');

exports.get = async (req, res) => {
  service.start();
  const response  = await repository.listGiphys();
  service.stop();
  const count = service.getCount();
  console.warn(`requisição levou ${count} ${(count) >= 1 ? 's' : 'ms'}!`);
  service.reset();
  res.status(200).send(response);
};
