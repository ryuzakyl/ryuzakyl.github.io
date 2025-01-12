import autoprefixer from "autoprefixer";
import katex from "rehype-katex";
import math from "remark-math";
import tailwind from "tailwindcss";

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victormendiolalau/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/ryuzakyl",
  },
  // padlet: {
  //   label: "Padlet",
  //   href: "https://padlet.com/about/us/wish/1072760846",
  // },
  email: {
    label: "Email",
    href: "mailto:ryuzakyl@gmail.com",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
  resume: {
    label: "Resume",
    href: "https://github.com/ryuzakyl/curriculum-vitae/releases/download/1.4.10/cv-en-industry-succinct.pdf",
  },
};

module.exports = {
  title: "Victor M. Mendiola Lau",
  tagline: "A Senior Software Engineer passionate about solving meaningful problems at scale.",
  url: "https://ryuzakyl.github.io",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "ryuzakyl",
  projectName: "ryuzakyl.github.io",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Victor M. Mendiola Lau",
      logo: {
        alt: "Victor M. Mendiola Lau",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        {
          href: "https://github.com/ryuzakyl/curriculum-vitae/releases/download/1.4.10/cv-en-industry-succinct.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            internetProfiles.linkedin,
            internetProfiles.github,
            // internetProfiles.padlet,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
            internetProfiles.resume,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `<a href="https://evantay.com">Design by Evan Tay</a> • Created by BitLeap, LLC • Updated ${new Date().toLocaleDateString()}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,

          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',

          // blogSidebarGroupMode: 'by-dates',
          // blogSidebarDate: 'YYYY/MM',

          // Please change this to your repo.
          editUrl: "https://github.com/ryuzakyl/portfolio-website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        // language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],
};
