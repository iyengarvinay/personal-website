import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

const PAPER = '#faf8f3';
const INK = '#1c1e24';
const MUTED = '#8a8a7e';
const CIRCLE_COLORS = ['#2b4570', '#b3592f', '#4a7862'];

let fontsCache: { name: string; data: Buffer; weight: number; style: 'normal' }[] | null = null;
function loadFonts() {
  if (fontsCache) return fontsCache;
  const fontsDir = path.resolve(process.cwd(), 'src/assets/fonts');
  fontsCache = [
    {
      name: 'Fraunces',
      data: fs.readFileSync(path.join(fontsDir, 'Fraunces-Bold.ttf')),
      weight: 700,
      style: 'normal',
    },
    {
      name: 'IBM Plex Mono',
      data: fs.readFileSync(path.join(fontsDir, 'IBMPlexMono-Medium.ttf')),
      weight: 500,
      style: 'normal',
    },
  ];
  return fontsCache;
}

function circle(x: number, y: number, color: string) {
  return {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: color,
        opacity: 0.82,
        mixBlendMode: 'multiply',
      },
    },
  };
}

function titleFontSize(title: string): string {
  if (title.length > 90) return '42px';
  if (title.length > 60) return '50px';
  return '64px';
}

function buildTree(title: string, eyebrow: string) {
  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '76px',
        background: PAPER,
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontFamily: 'IBM Plex Mono',
              fontSize: '24px',
              letterSpacing: '3px',
              color: MUTED,
              textTransform: 'uppercase',
            },
            children: eyebrow,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 1,
              gap: '40px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontFamily: 'Fraunces',
                    fontWeight: 700,
                    fontSize: titleFontSize(title),
                    lineHeight: 1.18,
                    color: INK,
                    maxWidth: '740px',
                  },
                  children: title,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    position: 'relative',
                    width: '230px',
                    height: '210px',
                    flexShrink: 0,
                  },
                  children: [
                    circle(0, 35, CIRCLE_COLORS[0]),
                    circle(85, 35, CIRCLE_COLORS[1]),
                    circle(42, 95, CIRCLE_COLORS[2]),
                  ],
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontFamily: 'IBM Plex Mono',
              fontSize: '22px',
              color: MUTED,
            },
            children: 'vinayiyengar.com',
          },
        },
      ],
    },
  };
}

export async function renderOgImage(title: string, eyebrow = 'The Vin Diagram'): Promise<Buffer> {
  const svg = await satori(buildTree(title, eyebrow) as any, {
    width: 1200,
    height: 630,
    fonts: loadFonts(),
  });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return Buffer.from(resvg.render().asPng());
}
