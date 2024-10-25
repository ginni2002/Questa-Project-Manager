import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";

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
              <DotFilledIcon />
              <p className="text-sm text-gray-400">Fullstack</p>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button>
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
