import { Button } from "@/components/ui/button";

const Home = () => {
    return (
        <div>
            <h1 className=" text- text-primary"> This is home</h1>
            <h1 className=" text- text-secondary"> This is home</h1>
            <Button className="text-xl hover:shado">This is new button</Button>
            <Button className="text-xl bg-secondary">This is new button</Button>
        </div>
    );
};

export default Home;