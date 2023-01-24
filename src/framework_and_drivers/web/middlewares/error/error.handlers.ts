// import { Request, Response, NextFunction } from 'express';
// import { HTTPCodesEnum } from '../../../../domain/dto/enums/errors_enums';


// export default function (err: any, req: Request, res: Response, next: NextFunction) {
//     if (!err) {
//         next();
//         return;
//     }
//     if (err instanceof BaseError) {
//         res.status(err.status || HTTPCodesEnum.INTERNAL_SERVER_ERROR)
//         .json(new ApiError(err.error, err.code, err.metadata));
//     } else if (err instanceof Error) {
//         res.status(HTTPCodesEnum.INTERNAL_SERVER_ERROR)
//         .json(new ApiError(err.message, HTTPCodesEnum.INTERNAL_SERVER_ERROR,));
//     } else {
//         /** EL SUPER ERROR MEGADESCONOCIDO */
//         res.status(HTTPCodesEnum.INTERNAL_SERVER_ERROR)
//         .json(new ApiError('w daaaaaaa fuk, we are diying 🧟🧟🧟🧟', HTTPCodesEnum.INTERNAL_SERVER_ERROR,));
//     }
// }