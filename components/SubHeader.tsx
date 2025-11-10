import Link from "next/link";

const SubHeader = () => {
  return (
    <div className="space-x-5">
      <Link href="/sign-in">Sign In</Link>
      <Link href="/sign-up">Sign Up</Link>
      <Link href="/forget-password">Forget Password</Link>
    </div>
  );
};

export default SubHeader;
