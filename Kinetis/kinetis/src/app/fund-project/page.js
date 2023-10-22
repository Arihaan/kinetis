import ProjectUploadForm from "../components/ProjectUploadForm";

export const metadata = {
  title: "Fund Projects",
  description: "A decentralized Bitcoin crowdfunding application",
};

export default function FundProjects() {
  return (
    <div class="w-2/3 mx-auto">
  <table class="w-full">
    <thead>
      <tr class="mb-8">
        <th class="py-2 px-6 text-left">Project Name</th>
        <th class="py-2 px-6 text-left">Project Description</th>
        <th class="py-2 px-6 text-right">Amount Funded</th>
        <th class="py-2 px-6 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr class="mb-8">
        <td class="py-2 px-6 text-left">Project Alpha</td>
        <td class="py-4 px-6 text-left">Help us develop a new mobile app that makes life easier for everyone.</td>
        <td class="py-2 px-6 text-right">$5,000</td>
        <td class="py-2 px-6 text-center">
          <button class="bg-blue-500 hover:bg-green-700 text-white py-1 px-2 rounded">Donate</button>
        </td>
      </tr>
      <tr class="mb-8">
        <td class="py-2 px-6 text-left">Project Beta</td>
        <td class="py-4 px-6 text-left">Support our eco-friendly gardening initiative to save the planet.</td>
        <td class="py-2 px-6 text-right">$2,500</td>
        <td class="py-2 px-6 text-center">
          <button class="bg-blue-500 hover:bg-green-700 text-white py-1 px-2 rounded">Donate</button>
        </td>
      </tr>
      <tr class="mb-8">
        <td class="py-2 px-6 text-left">Project Gamma</td>
        <td class="py-4 px-6 text-left">Fund the next big breakthrough in renewable energy technology.</td>
        <td class="py-2 px-6 text-right">$8,000</td>
        <td class="py-2 px-6 text-center">
          <button class="bg-blue-500 hover:bg-green-700 text-white py-1 px-2 rounded">Donate</button>
        </td>
      </tr>
      <tr class="mb-8">
        <td class="py-2 px-6 text-left">Project Delta</td>
        <td class="py-4 px-6 text-left">Help us create a safe haven for abandoned animals in need.</td>
        <td class="py-2 px-6 text-right">$3,200</td>
        <td class="py-2 px-6 text-center">
          <button class="bg-blue-500 hover:bg-green-700 text-white py-1 px-2 rounded">Donate</button>
        </td>
      </tr>
      <tr class="mb-8">
        <td class="py-2 px-6 text-left">Project Epsilon</td>
        <td class="py-4 px-6 text-left">Support a local artist's dream to produce stunning sculptures.</td>
        <td class="py-2 px-6 text-right">$1,800</td>
        <td class="py-2 px-6 text-center">
          <button class="bg-blue-500 hover:bg-green-700 text-white py-1 px-2 rounded">Donate</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  );
}

