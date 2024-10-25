import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

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
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                  <div className="pt-5">
                    <RadioGroup
                      defaultValue="all"
                      onValueChange={(value: ProductCategory) =>
                        handleFilterChange({
                          section: "category",
                          value: value,
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

                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tags</h1>
                  <div className="pt-5">
                    <RadioGroup
                      defaultValue="all"
                      onValueChange={(value: Tags) =>
                        handleFilterChange({
                          section: "tags",
                          value: value,
                        })
                      }
                    >
                      {tags.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <RadioGroupItem value={item} id={`r1-${item}`} />
                          <Label htmlFor={`r1-${item}`}>{item}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
        <section className="projectListSection w-full lg:w-[48rem]"></section>
      </div>
    </>
  );
};

export default ProjectList;
