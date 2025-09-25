import { Button } from "@heroui/react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <h1 className="text-5xl text-default-700">Hello, Next.js!</h1>
      <p className="text-center text-xl text-default-600">
        Lorem ipsum sit dolor amet
      </p>
      <Button variant="solid" color="success" size="lg">
        Test
      </Button>
    </div>
  );
}
