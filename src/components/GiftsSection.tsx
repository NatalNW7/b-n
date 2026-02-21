import gifts from "@/data/gifts.json";
import GiftCard from "./GiftCard";
import GiftsGrid from "./GiftsGrid";

interface Gift {
  name: string;
  price: string;
  image: string;
  link: string;
}

export default function GiftsSection() {
  return (
    <main className="gifts-section" id="gifts">
      <div className="section-header">
        <p className="section-label">LISTA DE</p>
        <h2 className="section-title">Presentes</h2>
        <p className="section-description">
          Cada presente escolhido com amor para começar nossa nova vida juntos.
          Clique em um presente para ser direcionado à loja.
        </p>
      </div>

      <GiftsGrid>
        {(gifts as Gift[]).map((gift, i) => (
          <GiftCard
            key={gift.name}
            name={gift.name}
            price={gift.price}
            image={gift.image}
            link={gift.link}
            index={i}
          />
        ))}
      </GiftsGrid>
    </main>
  );
}
