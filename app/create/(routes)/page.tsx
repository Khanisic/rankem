const Create = () => {
    // Inline style object for the highlighted names and code
    const highlightStyle = {
        backgroundColor: '#6655cc',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.375rem',
        color: 'white',
    };

    // Optional: You can customize this style for the code if needed
    const codeStyle = {
        ...highlightStyle, // This will copy all the styles from highlightStyle
        display: 'inline-block', // Making sure it does not stretch full width
        marginTop: '1rem', // Optional: if you want to add some space on top
    };

    return (
        <div className="h-screen w-full flex justify-center items-center bg-dark px-5 md:px-10">
            <main className="bg-darkest py-10 px-4 md:p-16 rounded-xl flex flex-wrap gap-8 items-start justify-center w-full">

                {/* Code with background */}
                <div className="w-full flex justify-center">
                    <span style={codeStyle}>Code: 123456</span>
                </div>

                <div className="flex w-full justify-between">
                    <div className="flex-1">
                        <h2 className="text-white font-funky text-lg mb-3">Friends: 1</h2>
                        <div className="bg-deepdark p-3 rounded">
                            <div className="flex items-center justify-between">
                                {/* Inline style applied here */}
                                <span style={highlightStyle}>1. John Doe</span>
                                <button className="text-yellow-500">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-white font-funky text-lg mb-3">Categories</h2>
                        <div className="bg-deepdark p-3 rounded">
                            <div className="flex items-center justify-between">
                                {/* Inline style applied here */}
                                <span style={highlightStyle}>1. Funniest</span>
                                <button className="text-yellow-500">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-white font-funky text-center mt-4 w-full">4 more friends required to create</p>

                <div className="flex w-full justify-center">
                    <button className="bg-yellow-500 text-white py-2 px-8 font-funky rounded-full mt-8">
                        Create
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Create;
