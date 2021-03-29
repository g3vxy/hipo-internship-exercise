import secret from "./secret"

const constants = {
  base_url: `https://api.unsplash.com/search/photos?client_id=${secret.client_secret}`,
  imagesPerPage: 10,
}

export default constants
