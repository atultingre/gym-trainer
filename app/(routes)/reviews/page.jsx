import React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const comments = [
  {
    name: "Ravi P",
    gender: "male",
    comment:
      "Radhe Sir is knowledgeable, plans well, and ensures accountability, with fun yet careful training sessions.",
  },
  {
    name: "Amruta C",
    gender: "female",

    comment:
      "Radhe Sir's dedication and expertise are commendable. His approach makes workouts comfortable and effective, showing visible results quickly.",
  },
  {
    name: "Mrs. Supriya H",
    gender: "female",
    comment:
      "Radhe sir's coaching helped me reduce weight and improve my health and strength with personalized guidance.",
  },
  {
    name: "Prerna K",
    comment:
      "Sir's training is thorough and supportive, guiding me effectively toward my fitness goals with discipline.",
  },
  {
    name: "Pranav S",
    comment:
      "Your exceptional training and guidance have been crucial in my fitness journey.",
  },
  {
    name: "Jyoti V",
    comment:
      "Radheshyam sir is knowledgeable and supportive, providing joyful workouts and solid results.",
  },
  {
    name: "Nikhil R",
    comment: "Achieved 100% weight loss results without muscle loss under your training.",
  },
  {
    name: "Pratiksha P",
    comment: "Radhe sir is indeed a good fitness trainer.",
  },
  {
    name: "Adinath D",
    comment:
      "Your effort and knowledge in maintaining good health are awesome, making a significant impact.",
  },
  {
    name: "Vaishnavi D",
    comment:
      "Before I joined the gym I weighed 58 kg. Lost 3 kg in last three months. Well-arranged workouts and friendly coaching from Radheshyam sir.",
  },
];

const Reviews = () => {
  return (
    <div className="my-5">
      <h2 className="font-bold text-3xl my-5 text-white">Client Opinions</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8 ">
        {comments?.map((feed, index) => (
          <Dialog >
            <DialogTrigger className=" flex w-full  shadow-md" key={index}>
              <Card className="h-32 w-full">
                <CardHeader className="text-justify">
                  <CardTitle>{feed.name}</CardTitle>
                  <CardDescription>
                    {feed.comment.slice(0, 100)}
                    {feed.comment.length > 80 && "..."}
                  </CardDescription>
                </CardHeader>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <div className=" flex gap-3 w-full py-3 rounded-lg" key={index}>
                <div className="text-start">
                  <div>
                    <p className="text-black font-bold text-lg">{feed.name}</p>
                  </div>
                  <p className="text-black text-justify">{feed.comment}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
