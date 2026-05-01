// docmd.config.js (Modern Format)
// Source file from the docmd project — https://github.com/docmd-io/docs

export default defineConfig({
  /* --- Core Metadata --- */
  title: 'Star Path Viewer Documentation',
  url: 'https://star-path-docs.pages.dev/',

  /* --- Branding --- */
  logo: {
    light: 'assets/images/spv-logo-docs-light.png',
    dark: 'assets/images/spv-logo-docs-dark.png',
    alt: 'StarPathViewer Logo',
    href: 'https://star-path-viewer.pages.dev/',
  },
  favicon: 'assets/favicon.ico',

  /* --- Structure --- */
  src: 'docs',
  out: 'site',

  /* --- Features & UX --- */
  minify: true,
  autoTitleFromH1: true,
  copyCode: true,
  pageNavigation: true,
  customJs: ['/assets/js/theme-fix.js'],

  editLink: {
    enabled: true,
    baseUrl: 'https://github.com/stardial-astro/star-path-docs/edit/main/docs',
  },

  /* --- Theme Settings --- */
  theme: {
    name: 'default', // Options: 'default', 'sky', 'ruby', 'retro'
    appearance: 'system', // 'light', 'dark', or 'system'
    codeHighlight: true,
    customCss: ['/assets/css/custom.css'],
  },

  /* --- Layout & UI Architecture --- */
  layout: {
    spa: true,
    breadcrumbs: true,
    menubar: {
      enabled: false,
      position: 'top',
    },
    header: {
      enabled: true,
    },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false,
    },
    optionsMenu: {
      position: 'header',
      components: {
        search: true,
        themeSwitch: true,
        sponsor: null,
      },
    },
    footer: {
      style: 'minimal',
      content: '© ' + new Date().getFullYear() + ' Stardial.',
      branding: true, // Config for "Built with docmd" badge
    },
  },

  /* --- Localization --- */
  i18n: {
    default: 'en',
    position: 'sidebar-top',
    locales: [
      {
        id: 'en',
        label: 'English',
        dir: 'ltr',
        translations: { editThisPage: 'Edit this page on GitHub' },
      },
      {
        id: 'zh',
        label: '简体中文',
        dir: 'ltr',
        translations: {
          onThisPage: '本页目录',
          previous: '上一页',
          next: '下一页',
          search: '搜索',
          toggleTheme: '切换主题',
          editThisPage: '在 GitHub 上编辑本页',
          selectLanguage: '选择语言',
          selectVersion: '选择版本',
          fallbackMessage:
            '此页面在 {active} 中尚不可用。显示默认语言 ({default})。',
        },
      },
      {
        id: 'zh-HK',
        label: '繁體中文',
        dir: 'ltr',
        translations: {
          onThisPage: '本頁目錄',
          previous: '上一頁',
          next: '下一頁',
          search: '搜索',
          toggleTheme: '切換主題',
          editThisPage: '在 GitHub 上編輯本頁',
          selectLanguage: '選擇語言',
          selectVersion: '選擇版本',
          fallbackMessage:
            '此頁面在 {active} 中尚不可用。顯示默認語言 ({default})。',
        },
      },
    ],
  },

  /* --- Versioning --- */
  versions: {
    current: '1.3',
    position: 'sidebar-top',
    all: [
      {
        id: '1.3',
        dir: 'docs', // Source directory for latest version
        label: '1.3.2',
      },
    ],
  },

  /* --- Plugins --- */
  // plugins: {
  //   seo: {
  //     defaultDescription: 'Documentation of Star Path Viewer.',
  //     openGraph: { defaultImage: '' },
  //     twitter: { cardType: 'summary_large_image' },
  //   },
  //   sitemap: { defaultChangefreq: 'weekly' },
  //   analytics: {
  //     googleV4: { measurementId: 'G-XXX' },
  //   },
  // },
});
