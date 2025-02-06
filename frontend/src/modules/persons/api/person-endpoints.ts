export const PERSON_ENDPOINTS = {
  getAllPersons: "/persons",
  getPerson: (id: number | string) => `/person/${id}`,
  createPerson: "/person",
  updatePerson: (id: number | string) => `/person/${id}`,
};
