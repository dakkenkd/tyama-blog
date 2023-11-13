import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'tyama-blog',
  subtitle: '開発や研究に関するブログ',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/kuroneko.jpeg',
    name: 'Tyama',
    status: '😁',
    bio: 'student(M1)'
  },
  themeColor: '#3D4451'
}
