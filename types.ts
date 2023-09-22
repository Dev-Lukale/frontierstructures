import { LinkItems } from "@/config/nav";

export type LinkItem = {
  name: string;
  href: string;
  disabled?: boolean;
};

export type SectionName = (typeof LinkItems)[number]["name"];
