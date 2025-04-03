import axios from "axios";

export const moviesApis = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODcxNjlkMGU2YzdjZDhlN2M4NmFkNmY3ZjhkZGRlNCIsIm5iZiI6MTc0MzU1NzgzNC41OCwic3ViIjoiNjdlYzk0Y2FiOTQyNGNkODk1YWFkODNlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.G4THRy5KyOLsAyCYnubrhigO0GNO5sj_A8XEEITXMn8`
    },
});