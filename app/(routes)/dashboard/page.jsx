export default function Dashboard() {
  return (
    <div className="flex flex-col-reverse mt-20 justify-between items-center md:flex md:flex-row gap-10">
      <div className="items-center">
        <h2 className="font-bold text-3xl">Radheshyam Jogdand</h2>
        <div className="text-xl flex flex-col gap-2 text-justify mt-5">
          <span>
            Hello! I'm Radheshyam Jogdand, a seasoned fitness professional with
            over 6+ years of experience in the industry. I have had the
            privilege of transforming the lives of more than 70+ clients, and I
            am currently working at GNX Fitness.
          </span>
          <span>
            My approach to fitness is holistic, focusing not just on physical
            training but also on mental well-being and sustainable lifestyle
            changes. I design tailored programs to meet the unique needs of each
            individual, ensuring optimal results and a fulfilling fitness
            journey.
          </span>
          <span>
            Whether you're a beginner looking to start your fitness adventure or
            an athlete aiming to reach new heights, my expertise, commitment,
            and motivational coaching style will guide you every step of the
            way. Join the many who have successfully transformed their lives
            under my guidance and embark on your own path to health and fitness
            with me at GNX Fitness.
          </span>
        </div>
      </div>
      <div className=" items-center">
        <img
          src="./profile.jpg"
          alt="profile"
          className="rounded-lg w-[1500px] "
        />
      </div>
    </div>
  );
}
