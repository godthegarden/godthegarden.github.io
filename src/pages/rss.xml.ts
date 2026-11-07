import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = (
    await getCollection('blog', ({ data }) => !data.draft)
  ).sort(
    (a, b) =>
      b.data.publishedAt.getTime() -
      a.data.publishedAt.getTime()
  );

  return rss({
    title: 'Godthegarden',
    description:
      'Personal archive of cybersecurity, AI, development, and technical exploration.',

    site: 'https://godthegarden.github.io',

    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? post.data.title,
      pubDate: post.data.publishedAt,
      link: `/posts/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),

    customData: '<language>en</language>',
  });
};