/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /* tutorialSidebar: [{type: 'autogenerated', dirName: '.'}], */

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  p1sSidebar: [
    {
      type: "autogenerated",
      dirName: "pandaemonium-asphodelos/the-first-circle",
    }
  ],

  p3sSidebar: [
    {
      type: "autogenerated",
      dirName: "pandaemonium-asphodelos/the-third-circle",
    },
  ],

//   resourcesSidebar: [
//     {
//       type: "doc",
//       label: "Static Resources",
//       id: "docs-start",
//     },
    // {
    //   type: "category",
    //   label: "Pandaemonium Asphodelos",
    //   items: [
    //     {
    //       type: "category",
    //       label: "The Third Circle",
    //       items: [
    //         {
    //           type: "autogenerated",
    //           dirName: "pandaemonium-asphodelos/the-third-circle",
    //         },
    //       ],
    //     },
    //   ],
    // },
//   ],
};

module.exports = sidebars;
