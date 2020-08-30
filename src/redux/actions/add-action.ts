let nextId = 0;

export const ADD_PERSON = "ADD_PERSON";

export const addPerson = (content) => ({
  type: ADD_PERSON,
  payload: {
    id: ++nextId,
    content: content,
  },
});
