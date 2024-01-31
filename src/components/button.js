

export default function Button({variant, text, onClick}) {

    // variant = "outlined" | "contained" | "text"
    const variantStyle = {
        "outlined": "border-2 border-solid border-white hover:bg-white hover:bg-opacity-20 text-white hover:text-secondary scale-105 hover:shadow-md transition duration-300 ease-in-out", 
        "contained": "bg-primary hover:bg-primary/80 text-white hover:text-secondary scale-105 hover:shadow-md transition duration-300 ease-in-out",
        "text": "hover:underline hover:text-primary scale-105 transition duration-300 ease-in-out"
    }[variant];

    return (
        <div className="flex justify-center items-center">
            <button className={`px-4 py-1 ${variantStyle} rounded-sm`} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}