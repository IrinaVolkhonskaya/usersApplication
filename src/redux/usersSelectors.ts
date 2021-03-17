import {IUser, State} from "../components/models";


const getUsers = (state: State) => state.users.items;
const getUserId = (state: State) => state.users.userId;

const getUserById = (state: State): IUser | undefined => {
  const users = getUsers(state); //
  const userItem = getUserId(state); // получает id
  const userS = users.find((user) => user.id === Number(userItem));
  // console.log(`id in select`, userItem); //1010
  // console.log(`users in select`, users); // массив объектов
  // console.log("a:", a);
  return userS;
};

export { getUsers, getUserById };
