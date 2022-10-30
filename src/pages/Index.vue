<template>
	<Layout>
		<h1>Welcome to {{ $static.metadata.siteName }}!</h1>
    <hr />
		<g-link
			v-for="post in $page.allContentfulBlogPosts.edges"
			:key="post.id"
			class="post"
			:to="'/blog/' + post.node.slug"
		>
			<div class="post">
				<h3>
					<b>{{ post.node.title }}</b>
				</h3>
				<p>Date: {{ post.node.publishedAt }}</p>
			</div>
		</g-link>
	</Layout>
</template>

<style scoped>
	a.post {
		color: black;
		text-decoration: none;
	}
	div.post {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		padding: 2px 16px;
		margin-bottom: 24px;
    background-color: #00a672;
    color: white;
    border-radius: 20px;
	}
	div.post:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    scale: 1.1;
	}
</style>

<static-query>
	query {
		metadata {
			siteName
		}
	}
</static-query>

<page-query>
  query allBlogs {
    allContentfulBlogPosts {
      edges {
        node {
          title
          slug
          id
          publishedAt(format: "MMMM D, YYYY")
        }
      }
    }
  }
</page-query>