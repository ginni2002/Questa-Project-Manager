import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProjectList = () => {
  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
        <section className="filterSection">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl -tracking-wider">filters</p>
              <Button></Button>
            </div>
          </Card>
        </section>
        <section className="projectListSection"></section>
      </div>
    </>
  );
};

export default ProjectList;
