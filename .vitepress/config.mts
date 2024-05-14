import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Deep Learning",
  description: "Systematizing the machine learning knowledge",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Start Learning", link: "/zero-to-autoencoder" },
    ],
    sidebar: [
      {
        text: "Projects",
        items: [
          {
            text: "Autoencoder as classifier",
            link: "/zero-to-autoencoder",
          },
        ],
      },
      {
        text: "Math",
        items: [{ text: "Norms", link: "/norms" }],
      },
      {
        text: "Theory",
        items: [
          {
            text: "Dropout",
            link: "/dropout",
          },
          {
            text: "Regularization",
            link: "/regularization",
          },
          {
            text: "Adam",
            link: "/adam",
          },
          {
            text: "Moving Averages",
            link: "/moving-averages",
          },
        ],
      },
      {
        text: "External resources",
        items: [
          {
            text: "Books",
            link: "/books",
          },
          {
            text: "Courses",
            link: "/courses",
          },
          {
            text: "Papers",
            link: "/papers",
          },
        ],
      },
      {
        text: "Roadmap",
        link: "/roadmap",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jmaczan/deep-learning" },
      { icon: "twitter", link: "https://twitter.com/jedmaczan" },
    ],
  },
});
