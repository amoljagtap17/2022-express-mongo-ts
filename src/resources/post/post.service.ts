import { PostModel } from './post.model';
import { IPost } from './post.interface';

export class PostService {
  private post = PostModel;

  /**
   * Get all posts
   */
  public async getAll(): Promise<IPost[]> {
    try {
      const posts = await this.post.find();

      return posts;
    } catch (error) {
      throw new Error('Unable to get posts');
    }
  }

  /**
   * Create a new post
   */
  public async create(title: string, body: string): Promise<IPost> {
    try {
      const post = await this.post.create({ title, body });

      return post;
    } catch (error) {
      throw new Error('Unable to create post');
    }
  }
}
