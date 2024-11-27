export const posts = [
  {
    id: "1",
    title: "Introduction to React",
    content:
      "React is a popular JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently update the user interface when data changes. React focuses on the view layer of an application, making it a great choice for building interactive and dynamic web applications.",
    image: "/introduction.jpeg",
  },

  {
    id: "2",
    title: "React vs Next.js",
    content:
      "React and Next.js are both powerful tools in web development, but they serve different purposes. React is a JavaScript library for building user interfaces, while Next.js is a framework built on top of React that offers additional features like server-side rendering, static site generation, and routing. Here's a breakdown of their differences:\n\n1. **Rendering**: React primarily uses client-side rendering, while Next.js supports both server-side rendering (SSR) and static site generation (SSG), which can improve performance and SEO.\n2. **Routing**: React doesn't include routing out of the box, but you can use third-party libraries like React Router. In contrast, Next.js provides a built-in routing system based on file structure, making it easier to handle pages and dynamic routes.\n3. **SEO**: Next.js provides better SEO out of the box due to its SSR and SSG capabilities, as search engines can crawl the pre-rendered content. React requires additional tools like React Helmet or manual SSR setup for SEO optimization.",
    image: "/vs.png",
  },
  {
    id: "3",
    title: "Server-Side Rendering (SSR) with Next.js",
    content:
      "Next.js introduces Server-Side Rendering (SSR), which means that pages are rendered on the server before being sent to the client. This provides several benefits, such as improved SEO and faster initial page load times. React, by default, does not support SSR, but it can be achieved using additional tools or server-side frameworks like Next.js.",
    image: "/server4.png",
  },

  {
    id: "4",
    title: "Static Site Generation (SSG) with Next.js",
    content:
      "Next.js supports Static Site Generation (SSG), where HTML is pre-rendered at build time and served to the client. This results in very fast load times and is ideal for content-driven sites like blogs or documentation. While React doesn't have built-in support for SSG, it can be used with static site generators like Gatsby to achieve similar results.",
    image: "/server4.png",
  },
  {
    id: "5",
    title: "React's Component-Based Architecture",
    content:
      "React's component-based architecture allows you to build reusable UI components, making the development process more efficient and maintainable. Components are the building blocks of React applications, allowing developers to manage and update the user interface in a declarative manner. Next.js builds on this architecture and adds powerful features like automatic routing and server-side rendering.",
    image: "/Component.jpg",
  },

  {
    id: "6",
    title: "Why Choose Next.js for Your Next Project?",
    content:
      "Next.js provides an all-in-one solution for building React applications, offering features like automatic code splitting, SSR, SSG, and API routes. This makes Next.js a great choice for projects that require fast performance, SEO optimization, and scalability. With Next.js, you can build applications ranging from static websites to complex web apps with minimal setup.",
    image: "/project.jpeg",
  },
];
