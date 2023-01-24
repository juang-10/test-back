import { BaseError } from './base_error';
import { ErrorsEnum, HTTPCodesEnum } from '../enums/errors_enums';

export class ErrorStorage extends BaseError {

  constructor(message: string, metatada?: any) {
    super(
      `${message}`,
      ErrorsEnum.STORAGE_EXCEPTION,
      HTTPCodesEnum.BAD_REQUEST,
      metatada,
    );
  }
}
