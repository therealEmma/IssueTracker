import { Button, Link } from "@radix-ui/themes";
import React from "react";

const IssuesAction = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/issues/new">New Issues</Link>
      </Button>
    </div>
  );
};

export default IssuesAction;
