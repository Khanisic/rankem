const AuthLayout = ({
    children
  }: {
    children: React.ReactNode
  }) => {
    return ( 
      <div className="h-screen flex items-center justify-center">
        <p className="font-chill text-3xl text-peach">hey, put the title and description here please</p>
        {children}
      </div>
     );
  }
   
  export default AuthLayout;