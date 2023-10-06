import axios from "axios";
import { langColors } from "./config";

const api = axios.create({
  baseURL: "https://api.github.com/",
});

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLangsFrom = (repositories) => {
  let stats = repositories
    .map((r) => r.language)
    .reduce(
      (data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      []
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((l) => ({
      nome: l,
      count: stats[l],
      color: langColors[l.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
};
