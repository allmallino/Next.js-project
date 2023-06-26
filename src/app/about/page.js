import dynamic from "next/dynamic";
import Heading from "/components/Heading";

const Map = dynamic(() => import('/components/Map'), { ssr: false });



export default function Home() {
  return (
    <div>
      <Heading variant="1">Про нас</Heading>
      <p>Ми маленька команда, яка предоставляє нові спогади нашим клієнтам вже 2 рік.
        Ми працюємо по всій країні, а також і за кордом.
        Тому якщо з&apos;явилося бажання дізнатися щось нове, замовляйте один з наших турів.
        І наша команда постарається зробити їх незабутніми.</p>
      <Heading variant="3">Де знайти нас</Heading>
      <Map coordinates={[{
        _lat: '50.44810909214735',
        _long: '30.456649405422063'
      }]} width="100%" height="400px" title="Наш офіс" />
    </div>
  )
}
