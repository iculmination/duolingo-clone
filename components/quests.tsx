import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { quests } from "@/constants";
import { Progress } from "@/components/ui/progress";

type Props = {
  points: number;
};

const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between w-full space-y-1">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="/quests">
          <Button size="sm" variant="primaryOutline">
            View all
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              className="flex items-center w-full p-2 gap-x-2 pr-4"
              key={quest.title}
            >
              <Image src="/points.svg" alt="Points" width={40} height={40} />
              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-neutral-700 text-md font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-3" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Quests;
