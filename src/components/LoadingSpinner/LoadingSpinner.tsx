export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-6 h-6 border-4 border-t-sky-600 border-gray-200 rounded-full animate-spin"></div>
      <span className="ml-2 text-gray-600">Buscando...</span>
    </div>
  );
}