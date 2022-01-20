// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "It's Just Like Normal Mode?",
  tagline: "Wait, how did I die?",
  url: "https://manbeardgames.com/",
  baseUrl: "/its-just-like-normal-mode/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/spriggan.png",
  organizationName: "manbeardgames", // The Github account/user/org
  projectName: "its-just-like-normal-mode", //   The Github Repo
  deploymentBranch: "gh-pages",
  trailingSlash: true,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        //  Disable blog, don't need it
        blog: false,
        theme: { customCss: require.resolve("./src/css/custom.css") },
      }),
    ],
  ],

  plugins: [
    'plugin-image-zoom'
  ],

  themeConfig: {
    /* Common Configs */
    defaultMode: "dark",
    disableSwitch: true,
    respectPrefersColorScheme: false,
    // switchConfig: {},
    image: "img/",
    //  metaData: [{}],

    /* Navbar Config */
    navbar: {
      title: "It's Just Like Normal Mode",
      logo: {
        alt: "Spriggan Logo",
        src: "img/spriggan.png",
        height: "40px",
      },
      hideOnScroll: false,
      style: "dark",
      items: [
        {
          type: "doc",
          docId: "schedule",
          label: "Schedule",
          position: "left",
        },
        {
          type: "doc",
          docId: "roster",
          label: "Roster",
          position: "left",
        },
        {
          type: "doc",
          docId: 'raid-plans',
          label: "Raid Plans",
          position: "left",
        },
        {
          type: "doc",
          docId: "docs-start",
          label: "Static Resources",
          position: "left",
        },
        {
          type: "doc",
          docId: "logs",
          label: "Logs",
          position: "left",
        },
      ],
    },

    /* Prism Codeblock Config */
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },

    /* Footer Config */
    footer: {
      logo: {
        alt: "It's Just Like Normal Mode",
        src: "img/spriggan.png",
        height: 150,
        href: "/",
      },
      copyright: ` Created With ❤️ By ManBeardGames.<br/>Built with Docusaurus.<br />Copyright © ${new Date().getFullYear()}`,
    },

    /* Zoom Plugin Config */
    zoomSelector: '.markdown img',
  },
};

module.exports = config;
