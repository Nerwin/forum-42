import { validateOrReject } from 'class-validator';

export default async function validateObject(obj: any) {
  await validateOrReject(obj, { validationError: { target: false } });
}
