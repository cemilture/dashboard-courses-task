import Link from "next/link";
import { RiLoginCircleLine } from "react-icons/ri";

const page = () => {
  return (
    <div
      className="container mx-auto mt-8 p-8"
      style={{ height: "88vh", marginTop: "7%" }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to My Dashboard Project!
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-center">
        What I have Learned
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Next.js Mastery</h3>
          <ul className="list-disc pl-4">
            <li>Next.js Fundamentals</li>
            <li>Dynamic Routing</li>
            <li>Static Routing</li>
            <li>Server Side Rendering (SSR)</li>
            <li>Client Side Rendering (CSR)</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Advanced Features</h3>
          <ul className="list-disc pl-4">
            <li>Middleware Usage</li>
            <li>Authorization</li>
            <li>Cookie Management</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            Axios for Data Operations
          </h3>
          <ul className="list-disc pl-4">
            <li>Data Fetching with Axios</li>
            <li>
              CRUD Operations (Create, Read, Update, Delete) -On the Students
              page-
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Robust Error Handling</h3>
          <ul className="list-disc pl-4">
            <li>Error Handling</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            UI/UX with Tailwind CSS
          </h3>
          <ul className="list-disc pl-4">
            <li>Tailwind CSS Styling</li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-center">
        Thank You for Visiting!
      </h2>

      <div className="mt-6">
        <p>
          <Link
            href="/login"
            className="flex items-center justify-center bg-gray-500 text-white px-4 py-2 rounded-full"
          >
            <RiLoginCircleLine className="mr-2" size={20} />
            Login to Explore
          </Link>
        </p>
        <p className="mt-2 text-gray-500 text-center">
          You can use this login information: <br />
          Email: admin@admin <br />
          Password: admin
        </p>
        <p className="mt-2 text-gray-500 text-center">
          made by
          <Link
            className="font-bold"
            href="https://www.linkedin.com/in/cemilture/"
            target="_blank"
          >
            {" "}
            cemilture
          </Link>{" "}
          with next js
        </p>
      </div>
    </div>
  );
};

export default page;
