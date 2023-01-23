import { HTTPCodesEnum } from '../../domain/dto/enums/errors_enums';

export class MainController {
    get(req: any, res: any, next: any): void {
        try {
        res.status(HTTPCodesEnum.SUCCESSFUL);
        res.send({ message: 'Store Service OK 👽'});
        } catch (error) {
        next(error);
        }
    } 
}
