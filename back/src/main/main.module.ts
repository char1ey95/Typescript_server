import MainController from './main.controller';
import MainService from './main.service';
import MainRepository from './main.repository';

const mainRepository = new MainRepository()
const mainService = new MainService({ mainRepository })
export const mainController = new MainController({ mainService })

