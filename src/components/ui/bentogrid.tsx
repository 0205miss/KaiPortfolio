import { cn } from "@/utils/cn";
import { GlobeDisplay } from "./globedisplay";
import { Boxes } from "./box_background";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto w-full py-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-card dark:bg-card row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:border-white/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div
        className={cn(
          titleClassName,
          "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="select-none font-sans text-lg lg:text-3xl font-bold z-10">
          {title}
        </div>
        <div className="select-none font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        {id === 1 && <div>
          
          </div>}
        {id === 2 && <GlobeDisplay />}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-2 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {["ReactJS", "NextJS", "TypeScript"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-sm text-center bg-secondary"
                >
                  {item}
                </span>
              ))}
              <span className="py-4 px-3 rounded-sm text-center bg-secondary" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
              <span className="py-4 px-3 rounded-sm text-center bg-secondary" />
              {["Flutter", "PHP", "Laravel"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-sm text-center bg-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {id === 5 && <Boxes />}
      </div>
    </div>
  );
};
