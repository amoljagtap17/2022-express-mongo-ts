import { Schema, model } from 'mongoose';
import { IPost } from './post.interface';

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const PostModel = model<IPost>('Post', PostSchema);
