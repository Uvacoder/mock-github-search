## 🚀 Summary
This repo includes my practice with GatsbyJS, React, Axios and GitHub's public API.
-
## 📚 Resources used along the way

- GitHub API [docs](https://developer.github.com/v3/search/)
- Bulma [docs](https://bulma.io/documentation/) for styling
- Working with forms [Gatsby docs](https://www.gatsbyjs.org/docs/adding-forms/)
- Pagination [youtube tutorial](https://www.youtube.com/watch?v=AJiS1Bulzp4)
- Deploying [Netlify](https://www.gatsbyjs.org/docs/deploying-to-netlify/#git-repository-setup)

## 🖥️ Deployed site

- [Site](https://nifty-jones-863d0b.netlify.com)

## 🤔 My thinking process

I focused on getting the core functionality done first. Then I worked on styling. At first, I thought I could use Gatsby's GraphQL layer to pull data from the GitHub API. I realized that wouldn't be an option because those types of queries run at build time, prior to any user input. 

The advantage of sticking with Gatsby is that this site meets the [Progressive Web App](https://www.gatsbyjs.org/docs/progressive-web-app/) standard. You can run an audit on it using Lighthouse in the Chrome DevTools. Here are instructions on [how to do that](https://developers.google.com/web/tools/lighthouse/#devtools). 

Another reason why I decided to stick with Gatsby is because it's very easy to [deploy a Gatsby project](https://www.gatsbyjs.org/docs/deploying-to-netlify/) to Netlify. 
