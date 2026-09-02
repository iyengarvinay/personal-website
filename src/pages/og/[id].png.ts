import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgImage } from '../../lib/ogImage';

export async function getStaticPaths() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { id: post.id },
    props: { title: post.data.title },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props.title);
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
