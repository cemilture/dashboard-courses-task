import Image from "next/image";
import profilePhoto from "./cemilture.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HandleLogout } from "../authUtils";

export const metadata = {
  title: "Manage Courses",
  description: "Generated by create next app",
};

const DashboardPage = ({ children }) => {
  // const router = useRouter();

  const handleLogout = () => {
    return <Link href="/login" />;
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <p className="text-lg font-semibold">Manage Courses</p>
        <div className="text-center mb-24">
          <Image
            className="rounded-full mx-auto"
            src={profilePhoto}
            alt="My Profile Photo"
            width={100}
            height={100}
          />
          <p className="mt-2 text-sm">Admin</p>
        </div>
        <div className="space-y-2">
          <ul>
            <li>
              <Link
                className="text-gray-300 hover:text-white"
                href="/dashboard"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-white"
                href="/dashboard/course"
              >
                Course
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-white"
                href="/dashboard/students"
              >
                Student
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-white"
                href="/dashboard/payment"
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-white"
                href="/dashboard/report"
              >
                Report
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-300 hover:text-white"
                href="/dashboard/settings"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-96">
          <Link className="text-white hover:text-gray-300" href="/">
            Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default DashboardPage;
