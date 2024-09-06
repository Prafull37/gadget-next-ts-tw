import Button from '@/components/atoms/Button';

export default function ActionButton() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-row h-[50px] overflow-hidden">
      <Button className="p-2 py-3 text-center bg-white text-black  rounded-none basis-[50%]">
        Add To Cart
      </Button>
      <Button className="p-2 py-3 text-center bg-[#101827] text-white  rounded-none basis-[50%]">
        Buy Now
      </Button>
    </div>
  );
}
