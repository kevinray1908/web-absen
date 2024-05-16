import { Card, CardBody } from "@nextui-org/react";
import Nav from "./components/Utilities/Navbar/page";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center p-4">
        <Card width={500} height={500}>
          <CardBody >
            <h1 className="font-bold">ABSEN</h1>
            <p>Absen is a platform that provides an excellent online learning experience for students, with many features and easy to use and has a good user experience.
              All learning is neatly arranged, so that students will feel comfortable to study online.</p>
          </CardBody>
        </Card>
        <div style={{ marginLeft: "20px" }}>
          <Image
            width={2000}
            height={2000}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
