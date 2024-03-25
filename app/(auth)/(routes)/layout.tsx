const AuthLayout = ({
    children
  }: {
    children: React.ReactNode
  }) => {
    return ( 
      <div className="h-screen flex items-center justify-center bg-black">
        <p className="font-chill text-3xl text-peach">Hey, put the title and description here please</p>
        {children}
      </div>
     );
  }
   
  export default AuthLayout;