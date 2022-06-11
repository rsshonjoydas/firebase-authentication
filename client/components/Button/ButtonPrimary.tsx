const ButtonPrimary = ({ children, disabled, onClick }: any) => (
  <div className="text-right my-4">
    <button
      type="submit"
      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default ButtonPrimary;
