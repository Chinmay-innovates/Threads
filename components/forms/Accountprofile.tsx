"use client";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
const Accountprofile = ({ user, btnTitle }: Props) => {
  return <div></div>;
};

export default Accountprofile;
