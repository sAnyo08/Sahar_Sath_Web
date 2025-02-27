
import TableNgo from "./TableNgo"

export default function Component() {

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-100 font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center"
      // style={{ backgroundImage: "url('./bgimg.png')", opa}}
      />

      <div className="container mx-auto my-8 flex justify-center relative z-10">
        <img
          src="/earth.png"
          alt="Logo"
          className="w-32 h-32 object-cover rounded-full border-4 border-blue-900"
        />
      </div>
      <TableNgo />
    </div>
  );
}
