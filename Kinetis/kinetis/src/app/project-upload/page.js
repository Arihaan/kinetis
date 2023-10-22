import ProjectUploadForm from "../components/ProjectUploadForm";

export const metadata = {
  title: "Upload a Project",
  description: "A decentralized Bitcoin crowdfunding application",
};

export default function UploadProject() {
  return (
    <div className="min-h-screen text-white bg-black">
      <h2 className="my-6 text-3xl text-center"><strong>The next big thing?</strong></h2>
      <ProjectUploadForm />
    </div>
  );
}

