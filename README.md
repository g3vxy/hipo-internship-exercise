# Hipo Internship Summer 2021

I'm building this project for the paid frontend summer internship.

## Notes

- I implemented **all requirements** plus all the **bonus objects** other than responsive design.
- I optimized website for 1920x1080 resolution. I can and probably will make it responsive later.
- I created the Select component from scratch because apparently you can't customize properly the native one.
- I could replace the fetching code with a useFetch hook to make it more "DRY" but I didn't do it, I know that I definitely should.
- Only dependecy this project has other than React itself is "react-lottie" package. I've used it for cute little "loading" and "not found" animations. I probably could make everything better with other peoples optimized packages but I wanted to challenge myself.
- I started with a pixel perfect implementation but then I thought i could tweak some stuff to make it better in 1080p since that was the only resolution that I was working on it. Still components has the exact same apperance from design documentation.

## Installation

```bash
git clone https://github.com/g3vxy/hipo-internship-exercise.git

cd hipo-internship-exercise

yarn install or npm install
```

## Usage

- Create a "secret.js" file in Utils folder.

```js
const secret = {
  client_secret: "YourApiKey",
}
export default secret
```

- Run the project.

```bash
yarn start or npm start
```
