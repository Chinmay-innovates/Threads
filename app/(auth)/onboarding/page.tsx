import Accountprofile from "@/components/forms/Accountprofile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();
  const userInfo = {};
  const userData = {
    id: user?.id,
    objectId: userInfo?.id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || userInfo.imageUrl,
  };
  return (
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>on boarding</h1>
      <p className='mt-3 text-base-regular text-light-2'>
        Complete your profile now to use Threads
      </p>
      <section className='mt-9 bg-dark-2 p-10'>
        <Accountprofile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}
export default Page;
