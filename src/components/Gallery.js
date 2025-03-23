export default function Gallery({ images }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={img} alt={`Gallery ${index}`} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                </div>
            ))}
        </div>
    );
}
