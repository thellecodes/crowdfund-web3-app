import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3df67037935fc1b23cb1392750f39917a00Ac460'
);
// 0x3df67037935fc1b23cb1392750f39917a00Ac460
export default instance;
