import Link from "next/link";

export default function NotFound({ Heading }: { Heading?: string }) {
  return (
    <main className="h-[80vh] w-full flex flex-col justify-center items-center bg-background">
      {Heading && <h1 className="text-4xl font-bold mb-4">{Heading}</h1>}
      <div className="bg-primary px-2 text-base rounded transform rotate-[24deg] absolute">
        Page Not Found
      </div>
      <h1 className="text-[20vh] font-extrabold tracking-widest">404</h1>
      <Link
        href="/"
        passHref
        className="relative inline-block group focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-primary group-hover:bg-white group-hover:translate-y-0.5 group-hover:translate-x-0.5 "></span>
        <span className="relative block px-8 py-3 bg-background font-bold group-hover:bg-teal-700 text-sm group-hover:text-white border border-primary">
          HOME
        </span>
      </Link>
    </main>
  );
}
