import { Router, Request, Response, NextFunction } from 'express';

import { IController } from 'types';
import { HttpException } from 'exceptions';
import { validationMiddleware } from 'middlewares';

import { createValidation } from './post.validation';
import { PostService } from './post.service';

export class PostController implements IController {
  public path = '/posts';
  public router = Router();
  private PostService = new PostService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}`,
      validationMiddleware(createValidation),
      this.create
    );
  }

  private create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { title, body } = req.body;

      const post = await this.PostService.create(title, body);

      res.status(201).json({ post });
    } catch (error) {
      next(new HttpException(400, 'Cannot create post'));
    }
  };
}
