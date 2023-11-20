// vite.config.ts
import { defineConfig } from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/vite@4.4.9_@types+node@20.6.0/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/unocss@0.55.7_postcss@8.4.29_rollup@2.79.1_vite@4.4.9/node_modules/unocss/dist/vite.mjs";
import { presetTagify, presetIcons } from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/unocss@0.55.7_postcss@8.4.29_rollup@2.79.1_vite@4.4.9/node_modules/unocss/dist/index.mjs";
import extractorSvelte from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/@unocss+extractor-svelte@0.55.7/node_modules/@unocss/extractor-svelte/dist/index.mjs";
import { imagetools } from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/vite-imagetools@4.0.19_rollup@2.79.1/node_modules/vite-imagetools/dist/index.mjs";
import { sveltekit as SvelteKit } from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/@sveltejs+kit@1.25.0_svelte@4.2.0_vite@4.4.9/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { SvelteKitPWA } from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/@vite-pwa+sveltekit@0.1.3_@sveltejs+kit@1.25.0_vite-plugin-pwa@0.14.7/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
import TailwindCSS from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/tailwindcss@3.3.3/node_modules/tailwindcss/lib/index.js";

// tailwind.config.ts
import typography from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/@tailwindcss+typography@0.5.10_tailwindcss@3.3.3/node_modules/@tailwindcss/typography/src/index.js";
import daisyui from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/daisyui@3.7.3/node_modules/daisyui/src/index.js";

// src/lib/config/general.ts
var theme = [
  {
    name: "cmyk",
    text: "\u{1F5A8} Light"
  },
  {
    name: "dracula",
    text: "\u{1F9DB} Dark"
  },
  {
    name: "valentine",
    text: "\u{1F338} Valentine"
  },
  {
    name: "aqua",
    text: "\u{1F4A6} Aqua"
  },
  {
    name: "synthwave",
    text: "\u{1F303} Synthwave"
  },
  {
    name: "night",
    text: "\u{1F303} Night"
  },
  {
    name: "lofi",
    text: "\u{1F3B6} Lo-Fi"
  },
  {
    name: "lemonade",
    text: "\u{1F34B} Lemonade"
  },
  {
    name: "cupcake",
    text: "\u{1F9C1} Cupcake"
  },
  {
    name: "garden",
    text: "\u{1F3E1} Garden"
  },
  {
    name: "retro",
    text: "\u{1F307} Retro"
  },
  {
    name: "black",
    text: "\u{1F5A4} Black"
  }
];

// tailwind.config.ts
var tailwind_config_default = {
  content: ["./src/**/*.{html,md,js,svelte,ts}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0
            },
            'ul > li:has(input[type="checkbox"])': {
              listStyle: "none"
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30
            }
          }
        }
      }
    }
  },
  plugins: [typography, daisyui],
  daisyui: { themes: theme.map(({ name }) => name) }
};

