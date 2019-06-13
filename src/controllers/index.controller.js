const repository = require('../repositories/giphy.repository');
const service = require('../services/count.service');

exports.get = async (req, res) => {
  
  const term = req.params.term || 'dog';
  
  try {

    // iniciando a contagem
    service.start();

    // buscando as informações no serviço
    const response = await repository.listGiphysByTerm(term);

    // parando a contagem após a requisição
    service.stop();

    const count = service.getCount();
    console.warn(`requisição levou ${count} ${(count) >= 1 ? `segundo${count >= 2 ? 's' : ''}` : 'ms'}!`);

    // resetando a contagem
    service.reset();

    res.status(200).send(response);
  } catch (error) {
    // resetando o serviço
    service.stop();
    service.reset();

    res.status(404).send(response);
  }
};
