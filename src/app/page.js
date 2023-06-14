import Image from 'next/image'
import styles from './page.module.css'
import ImageScroller from './components/ImageScroller/ImageScroller'
import Heading from './components/Heading'

export default function Home() {
  return (
    <div>
      <Heading variant="1">Ласкаво просимо</Heading>
      <ImageScroller childList={[
        {
          key: 0,
          href: "/tours/Crimea",
          src: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1687,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1575157151/191127-nemtsova-crimea-tease_joeh1y",
          title: "Крим",
          text: "Загадковий острів, який відкриє для тебе всі свої секрети"
        },
        {
          key: 1,
          href: "/tours/Kiyv",
          src: "https://cdn.turkishairlines.com/m/3ca6c0776a640b70/original/1400_500.jpg",
          title: "Київ",
          text: "Столиця може показати і свій незвичайний бік"
        },
        {
          key: 2,
          href: "/tours/Odesa",
          src: "https://static.dw.com/image/62553774_905.jpg",
          title: "Одеса",
          text: "Найкраще море - це море вдома"
        },]} />
    </div>
  )
}
