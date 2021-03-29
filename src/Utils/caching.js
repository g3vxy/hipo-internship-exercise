const writeToCache = (url, data) =>
  sessionStorage.setItem(url, JSON.stringify(data))

const readFromCache = (url) => JSON.parse(sessionStorage.getItem(url)) || null

export { readFromCache, writeToCache }
