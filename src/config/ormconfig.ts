import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
    type: 'sqlite',
    database: 'db/bd.sql',
    synchronize: false,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '../migrations/*.{js,ts}'],
  };
  
const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
