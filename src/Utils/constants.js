import secret from "./secret"

const constants = {
  base_url: `https://api.unsplash.com/search/photos?client_id=${secret.client_secret}`,
  imagesPerPage: 10,
  collections: {
    Featured: 4984892,
    Wallpapers: 17037,
    Nature: 1554643,
    Texture: 4363621,
    Architecture: 141706,
  },
}

export default constants
