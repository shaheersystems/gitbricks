import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Activity from "./components/Activity";
import Deployment from "./components/Deployment";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UpperBar from "./components/UpperBar";
function App() {
  const deployments = [
    {
      id: 1,
      name: "Planetaria",
      repo: "ios-app",
      status: "Preview",
      time: "3m ago",
    },
    {
      id: 2,
      name: "Planetaria",
      repo: "mobile-api",
      time: "1m 32s ago",
      status: "Production",
    },
    {
      id: 3,
      name: "Tailwind Labs",
      repo: "tailwindcss.com",
      time: "5m 54s ago",
      status: "Preview",
    },
    {
      id: 4,
      name: "Tailwind Labs",
      repo: "tailwindui.com",
      time: "1m 32s ago",
      status: "Production",
    },
    {
      id: 5,
      name: "Protocol",
      repo: "relay-service",
      time: "3h ago",
      status: "Production",
    },
    {
      id: 6,
      name: "Planetaria",
      repo: "android-app",
      time: "1d ago",
      status: "Preview",
    },
    {
      id: 7,
      name: "Protocol",
      repo: "api.protocol.chat",
      time: "2d ago",
      status: "Preview",
    },
    {
      id: 8,
      name: "Protocol",
      repo: "protocol.com",
      time: "32d ago",
      status: "Production",
    },
    {
      id: 9,
      name: "Planetaria",
      repo: "planet-scale",
      time: "34s ago",
      status: "Production",
    },
    {
      id: 10,
      name: "Tailwind Labs",
      repo: "heroicons",
      time: "128d ago",
      status: "Production",
    },
    {
      id: 11,
      name: "Tailwind Labs",
      repo: "tailblocks",
      time: "2m 34s ago",
      status: "Preview",
    },
  ];
  const activities = [
    {
      id: 1,
      branch: "main",
      token: "27c83",
      repo: "ios-app",
      time: "30s",
      user: {
        id: 2,
        name: "Wade Cooper",
        avatar:
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      branch: "main",
      token: "29jsd",
      repo: "mobile-api",
      time: "3m",
      user: {
        id: 2,
        name: "Arlene Mccoy",
        avatar:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      branch: "main",
      token: "cdd2d",
      repo: "ios-app",
      time: "4m",
      user: {
        id: 3,
        name: "Devon Webb",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      },
    },
    {
      id: 4,
      branch: "main",
      token: "dd3ac",
      repo: "tailwindui.com",
      time: "8m",
      user: {
        id: 4,
        name: "Tom Cook",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 5,
      branch: "main",
      token: "9da3c",
      repo: "relay-service",
      time: "1d",
      user: {
        id: 5,
        name: "Tanya Fox",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 6,
      branch: "main",
      token: "b3fac",
      repo: "api.protocol.chat",
      time: "2d",
      user: {
        id: 6,
        name: "Hellen Schmidt",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <div className='App'>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 pl-72'>
          <Header />
          <div className='flex w-full h-full'>
            <div className='flex-1 p-5'>
              <UpperBar />
              {deployments.map((deployment) => {
                return <Deployment key={deployment.id} {...deployment} />;
              })}
            </div>
            <div className='w-80 bg-gray-100 p-5 h-screen sticky top-0 bottom-0 z-10'>
              <div className='flex items-center justify-between p-2'>
                <div>
                  <p className='text-sm font-semibold'>Activity feed</p>
                </div>
                <div>
                  <a
                    href='/'
                    className='text-sm font-semibold text-indigo-600 flex items-center gap-2'
                  >
                    View all
                    <ArrowRightIcon height={16} />
                  </a>
                </div>
              </div>
              {activities.map((activity) => {
                return (
                  <Activity
                    key={activity.id}
                    branch={activity.branch}
                    token={activity.token}
                    repo={activity.repo}
                    user={activity.user.name}
                    avatar={activity.user.avatar}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
