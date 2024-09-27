import style from './Main.module.css'

function Main ()  {
  return (
    <main>
    <h2>Eventos destacados</h2>
    <div className={style.featured_events}>
        <div className={style.event_card}>
            <h3>Fútbol: Real Madrid vs Barcelona</h3>
            <p>La Liga - 20:45</p>
            <button>Apostar ahora</button>
        </div>
        <div className={style.event_card}>
            <h3>Tenis: Nadal vs Djokovic</h3>
            <p>Roland Garros - 15:30</p>
            <button>Apostar ahora</button>
        </div>
        <div className={style.event_card}>
            <h3>Baloncesto: Lakers vs Warriors</h3>
            <p>NBA - 02:00</p>
            <button>Apostar ahora</button>
        </div>
    </div>
</main>
  )
}

export default Main