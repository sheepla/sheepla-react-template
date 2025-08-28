import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useMatches, type Params, type UIMatch } from "react-router-dom";

type BreadcrumbHandle = {
  breadcrumb: string | ((params: Params<string>) => string);
};

const DynamicBreadcrumbs = () => {
  const matches = useMatches() as UIMatch<unknown, BreadcrumbHandle>[];

  const crumbs = matches
    .filter((match) => match.handle?.breadcrumb)
    .map((match) => {
      const { breadcrumb } = match.handle!;

      const crumb =
        typeof breadcrumb === "function"
          ? breadcrumb(match.params)
          : breadcrumb;

      return {
        pathname: match.pathname,
        breadcrumb: crumb,
      };
    });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((c, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <BreadcrumbItem key={c.pathname}>
              {index > 0 && <BreadcrumbSeparator />}
              {isLast ? (
                <BreadcrumbPage>{c.breadcrumb}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={c.pathname}>{c.breadcrumb}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumbs;
