const ServiceList = ({ title, onServiceClick }) => {
    // First Column
    const column1 = [
        "White Balancing",
        "Sky Replacement",
        "Tone Adjustment",
        "Image Sharpening",
        "Lens Distortion Removal",
    ];

    // Second Column (continues numbering from column1)
    const column2 = [
        "Dust Spot Removal",
        "TV Screen Replacement",
        "Add Fire to Fireplaces",
        "Flash Reflection Removal",
        "Brightness & Contrast Adjustment",
    ];

    // Third Column (continues numbering from column2)
    const column3 = [
        "Remove Photographer’s Reflection",
        "Vertical & Horizontal Straightening",
        "Lawn Enhancement – Repair or Replace",
        "HDR Bracketing with Indoor Window Replacement",
    ];

    const columns = [column1, column2, column3];

    return (
        <>
            <section className="container mx-auto my-14 px-6 max-w-7xl text-gray-800" id="image-enhancement">
                <h2 className="text-4xl font-semibold text-center mb-4">{title}</h2>
                <p className="text-lg text-center text-blue-600 font-medium mb-6">
                    Our core service—enhancing property images to perfection.
                </p>

                {/* Three-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-lg">
                    {columns.map((column, colIndex) => {
                        let startNumber = 1;
                        if (colIndex === 1) startNumber = column1.length + 1;
                        if (colIndex === 2) startNumber = column1.length + column2.length + 1;

                        return (
                            <div key={colIndex}>
                                {column.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="cursor-pointer flex items-start gap-3 mb-4"
                                        onClick={() => onServiceClick(item)}
                                    >
                                        {/* Continuous numbering */}
                                        <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
                                            {startNumber + itemIndex}
                                        </span>
                                        <span className="leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </section>
            {/* Horizontal rule below the section */}
            <hr className="border-t border-gray-300" />
        </>
    );
};

export default ServiceList;
