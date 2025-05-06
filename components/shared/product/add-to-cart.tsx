"use client";

import { CartItem } from "@/types";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { addItemToCart } from "@/lib/actions/cart.actions";
const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    // Handle error add to cart
    if (!res.success) {
      toast.error(res.message);

      return;
    }

    // Handle success add to cart

    toast.success(`${item.name} added to cart`, {
      action: (
        <Button
          className="bg-primary text-white hover:bg-gray-800"
          onClick={() => router.push("/cart")}
        >
          View Cart
        </Button>
      ),
    });
  };
  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add to Cart
    </Button>
  );
};

export default AddToCart;
