<template>
	<Layout>
		<header class="title">
			<h1>{{ post.title }}</h1>
      <div class="img-container">
        <!-- <g-image style="max-width: 100%" :src="post.image" /> -->
      </div>
			<p>Published on: {{ post.publishedAt }}</p>
		</header>
		<!-- <main class="content" v-html="$page.post.content"></main> -->
	</Layout>
</template>
<page-query>
	query Post($path: String!) {
		post: post(path: $path) {
			id 
			title 
			path 
			date (format: "MMMM D, YYYY h:mma")
      image (fit: cover, quality: 90)
			content
		}
	}
</page-query>

<script>
export default {
  name: 'About',
  metaInfo(){
    return {
      title: this.$page.post.title,
      post: this.$page.allContentfulBlogPosts.edges[0].node,
      meta: [
        {
          name: 'author',
          content: 'Stefan Gouldson'
        }
      ],
    }
  }
}
</script>

<style scoped>
	.title {
		text-align: center;
    color: #00a672;
	}
  .img-container{
    max-width: 100%;
  }
</style>