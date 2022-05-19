import {environment} from "../../environments/environment";

const {API: badeUrl} = environment;

export const urls = {
  users: `${badeUrl}/users`,
  posts: `${badeUrl}/posts`,
  comments: `${badeUrl}/comments`,
};
