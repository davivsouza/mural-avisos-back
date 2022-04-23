export const posts = [
  {
    id: "dhasdjasd",
    title: "mural",
    description: "Descrição teste",
  },
];

export function getAll() {
  return posts;
}
export function newPost(title, description) {
  posts.push({ id: generateID(), title, description });
}

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
