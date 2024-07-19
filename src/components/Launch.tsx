'use client';
import { useLaunch } from '@/features/launch/launch';

export default function Launch() {
  const { launches } = useLaunch();
  return <div className="container p-10">
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Mission Name
          </th>
          <th scope="col" className="px-6 py-3">
            Description
          </th>
        </tr>
        </thead>
        <tbody>
        {launches.map(launch => <tr key={launch.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {launch.mission_name}
          </th>
          <td className="px-6 py-4">
            {launch.details}
          </td>
        </tr>)}
        </tbody>
      </table>
    </div>
  </div>;
}