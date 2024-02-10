import ImageElement from "../components/BannerImage";
import Footer from "../components/Footer";
import SignUpForm from "./compoents/SignUpBox";

const page = () => {
  return (
    <>
      <div className="text-white w-full h-fit bg-black">
        <div className="grid grid-cols-1 min-h-screen">
          <div className="grid lg:grid-cols-2">
            <div className="lg:order-2 flex w-full justify-center items-center lg:pl-10">
              <SignUpForm />
            </div>
            <div className="lg:order-1 min-h-[500px]">
              <ImageElement />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 w-full flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
