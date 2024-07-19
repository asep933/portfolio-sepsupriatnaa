const Photo = () => {
  return (
    <>
      <div className="h-full w-full">
        <div
          className="h-full w-full rounded-t-[50%] rounded-bl-none bg-[url('/my_pp.jpg')] 
          bg-cover bg-bottom bg-no-repeat brightness-90 saturate-150 lg:rounded-t-none
          lg:rounded-bl-[50%]"
        />
      </div>
    </>
  );
};

export default Photo;
