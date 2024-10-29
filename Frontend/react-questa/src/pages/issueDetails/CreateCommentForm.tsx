import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

// types
interface CommentFormProps {
  issueId: string | undefined;
}
interface ProjectFormData {
  content: string;
}

const CreateCommentForm: React.FC<CommentFormProps> = ({ issueId }) => {
  const form = useForm<ProjectFormData>({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data: ProjectFormData): void => {
    console.log("Create project data ", data);
  };
  return (
    <div>
      <Form {...form}>
        <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2">
                  <div>
                    <Avatar>
                      <AvatarFallback>
                        {/* remove later */}
                        {issueId}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="w-[20rem]"
                      placeholder="Add a comment..."
                    />
                  </FormControl>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCommentForm;
