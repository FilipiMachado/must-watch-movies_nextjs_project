export default function MovieIdPage() {
  return (
    <div className="sm:p-16 py-16 px-8 gap-10">
      <div className="flex justify-between h-[80vh] bg-red-500">
        <div className="w-[40vw] bg-slate-500">
          <p>BACKGROUND IMAGE</p>
        </div>
        <div className="w-[60vw] p-6 bg-violet-400">
          <p className="mb-8 text-4xl">Movie Title</p>
          <p className="font-bold text-md mb-2">SYNOPSIS</p>
          <p className="mb-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae distinctio, repellat sapiente rerum asperiores ullam voluptatum placeat ut, vero deserunt odio ipsum maiores. Optio fugiat aspernatur, quis illum eaque saepe.</p>
          <div className="flex">
            <div className="mr-20">
              <p>RATING</p>
              <p>8.0</p>
            </div>
            <div>
              <p>RELEASE DATE</p>
              <p>01/01/2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
