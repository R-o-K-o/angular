import {environment} from "../../environments/environment";

const {APP: baseURL} = environment;

export const urls = {
  users: `${baseURL}/users`,
  posts: `${baseURL}/posts`,
  comments: `${baseURL}/comments`,
};
