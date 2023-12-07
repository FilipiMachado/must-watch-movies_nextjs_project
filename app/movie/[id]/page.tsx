export default function MovieIdPage() {
  return (
    <div className="sm:p-16 py-16 px-8 gap-10">
      <div className="flex justify-between h-[80vh]">
        <div className="w-[40vw] bg-slate-500/50 rounded-l">
          <p>BACKGROUND IMAGE</p>
        </div>
        <div className="w-[60vw] py-28 p-6 bg-gray-400 rounded-r">
          <div className="mb-20">
            <p className="mb-8 text-4xl">Movie Title</p>
            <p className="font-bold text-md mb-2">SYNOPSIS</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              distinctio, repellat sapiente rerum asperiores ullam voluptatum
              placeat ut, vero deserunt odio ipsum maiores. Optio fugiat
              aspernatur, quis illum eaque saepe.
            </p>
          </div>
          <div className="flex mb-20 w-64 justify-between">
            <div>
              <p className="font-bold">RATING</p>
              <p>8.0</p>
            </div>
            <div>
              <p className="font-bold">RELEASE DATE</p>
              <p>01/01/2023</p>
            </div>
          </div>
          <div className="flex w-96 justify-between">
            <div>
              <p className="font-bold">RUNTIME</p>
              <p>2:45h</p>
            </div>
            <div>
              <p className="font-bold">BUDGET</p>
              <p>$500.000</p>
            </div>
            <div>
              <p className="font-bold">REVENUE</p>
              <p>$1.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
