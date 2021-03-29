export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "60617610baa0352369a6a08a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-cms-studio-q1tm1b9j",
                  apiId: "7430898e-3d58-4125-870d-3d9b3fe50377",
                },
                {
                  buildHookId: "60617610fd0e7c0622baa7bc",
                  title: "Blog Website",
                  name: "sanity-gatsby-cms-web",
                  apiId: "396f073d-7800-4983-9615-a700be4ac921",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/Bwouno/sanity-gatsby-cms",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-cms-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
