import API from "./API"

export const addMeeting = (data) => API.post('/meeting/add',data);
export const cancelMeeting = (meetingId) => API.put(`/meeting/cancel/${meetingId}`);
export const removeMeeting = (meetingId) => API.delete(`/meeting/remove/${meetingId}`)