// vite.config.ts
import LightningCSS from "file:///Users/tyama/Desktop/programming/tyama-blog/node_modules/.pnpm/postcss-lightningcss@0.7.0_postcss@8.4.29/node_modules/postcss-lightningcss/src/index.js";
var vite_config_default = defineConfig({
  envPrefix: "URARA_",
  build: {
    sourcemap: false,
    rollupOptions: {
      cache: false
    }
  },
  css: {
    postcss: {
      plugins: [TailwindCSS(tailwind_config_default), LightningCSS()]
    }
  },
  plugins: [
    UnoCSS({
      content: { pipeline: { include: [/\.svelte$/, /\.md?$/, /\.ts$/] } },
      extractors: [extractorSvelte],
      presets: [
        presetTagify({
          extraProperties: (matched) => matched.startsWith("i-") ? { display: "inline-block" } : {}
        }),
        presetIcons({ scale: 1.5 })
      ]
    }),
    imagetools(),
    SvelteKit(),
    SvelteKitPWA({
      registerType: "autoUpdate",
      manifest: false,
      scope: "/",
      workbox: {
        globPatterns: ["posts.json", "**/*.{js,css,html,svg,ico,png,webp,avif}"],
        globIgnores: ["**/sw*", "**/workbox-*"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIiwgInNyYy9saWIvY29uZmlnL2dlbmVyYWwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdHlhbWEvRGVza3RvcC9wcm9ncmFtbWluZy90eWFtYS1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdHlhbWEvRGVza3RvcC9wcm9ncmFtbWluZy90eWFtYS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90eWFtYS9EZXNrdG9wL3Byb2dyYW1taW5nL3R5YW1hLWJsb2cvdml0ZS5jb25maWcudHNcIjsvLyB2aXRlIGRlZmluZSBjb25maWdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG4vLyB2aXRlIHBsdWdpblxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCB7IHByZXNldFRhZ2lmeSwgcHJlc2V0SWNvbnMgfSBmcm9tICd1bm9jc3MnXG5pbXBvcnQgZXh0cmFjdG9yU3ZlbHRlIGZyb20gJ0B1bm9jc3MvZXh0cmFjdG9yLXN2ZWx0ZSdcbmltcG9ydCB7IGltYWdldG9vbHMgfSBmcm9tICd2aXRlLWltYWdldG9vbHMnXG5pbXBvcnQgeyBzdmVsdGVraXQgYXMgU3ZlbHRlS2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJ1xuaW1wb3J0IHsgU3ZlbHRlS2l0UFdBIH0gZnJvbSAnQHZpdGUtcHdhL3N2ZWx0ZWtpdCdcbi8vIHBvc3Rjc3MgJiB0YWlsd2luZGNzc1xuaW1wb3J0IFRhaWx3aW5kQ1NTIGZyb20gJ3RhaWx3aW5kY3NzJ1xuaW1wb3J0IHRhaWx3aW5kQ29uZmlnIGZyb20gJy4vdGFpbHdpbmQuY29uZmlnJ1xuLy8gQHRzLWV4cGVjdC1lcnJvciB0cyg3MDE2KVxuaW1wb3J0IExpZ2h0bmluZ0NTUyBmcm9tICdwb3N0Y3NzLWxpZ2h0bmluZ2NzcydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW52UHJlZml4OiAnVVJBUkFfJyxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGNhY2hlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1RhaWx3aW5kQ1NTKHRhaWx3aW5kQ29uZmlnKSwgTGlnaHRuaW5nQ1NTKCldXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgVW5vQ1NTKHtcbiAgICAgIGNvbnRlbnQ6IHsgcGlwZWxpbmU6IHsgaW5jbHVkZTogWy9cXC5zdmVsdGUkLywgL1xcLm1kPyQvLCAvXFwudHMkL10gfSB9LFxuICAgICAgZXh0cmFjdG9yczogW2V4dHJhY3RvclN2ZWx0ZV0sXG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIHByZXNldFRhZ2lmeSh7XG4gICAgICAgICAgZXh0cmFQcm9wZXJ0aWVzOiAobWF0Y2hlZDogc3RyaW5nKSA9PiAobWF0Y2hlZC5zdGFydHNXaXRoKCdpLScpID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IDoge30pXG4gICAgICAgIH0pLFxuICAgICAgICBwcmVzZXRJY29ucyh7IHNjYWxlOiAxLjUgfSlcbiAgICAgIF1cbiAgICB9KSxcbiAgICBpbWFnZXRvb2xzKCksXG4gICAgU3ZlbHRlS2l0KCksXG4gICAgU3ZlbHRlS2l0UFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgbWFuaWZlc3Q6IGZhbHNlLFxuICAgICAgc2NvcGU6ICcvJyxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJ3Bvc3RzLmpzb24nLCAnKiovKi57anMsY3NzLGh0bWwsc3ZnLGljbyxwbmcsd2VicCxhdmlmfSddLFxuICAgICAgICBnbG9iSWdub3JlczogWycqKi9zdyonLCAnKiovd29ya2JveC0qJ11cbiAgICAgIH1cbiAgICB9KVxuICBdXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdHlhbWEvRGVza3RvcC9wcm9ncmFtbWluZy90eWFtYS1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdHlhbWEvRGVza3RvcC9wcm9ncmFtbWluZy90eWFtYS1ibG9nL3RhaWx3aW5kLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdHlhbWEvRGVza3RvcC9wcm9ncmFtbWluZy90eWFtYS1ibG9nL3RhaWx3aW5kLmNvbmZpZy50c1wiO2ltcG9ydCB0eXBlIHsgQ29uZmlnIH0gZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICdAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeSdcbmltcG9ydCBkYWlzeXVpIGZyb20gJ2RhaXN5dWknXG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi9zcmMvbGliL2NvbmZpZy9nZW5lcmFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRlbnQ6IFsnLi9zcmMvKiovKi57aHRtbCxtZCxqcyxzdmVsdGUsdHN9J10sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOiB7XG4gICAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAgIERFRkFVTFQ6IHtcbiAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICd1bDpoYXMobGkpOmhhcyhpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0pJzoge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3VsID4gbGk6aGFzKGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSknOiB7XG4gICAgICAgICAgICAgIGxpc3RTdHlsZTogJ25vbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3VsID4gbGk6aGFzKGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSkgdWwgbGknOiB7XG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAzMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW3R5cG9ncmFwaHksIGRhaXN5dWldLFxuICBkYWlzeXVpOiB7IHRoZW1lczogdGhlbWUubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSkgfVxufSBzYXRpc2ZpZXMgQ29uZmlnXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy90eWFtYS9EZXNrdG9wL3Byb2dyYW1taW5nL3R5YW1hLWJsb2cvc3JjL2xpYi9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy90eWFtYS9EZXNrdG9wL3Byb2dyYW1taW5nL3R5YW1hLWJsb2cvc3JjL2xpYi9jb25maWcvZ2VuZXJhbC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdHlhbWEvRGVza3RvcC9wcm9ncmFtbWluZy90eWFtYS1ibG9nL3NyYy9saWIvY29uZmlnL2dlbmVyYWwudHNcIjtpbXBvcnQgdHlwZSB7IFRoZW1lQ29uZmlnLCBIZWFkQ29uZmlnLCBIZWFkZXJDb25maWcsIEZvb3RlckNvbmZpZywgRGF0ZUNvbmZpZywgRmVlZENvbmZpZyB9IGZyb20gJyRsaWIvdHlwZXMvZ2VuZXJhbCdcblxuZXhwb3J0IGNvbnN0IHRoZW1lOiBUaGVtZUNvbmZpZyA9IFtcbiAge1xuICAgIG5hbWU6ICdjbXlrJyxcbiAgICB0ZXh0OiAnXHVEODNEXHVEREE4IExpZ2h0J1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2RyYWN1bGEnLFxuICAgIHRleHQ6ICdcdUQ4M0VcdUREREIgRGFyaydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd2YWxlbnRpbmUnLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMzggVmFsZW50aW5lJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2FxdWEnLFxuICAgIHRleHQ6ICdcdUQ4M0RcdURDQTYgQXF1YSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzeW50aHdhdmUnLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMDMgU3ludGh3YXZlJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ25pZ2h0JyxcbiAgICB0ZXh0OiAnXHVEODNDXHVERjAzIE5pZ2h0J1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2xvZmknLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGQjYgTG8tRmknXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGVtb25hZGUnLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGNEIgTGVtb25hZGUnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnY3VwY2FrZScsXG4gICAgdGV4dDogJ1x1RDgzRVx1RERDMSBDdXBjYWtlJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2dhcmRlbicsXG4gICAgdGV4dDogJ1x1RDgzQ1x1REZFMSBHYXJkZW4nXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAncmV0cm8nLFxuICAgIHRleHQ6ICdcdUQ4M0NcdURGMDcgUmV0cm8nXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYmxhY2snLFxuICAgIHRleHQ6ICdcdUQ4M0RcdUREQTQgQmxhY2snXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGhlYWQ6IEhlYWRDb25maWcgPSB7fVxuXG5leHBvcnQgY29uc3QgaGVhZGVyOiBIZWFkZXJDb25maWcgPSB7XG4gIG5hdjogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdHZXQgU3RhcnRlZCcsXG4gICAgICBsaW5rOiAnL2hlbGxvLXdvcmxkJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0VsZW1lbnRzJyxcbiAgICAgIGxpbms6ICcvaGVsbG8td29ybGQvZWxlbWVudHMnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBmb290ZXI6IEZvb3RlckNvbmZpZyA9IHtcbiAgbmF2OiBbXG4gICAge1xuICAgICAgdGV4dDogJ0ZlZWQnLFxuICAgICAgbGluazogJy9hdG9tLnhtbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdTaXRlbWFwJyxcbiAgICAgIGxpbms6ICcvc2l0ZW1hcC54bWwnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkYXRlOiBEYXRlQ29uZmlnID0ge1xuICBsb2NhbGVzOiAnZW4tVVMnLFxuICBvcHRpb25zOiB7XG4gICAgeWVhcjogJzItZGlnaXQnLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICBkYXk6ICdudW1lcmljJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZWVkOiBGZWVkQ29uZmlnID0ge31cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLFlBQVk7QUFDbkIsU0FBUyxjQUFjLG1CQUFtQjtBQUMxQyxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLGFBQWEsaUJBQWlCO0FBQ3ZDLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8saUJBQWlCOzs7QUNUeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhOzs7QUNBYixJQUFNLFFBQXFCO0FBQUEsRUFDaEM7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1B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
