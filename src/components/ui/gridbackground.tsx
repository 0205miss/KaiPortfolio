export function GridBackground() {
  return (
    <div className="h-screen w-full dark:bg-background bg-background  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute left-0 top-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
