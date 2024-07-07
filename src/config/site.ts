export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  learnDropdownItems: [
    {
      label: "Quiz",
      url: "/quiz",
      icon: "list"
    },
    {
      label: "Fiszki",
      url: "/",
      icon: "fish"
    },
    {
      label: "Podsumowanie",
      url: "/",
      icon: "pie-chart"
    }
  ],
  subjectItems: [
    {
      title: "Ekonomia"
    },
    {
      title: "Matematyka"
    },
    {
      title: "Informatyka"
    }
  ]
}
