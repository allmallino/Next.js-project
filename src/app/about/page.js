import dynamic from "next/dynamic";
import Heading from "/components/Heading";

const Map = dynamic(() => import('/components/Map'), { ssr: false });

export default function Home() {
  return <div>
    <Heading variant="1">Про нас</Heading>
    <p>
      Ми - маленька, але енергійна команда, яка протягом двох років творить незабутні спогади для наших клієнтів.
      Ми пишаємося тим, що працюємо не тільки по всій країні, але й виїжджаємо за кордон, щоб задовольнити бажання наших подорожуючих.
      Наша місія - надати вам можливість дізнатися щось нове, відкрити для себе неймовірні місця та насолодитися незабутнім досвідом.
      Коли ви обираєте один з наших турів, ви можете бути впевнені, що наша команда зробить все можливе, щоб ваша подорож стала незабутньою.
      Ми віримо в індивідуальний підхід до кожного клієнта і враховуємо ваші унікальні потреби та побажання.
      Ви можете розраховувати на нас, щоб забезпечити вам зручний транспорт, комфортне проживання та захоплюючі екскурсії.</p>
    <Heading variant="3">Де знайти нас</Heading>
    <Map coordinates={[{
      _lat: '50.44810909214735',
      _long: '30.456649405422063'
    }]} width="100%" height="400px" title="Наш офіс" />
  </div>
}
