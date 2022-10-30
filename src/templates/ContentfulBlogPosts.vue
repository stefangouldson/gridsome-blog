<template>
	<Layout>
		<header class="title">
			<h1>{{ $page.allContentfulBlogPosts.edges[0].node.title }}</h1>
      <div class="img-container">
        <g-image style="max-height: 500px; max-width:95%" :src="$page.allContentfulBlogPosts.edges[0].node.coverImage.file.url" /> 
      </div>
			<p>Published on: {{ $page.allContentfulBlogPosts.edges[0].node.publishedAt }}</p>
		</header>
		<main class="content" v-html="richTextToHTML($page.allContentfulBlogPosts.edges[0].node.content)">
    </main>
	</Layout>
</template>

<page-query>
  query ($slug: String!){
    allContentfulBlogPosts (filter:{slug:{eq: $slug }}) {
      edges{ 
        node{
          title
     			publishedAt
          content
          coverImage{
            file{
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  name: 'Post',
  metaInfo(){
    return {
      title: this.$page.allContentfulBlogPosts.edges[0].node.title,
      meta: [
        {
          name: 'author',
          content: 'Stefan Gouldson'
        }
      ],
    }
  },
  methods: {
    richTextToHTML (content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img style="max-width: 95%" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`
          }
        }
      })
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
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>