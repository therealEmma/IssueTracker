"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuesPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState('');

  // This function is called when the form is submitted
  const onSubmit = async (data: IssueForm) => {
    try {
      // Sending the form data to the API
      await axios.post('/api/issues', data);

      // Redirecting the user to the /issues page after successful submission
      router.push('/issues');
    } catch (error) {
      // You can handle any error here, like showing an alert
      setError('An unexpected error occured');
    }
  };

  return (
    <div className="max-w-xl">
      {error && (<Callout.Root color="red" className="mb-5">
        <Callout.Text>{error}</Callout.Text>
      </Callout.Root>)}
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  );
};

export default NewIssuesPage;
