"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuesPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  // This function is called when the form is submitted
  const onSubmit = async (data: IssueForm) => {
    try {
      // Sending the form data to the API
      await axios.post('/api/issues', data);

      // Redirecting the user to the /issues page after successful submission
      router.push('/issues');
    } catch (error) {
      // You can handle any error here, like showing an alert
      console.error("Failed to submit issue:", error);
    }
  };

  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField.Root placeholder="Title..." {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description…" {...field} />
        )}
      />
      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuesPage;
