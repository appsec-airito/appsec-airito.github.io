import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, href } from '../site.config';

export async function GET(context) {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  return rss({
    title: `${SITE.name} · Writing`,
    description: SITE.tagline,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: href(`/blog/${post.id}/`),
      })),
  });
}
