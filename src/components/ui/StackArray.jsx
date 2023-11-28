export default function StackArray({ array }) {
  return (
    <div className="flex">
      {array.map((logo, i) => (
        <img key={i} src={logo} alt="Logo" className="max-w-[50px]" />
      ))}
    </div>
  );
}
