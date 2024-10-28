import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
//types
interface IssueListProps {
  status: "pending" | "completed" | "in-progress";
  title: string;
}

const IssueList: React.FC<IssueListProps> = ({ status, title }) => {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          <CardHeader>
            <CardTitle>
              {title} =={status}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className="space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <IssueCard key={item} />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
            <VisuallyHidden>
              <DialogDescription>
                Create a new issue if you want :D
              </DialogDescription>
            </VisuallyHidden>
          </DialogHeader>
          <CreateIssueForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
