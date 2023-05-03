const menuData = [
  {
    text: "Inicio",
    link: "/",
    active: true,
    info: {
      titulo: "Página de inicio",
      descripcion: "Bienvenido a nuestra página de inicio",
    },
  },
  {
    text: "Servicios",
    link: "/servicios",
    info: {
      titulo: "Nuestros servicios",
      descripcion: "Descubre los servicios que ofrecemos",
    },
  },
  {
    text: "Productos",
    link: "/productos",
    info: {
      titulo: "Nuestros productos",
      descripcion: "Echa un vistazo a nuestros productos",
    },
  },
  {
    text: "Acerca de",
    link: "/acerca-de",
    info: {
      titulo: "Acerca de nosotros",
      descripcion: "Conoce más sobre nuestra empresa",
    },
  },
  {
    text: "Contacto",
    link: "/contacto",
    info: {
      titulo: "Contáctanos",
      descripcion: "Escríbenos un mensaje",
    },
  },
];

const menu = document.getElementById("menu");
const infoContainer = document.getElementById("info-container");

menuData.forEach(function (item) {
  const link = document.createElement("a");
  link.href = item.link;
  link.innerHTML = item.text;
  menu.appendChild(link);

  if (item.active) {
    link.classList.add("active");
  }

  link.addEventListener("click", function (event) {
    event.preventDefault();
    infoContainer.innerHTML = JSON.stringify(item.info);
  });
});
