import API from "./API"

export const addEvent = (data) => API.post('/event/add',data);
export const cancelEvent = (eventId) => API.put(`/event/cancel/${eventId}`);
export const removeEvent = (eventId) => API.delete(`/event/remove/${eventId}`)