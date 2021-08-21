import expressLoader from './express'; 
import Logger from './logger'; 
export default async ({ expressApp }) => {
 
  Logger.info('dependency Injector loaded');  
  await expressLoader({ app: expressApp });
  Logger.info('express loaded');
};
