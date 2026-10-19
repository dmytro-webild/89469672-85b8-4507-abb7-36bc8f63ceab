import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Maintenance",
    "href": "#maintenance"
  }
];

  return (
    <StyleProvider buttonVariant="elastic" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="RedlineWebCo"
      ctaButton={{
        text: "(615) 852-8670",
        href: "tel:+16158528670",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "redlinewebco@gmail.com",
              href: "mailto:redlinewebco@gmail.com",
            },
            {
              label: "(615) 852-8670",
              href: "tel:+16158528670",
            },
            {
              label: "Hours: 9am-5pm",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 RedlineWebCo. All rights reserved."
      rightText="Local web solutions in Clarksville, TN."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
