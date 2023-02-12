import Knex from 'knex';
import { getTables, OmgConfig } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', async () => {
      const config: OmgConfig = {
        connectString: '192.168.1.104:1521/efakturdb',
        user: 'mpajak',
        password: 'XViii0521',
      };

      const knex = Knex({
        client: 'oracledb',
        connection: config,
      });

      const result = await getTables(knex, config);
      console.log(result);
      expect(result).toMatch([]);
    });
  });
});
