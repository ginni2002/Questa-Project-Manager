import { Card } from "@/components/ui/card";

const ProjectCard = () => {
  return (
    <Card className="p-5 w-full lg:max-w-3xl">
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              <h1 className="cursor-pointer font-bold text-lg">
                Create Ecommerce Project
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
