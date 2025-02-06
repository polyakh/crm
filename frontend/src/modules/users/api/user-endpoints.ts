export const USER_ENDPOINTS = {
  getUser: (id: number | string) => `/user/${id}`,
  getAllUsers: "/users",
  createUser: "/user",
  updateUser: (id: number | string) => `/user/${id}`,
};
