import type { APIRoute } from 'astro';
import { renderOgImage } from '../../lib/ogImage';

export const GET: APIRoute = async () => {
  const png = await renderOgImage('At the intersection of technology, investing, and policy.');
  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
