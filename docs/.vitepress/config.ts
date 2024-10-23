import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Grace Fellowship of Mountain Home ID',
  description: 'A body of believers that look to the Word of God to worship in Spirit and Truth',

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },

      {
        text: 'Sermons',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },

      // ...
    ],

    sidebar: [
      {
        items: [
          { text: 'Example', link: '/example' },
          { text: 'Guide', link: '/guide' },
          // ...
        ],
      },
    ],
  },
});
