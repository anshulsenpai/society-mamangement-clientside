import API from "./API"

export const createPoll = (data)  => API.post("/voting/poll/create",data);
export const getActivePolls = (data)  => API.post("/voting/poll/active",data);
export const updateVotesCount = ({pollID,memberID,candidateID})=> API.put(`/voting/poll/update/${pollID}/${candidateID}/${memberID}`)