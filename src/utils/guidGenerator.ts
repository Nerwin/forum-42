import * as crypto from 'crypto';

// Not the best GUID generator but will do the job
export const guidGenerator = (): string => {
  return crypto.randomBytes(5).toString('hex');
};
