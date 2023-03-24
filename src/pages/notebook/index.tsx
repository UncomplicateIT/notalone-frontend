import { Icons } from "@/components/icons";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

const Notebooks = () => {
  return (
    <Layout title="NotAlone - Your notebooks">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <Icons.arrowLeft />
        </Button>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Some cool title
        </h1>
      </div>
    </Layout>
  );
};

export default Notebooks;
