import Heading from "../components/Heading";
import Map from "../components/Map";


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
        latitude: '43.00',
        longitude: '43.00'
      }]} width="100%" height="400px" title="Наш офіс" />
    </div>
  )
}
