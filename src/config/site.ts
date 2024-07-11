export type SiteConfig = typeof siteConfig;
import { ekonomiaSubject, informatykaSubject } from "@/data/config";

export const siteConfig = {
  learnDropdownItems: [
    {
      label: "Quiz",
      url: "/learn",
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
      title: "Ekonomia",
      route: "/learn/ekonomia",
      data: ekonomiaSubject
    },
    {
      title: "Informatyka",
      route: "/learn/informatyka",
      data: informatykaSubject
    }

  ]
}
