const getUsers = (state) => state.users.items;
const getUserId = (state) => state.users.userId;

const getUserById = (state) => {
  const users = getUsers(state); //
  const userItem = getUserId(state); // получает id
  const a = users.find((user) => user.id === Number(userItem));
  console.log(`id in select`, userItem); //1010
  console.log(`users in select`, users); // массив объектов
  console.log("a:", a);
  return a;
};

export { getUsers, getUserById };
