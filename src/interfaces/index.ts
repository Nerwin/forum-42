import { Request, Response } from 'express';

export declare type AuthenticatedUser = { id: string; name: string };

export declare type ApolloContext = {
  req: Request;
  res: Response;
  user: AuthenticatedUser;
};
