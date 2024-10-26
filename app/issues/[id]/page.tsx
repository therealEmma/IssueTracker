import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from 'react-markdown';

interface Props {
  params: { id: string };
}

const IssuesDetailPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my={"2"}>
        <p>{issue.status}</p>
        <Text>{issue.CreatedAt.toDateString()}</Text>
      </Flex>
      <Card>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssuesDetailPage;
