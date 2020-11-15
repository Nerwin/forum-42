import { plainToClass } from 'class-transformer';
import path from 'path';
import fs from 'fs';
import validateObject from '../validations/validator';

export default abstract class Service<T> {
  protected _data: T[];

  constructor() {
    console.debug(`Initialize ${this.constructor.name}`);
  }

  protected _loadFixtures(fileName: string, classTransform: any) {
    const dataFixture = fs
      .readFileSync(path.resolve(__dirname, `../../fixtures/${fileName}`))
      .toString('utf-8');

    this._data = plainToClass(classTransform, JSON.parse(dataFixture));
  }

  private _create(data: T) {
    // @ts-ignore
    console.log(`Creating new ${data.constructor.name}...`);

    this._data = [...this._data, data];
    return data;
  }

  protected async createWithValidation(data: T) {
    await validateObject(data);
    return this._create(data);
  }

  protected find(filter: any) {
    return this._data.filter(filter);
  }

  protected findAll() {
    return this._data;
  }

  protected update(index: number, data: T) {
    this._data[index] = data;
    return data;
  }

  protected delete(index: number) {
    return this._data.splice(index, 1);
  }
}
