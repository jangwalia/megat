import React from "react";

type Params = Promise<{ id: string }>;

async function BlogPage({ params }: { params: Params }) {
  const { id } = await params;

  return <div>BlogPage for {id}</div>;
}

export default BlogPage;
