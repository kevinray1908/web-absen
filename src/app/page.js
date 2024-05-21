import { Card, CardBody } from "@nextui-org/react";
import Nav from "./components/Utilities/Navbar/page";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center p-4">
        <Card className="w-full md:w-auto mb-4">
          <CardBody>
            <h1 className="font-bold text-center">ABSEN</h1>
            <p>
              Absen is a platform that provides an excellent online learning experience for students, with many features and easy to use and has a good user experience. All learning is neatly arranged, so that students will feel comfortable to study online.
            </p>
          </CardBody>
        </Card>
        <div className="w-full md:w-auto flex justify-center items-center">
          <Image
            width={2000}
            height={2000}
            alt="absensi"
            src="/images/absen.jpg"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
