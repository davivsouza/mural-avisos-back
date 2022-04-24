export interface PostsType {
  id: string;
  title: string;
  description: string;
}

export const posts: PostsType[] = [
  {
    id: "dhasdjasd",
    title: "mural",
    description: "Descrição teste",
  },
];

export function getAll(): PostsType[] {
  return posts;
}
export function newPost(title: string, description:string) {
  posts.push({ id: generateID(), title, description });
}

function generateID(): string {
  return Math.random().toString(36).substring(2, 9);
}
