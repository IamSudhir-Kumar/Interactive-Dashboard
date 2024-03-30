import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>

      {/* Primary */}
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>

      {/* Secondary */}
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>

      {/* Danger */}
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger Outline</Button>

      {/* Super button */}
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super Outline</Button>

      {/* Ghost */}
      <Button variant="ghost">Ghost</Button>

      {/* Sidebar */}
      <Button variant="sidebar">Sidebar</Button>
      <Button variant="sidebarOutline">Sidebar Outline</Button>
    </div>
  );
};
export default ButtonsPage;
