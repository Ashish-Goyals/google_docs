import Link from "next/link";
const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      Click{" "}
      <Link href="/documents/123s" className="text-blue-500 hover:underline">
        {" "}
        &nbsp; &nbsp;
        <span className="text-blue-500 underline">here</span>
      </Link>
      &nbsp; to get document id.
    </div>
  );
};

export default Home;
