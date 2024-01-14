import Image from "next/image";

//icon
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/VisheshRajput.pdf"; // Replace with the correct path
    downloadLink.download = "VisheshRajput.pdf";
    downloadLink.click();
  };
  return (
    <div className="mx-auto xl:mx-0">
      <div
        onClick={handleDownload}
        className="cursor-pointer  relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group "
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] "
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300  " />
      </div>
    </div>
  );
};

export default ProjectsBtn;
