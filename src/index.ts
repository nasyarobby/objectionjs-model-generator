import { Knex } from 'knex';

export type OmgConfig = {
  user: string;
  password: string;
  connectString: string;
};

export function getTables(
  knex: Knex,
  config: OmgConfig,
  query?: string
): Knex.Raw {
  const getTablesQuery =
    query ||
    `SELECT * FROM ALL_TABLES WHERE OWNER = '${config.user.toUpperCase()}'`;

  return knex.raw(getTablesQuery);
}
