import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";
import Footer from "./quartz/components/Footer";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'zzzzzllllllaaaa/hy',
        // from data-repo-id
        repoId: 'R_kgDOMnTYoA',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOMnTYoM4Ch4Np',
      }
    }),
  ],
  footer: Footer({
    links: [
      {
        label: "赣ICP备2024041153号",
        url: "https://beian.miit.gov.cn/",
        icon: "https://pic.imgdb.cn/item/66ea4461f21886ccc02590f6.png" // 替换为外部图标链接
      },
      {
        label: "赣公网安备36078102000165号",
        url: "https://beian.mps.gov.cn/#/query/webSearch",
        icon: "https://pic.imgdb.cn/item/66ea452af21886ccc027e024.png" // 替换为外部图标链接
      },
      {
        label: "先空着",
        url: "",
        icon: "https://pic.imgdb.cn/item/66ea40c3f21886ccc01d5828.png" // 替换为外部图标链接
      },
    ]
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
