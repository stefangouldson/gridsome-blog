// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Blog',
  plugins: [
    {
		use: "@gridsome/source-filesystem",
		options: {
			typeName: "Post",
			path: "./post/**/*.md",
		},
	},
	{
		use: '@gridsome/source-contentful',
		options: {
		  space: process.env.CONTENTFUL_SPACE, // required
		  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
		  host: 'cdn.contentful.com',
		  environment: 'master',
		  typeName: 'Contentful'
		}
	}
  ],
  templates: {
		Post: "/post/:title",
    ContentfulBlogPosts: "/blog/:slug"
	},
}
