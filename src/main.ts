import { mount } from "svelte";
import "./app.css";
import Seshop from "./sites/Seshop.svelte";
import Booklog from "./sites/Booklog.svelte";

console.log(window.location.href);

const sites = [
  // {
  //   matcher: /^https:\/\/www\.google\.com/,
  //   element: () => document.body,
  //   component: App,
  // },
  {
    matcher: /^https:\/\/www\.seshop\.com\/product\/detail\/.*/,
    element: () => {
      const h1 = document.querySelector(
        "#top > div.container.cx_container_contents > section:nth-child(2) > h1",
      )!;
      const app = document.createElement("div");
      h1.insertAdjacentElement("afterend", app);
      return app;
    },
    component: Seshop,
  },
  {
    matcher: /^https:\/\/booklog\.jp\/item\/1\/.*/,
    element: () => {
      // desktop
      let h1 = document.querySelector(
        "#item-area > div.inner > div.item-info-area > h1",
      );

      if (!h1) {
        // mobile
        h1 = document.querySelector(
          "#main > div > section.item-area.ruled-line.b20P > div.item-info-container > div.right-area > h1",
        );
      }

      const app = document.createElement("div");
      h1!.insertAdjacentElement("afterend", app);
      return app;
    },
    component: Booklog,
  },
] as const;

const app = (() => {
  const href = window.location.href;

  const site = sites.find((site) => href.match(site.matcher));
  if (site) {
    mount(site.component, {
      target: (() => {
        return site.element();
      })(),
    });
  }
})();

export default app;
