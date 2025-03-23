export default function Testimonial({ name, review }) {
    return (
        <div className="border p-4 rounded-lg shadow-md bg-white max-w-md mx-auto">
            <p className="italic text-gray-600">"{review}"</p>
            <h3 className="mt-2 font-semibold text-right text-blue-600">- {name}</h3>
        </div>
    );
}
