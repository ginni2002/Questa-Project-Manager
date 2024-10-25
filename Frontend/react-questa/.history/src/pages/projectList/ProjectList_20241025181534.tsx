import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";

const ProjectList = () => {
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
            <CardContent className="mt-5"></CardContent>
          </Card>
        </section>
        <section className="projectListSection"></section>
      </div>
    </>
  );
};

export default ProjectList;
