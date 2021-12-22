import Accordion from './Accordion';

function Info() {
  return (
    <div className="bg-black w-full h-auto pb-[100px] relative">
      <h1 className="text-white text-center text-[48px] font-thin pt-14">
        Connection is evolving and so are we.
      </h1>
      <div className="flex flex-col mt-10 mb-0 ml-auto mr-auto w-[60%] ">
        <Accordion
          title="What is Metaverse?"
          content="The metaverse is the next evolution of social connection. Our vision is to help bring the metaverse to life, so we are changing our name to reflect our commitment to this future."
        />
        <Accordion
          title="What is new about Metaverse?"
          content="3D spaces in the metaverse will let you socialize, learn, collaborate and play in ways that go beyond what we can imagine. Listen to Mark Zuckerberg share our vision for bringing the metaverse to life together."
        />
        <Accordion
          title="What are the main benefits of Metaverse?"
          content="We`re already developing exciting new technologies that will help people connect and explore in the metaverse."
        />
        <Accordion
          title="What is VR?"
          content="VR stands for Virtual Reality. Virtual reality lets you explore new worlds and shared experiences. With Quest, even if you`re far apart, you can discover new experiences with friends and family together."
        />
      </div>
    </div>
  );
}

export default Info;
