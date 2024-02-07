import Image from "next/image";
import plumber from "@/public/assets/plumber.jpg";
import Link from "next/link";

export default function DashboardRootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <aside className="flex sticky top-0 flex-col min-w-64 h-screen px-4 py-8 overflow-y-auto bg-black border-r rtl:border-r-0 rtl:border-l">
        <h2 className="text-center text-white text-3xl font-semibold">
          Skill Frontend
        </h2>
        <div className="flex flex-col items-center mt-6 -mx-2 text-white">
          <Image
            className="object-cover w-24 h-24 mx-2 rounded-full"
            width="96"
            height="96"
            src={plumber}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium">John Doe</h4>
          <p className="mx-2 mt-1 text-sm font-medium">john@example.com</p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6 text-white">
          <nav>
            <Link
              className="flex items-center px-4 py-2 rounded-lg"
              href="/dashboard"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">Dashboard</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5"
              href="/dashboard/adminProfile"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">My Profile</span>
            </Link>
          </nav>
        </div>
      </aside>
      {children}
    </div>
  );
}
