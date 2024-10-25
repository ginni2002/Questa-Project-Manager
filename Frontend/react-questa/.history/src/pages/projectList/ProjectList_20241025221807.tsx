import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";

// types
type ProductCategory = "all" | "fullstack" | "frontend" | "backend";

type Tags =
  | "all"
  | "react"
  | "nextjs"
  | "spring boot"
  | "mysql"
  | "mongodb"
  | "angular"
  | "python"
  | "flask"
  | "django";

type FilterValue = ProductCategory | Tags;

interface FilterChangeProps {
  section: "category" | "tags";
  value: FilterValue;
}
// Constants to be captialized
const TAGS_ARR: Tags[] = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django",
];

// For display purposes, you might want to create a mapping for proper capitalization
//(case sensitivity matters in TypeScript)
const TAG_LABELS: Record<Tags, string> = {
  all: "All",
  react: "React",
  nextjs: "Next.js",
  "spring boot": "Spring Boot",
  mysql: "MySQL",
  mongodb: "MongoDB",
  angular: "Angular",
  python: "Python",
  flask: "Flask",
  django: "Django",
};

const ProjectList = () => {
  const handleFilterChange = ({ section, value }: FilterChangeProps): void => {
    console.log("Filter type:", section);
    console.log("Selected value:", value);
  };
  const handleSearchChange = () => {};
  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
        <section className="filterSection">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl -tracking-wider">filters</p>
              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>
            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[70vh]">
                {/*------------------ Learn onChange Typescript ------------------*/}
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(param: ProductCategory) =>
                        handleFilterChange({
                          section: "category",
                          value: param,
                        })
                      }
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor="r1">All</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="fullstack" id="r2" />
                        <Label htmlFor="r2">Fullstack</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="frontend" id="r3" />
                        <Label htmlFor="r3">Frontend</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="backend" id="r4" />
                        <Label htmlFor="r4">Backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                {/*--------------------- Learn onChange Typescript + Mapping ----------------------*/}
                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tags</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(param: Tags) =>
                        handleFilterChange({
                          section: "tags",
                          value: param,
                        })
                      }
                    >
                      {TAGS_ARR.map((item: Tags) => (
                        <div key={item} className="flex items-center gap-2">
                          <RadioGroupItem value={item} id={`r1-${item}`} />
                          <Label htmlFor={`r1-${item}`}>
                            {TAG_LABELS[item]}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
        <section className="projectListSection w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center pb-5 justify-between">
            <div className="relative p-0 w-full">
              <Input
                onChange={handleSearchChange}
                placeholder="Search project"
                className="40% px-9"
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4" />
            </div>
          </div>
          <div className="space-y-5 min-h-[74vh]"></div>
        </section>
      </div>
    </>
  );
};

export default ProjectList;
