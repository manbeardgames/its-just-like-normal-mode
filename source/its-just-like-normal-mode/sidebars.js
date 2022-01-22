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
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/the-first-circle-savage",
      label: "Overview"
    },
    {
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/p1s-aetherial-shackles",
      label: "Aetherial Shackles"
    },
    {
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/p1s-fourfold-shackles",
      label: "Fourfold Shackles"
    },
    {
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/p1s-gaolers-flail",
      label: "Gaoler's Flail"
    },
    {
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/p1s-heavy-hand",
      label: "Heavy Hand"
    },
    {
      type: "category",
      label: "Intemperance",
      items: [
        {
          type: "doc",
          id: "pandaemonium-asphodelos/the-first-circle/p1s-intemperance-1",
          label: "First Intemperance Phase"
        },
        {
          type: "doc",
          id: "pandaemonium-asphodelos/the-first-circle/p1s-intemperance-2",
          label: "Second Intemperance Phase"
        }
      ]
    },
    {
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/p1s-pitiless-flail",
      label: "Pitiless Flail of Grace/Purgation"
    },
    {
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/p1s-shackles-of-time",
      label: "Shackles of Time"
    },
    {
      type: "category",
      label: "Shining Cells",
      items: [
        {
          type: "doc",
          id: "pandaemonium-asphodelos/the-first-circle/p1s-shining-cells-1",
          label: "First Shining Cells Phase"
        },
        {
          type: "doc",
          id: "pandaemonium-asphodelos/the-first-circle/p1s-shining-cells-2",
          label: "Second Shining Cells Phase"
        }
      ]
    },
    {
      type: "doc",
      id: "pandaemonium-asphodelos/the-first-circle/p1s-warders-wrath",
      label: "Warder's Wrath"
    },
    // {
    //   type: "autogenerated",
    //   dirName: "pandaemonium-asphodelos/the-first-circle",
    // }
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