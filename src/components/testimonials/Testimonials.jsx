import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Virginia Espeche",
      title: " Developer",
      img:
        "https://i.postimg.cc/k46W7zXL/person.png",
      icon: "assets/linkedin.png",
      desc:
        "Tuve la oportunidad de conocer a Milagros en el bootcamp de Henry, desde el primer dia trabajamos en equipo, siempre presente su entusiasmo por aprender y mejorar. Muy atenta y dispuesta a colaborar, y sobre todo una excelente persona que siempre suma al grupo!",
        featured: true
    },
    {
      id: 2,
      name: "Leandro Buzeta",
      title: "Developer",
      img:
        "https://i.postimg.cc/k46W7zXL/person.png",
      icon: "assets/linkedin.png",
      desc:
        "Trabajar con Mili es una hermosa experiencia, es cuidadosa con la organización, esta siempre atenta a los detalles y sobre todo es una persona empática, algo que escasea bastante en estos días. ",
      featured: true,
    },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/linkedin.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}