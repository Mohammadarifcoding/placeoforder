import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ navigations }) => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[pathname.split("/").length - 1];

  const slugify = (slug) => slug.toLowerCase().split(" ").join("-");

  return (
    <div className="fixed top-0 left-0 hidden w-[235px] h-screen py-3 overflow-y-auto bg-slate-100 lg:block">
      <Accordion type="single" collapsible>
        {navigations?.map((navigation, index) => (
          <AccordionItem
            className="border-b-0"
            key={index}
            value={`item-${index}`}
          >
            {navigation.content ? (
              <AccordionTrigger
                className={"py-1.5 px-3"}
                arrow={navigation.content}
              >
                {navigation.trigger}
              </AccordionTrigger>
            ) : (
              <Link to={`${slugify(navigation.trigger)}`}>
                <AccordionTrigger icon={false} className="py-1.5 px-3">
                  {navigation.trigger}
                </AccordionTrigger>
              </Link>
            )}

            {navigation.content &&
              navigation.content.map((route) => (
                <Link key={route} to={`${slugify(route)}`}>
                  <AccordionContent
                    className={cn("py-2 px-3 border-b hover:bg-slate-300", {
                      "bg-slate-200 hover:bg-slate-200 text-primary":
                        currentPath === slugify(route),
                    })}
                  >
                    {route}
                  </AccordionContent>
                </Link>
              ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
