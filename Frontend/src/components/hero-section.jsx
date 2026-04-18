import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { ButtonGroup } from "./ui/button-group";
import Shopee from "./svgs/shoppe";

export default function Hero() {
  return (
    <div className="w-full pt-20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-7">
        <Badge variant="outline">
          <span className="w-1 h-1 bg-primary rounded-full mr-1" /> Smith Origin{" "}
          <span className="text-muted-foreground">- Gaming Gear Store</span>
        </Badge>
        <h1 className="font-bold text-7xl max-w-4xl text-center">
          The gaming gear store you are looking for
        </h1>
        <p className="text-muted-foreground text-xl max-w-3xl text-center">
          Rasakan performa tanpa batas dengan gaming gear pilihan dari Smith
          Origin. Dirancang untuk presisi, kecepatan, dan kenyamanan
          maksimal—karena setiap detail menentukan kemenangan.
        </p>
        <div className="inline-flex items-center gap-3">
          <Link to={"/"}>
            <Button size="lg">View Product</Button>
          </Link>
          <ButtonGroup>
            <Button size="lg" variant="outline">
              <Link to={"/"} className="inline-flex items-center gap-1.5">
                <img
                  src="/Tokopedia_Mascot.png"
                  alt="Tokopedia"
                  className="w-4"
                />
                <p className="mt-1">Tokopedia</p>
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to={"/"} className="inline-flex items-center gap-1.5">
                <Shopee className="size-4" />
                <p className="mt-1">Shopee</p>
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
