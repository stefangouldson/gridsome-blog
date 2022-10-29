<template>
	<Layout>
		<h1>Welcome to {{ $static.metadata.siteName }}!</h1>
    		<hr />
		<u><h2>Posts</h2></u>
		<g-link
			v-for="post in $page.posts.edges"
			:key="post.id"
			class="post"
			:to="post.node.path"
		>
			<div class="post">
				<h3>
					<b>{{ post.node.title }}</b>
				</h3>
				<p>Date: {{ post.node.date }}</p>
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
		margin: 24px;
	}
	div.post:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
	query {
		posts: allPost {
			edges {
				node {
					id 
					title 
					path 
					date(format: "MMMM D, YYYY")
				} 
			} 
		} 
	}
</page-query>