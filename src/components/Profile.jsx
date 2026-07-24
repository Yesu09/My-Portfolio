import Leftsection from "./Profile/LeftSection";
import Middlesection from "./Profile/MiddleSection";
import Rightsection from "./Profile/RightSection";

export function Profile() {
    return (
        <section className="min-h-[calc(100vh-80px)] px-6 py-10 lg:px-16">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-3">

                {/* Left Section */}
                <Leftsection />
                {/* Middle Section */}
                <Middlesection />

                {/* Right Section */}
                <Rightsection />
            </div>
        </section>
    )
}

export default Profile