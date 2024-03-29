export const FormInput = ({ register, errors, options }) => {
  const { name, label, error, placeholder, pattern, ...restOptions } = options;

  const hasError = errors[name];

  return (
    <label className="relative flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name, { ...restOptions, pattern: new RegExp(pattern) })}
        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
      />

      {hasError ? (
        <span className="absolute top-full mt-1 text-xs text-red-400">
          {error}
        </span>
      ) : null}
    </label>
  );
};
