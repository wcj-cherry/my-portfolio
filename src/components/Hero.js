export default function Hero() {
  return (
      <div className="h-screen flex flex-col justify-center items-center text-center 
    bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold">Hi, I&apos;m Sujit 👋</h1>
      <p className="mt-4 text-xl">Java Developer | React Enthusiast | Spring Boot Pro</p>
      <a
        href="/contact"
        className="mt-6 px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100"
      >
        Contact Me
      </a>
    </div>
  );
}
