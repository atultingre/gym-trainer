import Slider from "@/app/_components/Slider";

export default function Dashboard() {
  return (
    <div className="flex flex-col-reverse justify-between items-center md:flex md:flex-row gap-10">
      <div className="items-center">
        {/* <h2 className="font-bold text-3xl">Radheshyam Jogdand</h2> */}
        <div className="text-xl flex flex-col gap-2 text-justify">
          <span>
            Hello! I'm <span className="text-[gold] font-bold"> Radheshyam Jogdand</span>,
            a fitness professional with over <span className="text-[gold] font-bold">6+ years of experience</span>. I've
            transformed the lives of more than 70+ clients and currently work at
            GNX Fitness.
          </span>
          <span>
            My holistic approach focuses on physical training, mental
            well-being, and sustainable lifestyle changes. I design personalized
            programs to meet each client's unique needs, ensuring optimal
            results.
          </span>
          <span>
            Whether you're a beginner or an athlete, my expertise and
            motivational coaching will guide you every step of the way. Join me
            at GNX Fitness and start your journey to better health today.
          </span>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}
