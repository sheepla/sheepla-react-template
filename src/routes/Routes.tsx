import MainLayout from "@/layouts/MainLayout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    handle: { breadcrumb: "Home" },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
        handle: { breadcrumb: "About" },
      },
      {
        path: "contact",
        element: <ContactPage />,
        handle: { breadcrumb: "Contact" },
      },
    ],
  },
];
