const ReserveNow = ({ amount }: { amount: number }) => {
  return (
    <div className="relative mt-8 h-[300px]">
      <img src="/images/property (14).jpg" alt="" className="w-full h-full" />
      <div className="absolute top-0 left-0 flex flex-col justify-end w-full h-full p-6 bg-black/50">
        <h1 className="heading !text-slate-100">reserve your dream house</h1>
        <h1 className="text-slate-100">${amount}</h1>
        <button className="mt-3 btn btn-primary">reserve now</button>
      </div>
    </div>
  );
};

export default ReserveNow;
