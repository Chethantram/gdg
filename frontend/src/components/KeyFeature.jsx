import React from "react";
import { BookOpenCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const KeyFeature = () => {
  return (
    <div className="mt-40 py-20 flex flex-col gap-3 bg-background">
      <h2 className="text-center text-4xl font-bold ">Key Features</h2>
      <p className="text-gray-700 mx-auto max-w-[600px]">
        OpenLearnX offers a dynamic learning experience with interactive tools,
        curated content, and personalized learning paths to enhance educational
        outcomes
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <Card className="flex justify-evenly border-none items-center p-4">
          <div>
            <CardHeader className="space-y-5">
              <CardTitle className="text-3xl ">Interactive Tools</CardTitle>
              <CardDescription className="max-w-[400px]">
                Our platform includes interactive quizzes, virtual labs, and
                gamified learning modules to engage students actively.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button><BookOpenCheck/>Try Now</Button>
            </CardContent>
          </div>
          <div>
            <img src={"/intraction.png"} height={500} width={500} alt="img" />
          </div>
        </Card>
        <Card className="flex justify-evenly border-none items-center p-4">
          <div>
            <img src={"/personalized.png"} height={500} width={500} alt="img" />
          </div>
          <div>
            <CardHeader className="space-y-5">
              <CardTitle className="text-3xl ">Personalized Learning</CardTitle>
              <CardDescription className="max-w-[400px]">
              OpenLearnX adapts to each student's learning pace and style, providing customized content and recommendations for optimal learning.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button><BookOpenCheck/>Try Now</Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KeyFeature;