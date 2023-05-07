interface LProps {
  title: string;
  href: string;
}

interface FProps {
  name: string;
  links: LProps[];
}

export const footerLinks: FProps[] = [
  {
    name: "Company",
    links: [
      {
        title: "About",
        href: "#",
      },
      {
        title: "Contact us",
        href: "#",
      },
      {
        title: "Support",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
    ],
  },
  {
    name: "Quick Link",
    links: [
      {
        title: "Share Location",
        href: "#",
      },
      {
        title: "Orders Tracking",
        href: "#",
      },
      {
        title: "Size Guide",
        href: "#",
      },
      {
        title: "FAQs",
        href: "#",
      },
    ],
  },
  {
    name: "Legal",
    links: [
      {
        title: "Terms & conditions",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
    ],
  },
];
