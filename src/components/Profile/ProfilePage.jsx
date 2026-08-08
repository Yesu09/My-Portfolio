import Leftsection from "./LeftSection";
import Middlesection from "./MiddleSection";
import Rightsection from "./RightSection";

export function Profile() {
  return (
    <section
      id="Profile"
      className="
        relative
        min-h-screen
        w-full
        scroll-mt-24
        overflow-hidden
        px-4
        pt-10
        pb-12
        sm:px-6
        sm:pt-24
        lg:px-10
        lg:pt-10
        lg:pb-10
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-14
          sm:gap-16
          lg:min-h-[calc(100vh-5rem)]
          lg:flex-row
          lg:gap-8
          xl:gap-12
        "
      >
        {/* Left Section */}
        <div
          className="
            flex
            w-full
            justify-center
            lg:w-1/3
            lg:justify-start
          "
        >
          <Leftsection />
        </div>

        {/* Middle Section */}
        <div
          className="
            flex
            w-full
            justify-center
            lg:w-1/3
          "
        >
          <Middlesection />
        </div>

        {/* Right Section */}
        <div
          className="
            flex
            w-full
            justify-center
            lg:w-1/3
          "
        >
          <Rightsection />
        </div>
      </div>
    </section>
  );
}

export default Profile;
