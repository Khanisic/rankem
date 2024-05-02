const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen h-full w-full flex justify-center items-center bg-dark">
      <main className="bg-darkest py-20 px-4 md:p-20 rounded-xl flex flex-wrap gap-8 items-center justify-center">
        <div className="px-6 flex flex-col gap-2 md:gap-5">
          <p className="font-funky text-lavender text-4xl md:text-[96px]">Rank Em</p>
          <p className="font-chill text-white text-xl md:text-2xl">An application where you
            <span className="font-semibold text-jade font-funky"> rank </span>
            your friends based on <span className="font-semibold text-jade font-funky">categories</span> .</p>
        </div>

        {children}

      </main>
    </div>
  );
}

export default AuthLayout;