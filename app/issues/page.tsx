import { Button, Link } from "@radix-ui/themes"

const IssuesPage = () => {
  return (
    <div>
        <Button>
            <Link href="/issues/new">New Issues</Link>
        </Button>
    </div>
  )
}

export default IssuesPage