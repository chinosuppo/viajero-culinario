export const americaB = [
  {
    id: "colombia",
    pais: "Colombia",
    bandera: "🇨🇴",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "colombia-bandeja-paisa",
        nombre: "Bandeja Paisa",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 30 min",
        accesibilidad: "amarillo",
        ingredientes: ["frijoles rojos", "arroz", "carne molida", "chicharrón de cerdo y chorizo", "huevo", "arepa de maíz", "plátano maduro", "aguacate"],
        sustituciones: "La arepa se hace con harina de maíz precocida (tipo harina P.A.N.), que en Neuquén se consigue en dietéticas o casas de productos latinos; si no hay, se puede usar una tortilla de maíz simple. El plátano maduro (banana grande) se encuentra en verdulerías grandes bajo el nombre 'banana para freír'.",
        pasos: [
          "Cocinar los frijoles rojos remojados con un trozo de panceta o hueso de cerdo hasta que estén tiernos.",
          "Freír el chicharrón hasta que quede crocante y dorar la carne molida sazonada con ajo, comino y cebolla.",
          "Freír rodajas de plátano maduro y preparar un huevo frito por porción.",
          "Cocinar el arroz blanco y armar las arepas en un sartén o plancha caliente.",
          "Servir todo en una bandeja grande: frijoles, arroz, carne, chicharrón, chorizo, huevo, arepa, plátano y aguacate en rodajas."
        ],
        dato: "La Bandeja Paisa nació como comida de trabajadores rurales de Antioquia que necesitaban muchas calorías para las labores del campo; hoy es el plato más representativo de la región paisa."
      },
      {
        id: "colombia-ajiaco-santafereno",
        nombre: "Ajiaco Santafereño",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["pollo", "papa criolla", "papa pastusa o papa común", "mazorca (choclo)", "guascas", "crema de leche", "alcaparras", "cebolla larga"],
        sustituciones: "La papa criolla (pequeña y amarilla) no se consigue en Argentina; se reemplaza con papa común más una pizca de cúrcuma para lograr ese color. Las guascas, hierba andina imposible de hallar fuera de Colombia, se sustituyen por una mezcla de cilantro fresco y un poco de apio, que aportan un aroma parecido.",
        pasos: [
          "Cocinar el pollo en agua con cebolla larga y ajo hasta que esté tierno; reservar y desmenuzar.",
          "En el mismo caldo, agregar las papas cortadas en trozos y cocinar hasta que algunas se deshagan y espesen la sopa.",
          "Sumar el choclo en rodajas y las guascas (o el sustituto de cilantro y apio) y cocinar 10 minutos más.",
          "Incorporar el pollo desmenuzado y ajustar sal.",
          "Servir caliente acompañado de crema de leche, alcaparras y aguacate aparte."
        ],
        dato: "El ajiaco es plato obligado en la mesa bogotana y se sirve tradicionalmente los domingos en familia, acompañado de arroz blanco y aguacate."
      },
      {
        id: "colombia-sancocho-de-pescado",
        nombre: "Sancocho de Pescado",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["pescado (corvina o mero)", "yuca", "plátano verde", "ñame", "cilantro", "cebolla larga", "tomate", "ajo"],
        sustituciones: "El ñame es difícil de conseguir en Neuquén; se puede omitir o reemplazar por batata, que aporta una textura y dulzor parecidos. La yuca y el plátano verde se consiguen frescos o congelados en dietéticas y verdulerías con productos bolivianos o paraguayos.",
        pasos: [
          "Preparar un sofrito con cebolla, ajo y tomate.",
          "Agregar agua o caldo y sumar la yuca, el plátano verde y el ñame (o batata) en trozos.",
          "Cocinar 20 minutos hasta que las raíces estén casi tiernas.",
          "Incorporar el pescado en trozos y cocinar 10 minutos más, sin revolver demasiado para que no se deshaga.",
          "Finalizar con cilantro fresco picado y servir con arroz blanco."
        ],
        dato: "Existen versiones de sancocho en toda la costa Caribe y Pacífica colombiana; cada región agrega su propio toque de coco, mariscos o carnes."
      },
      {
        id: "colombia-ternera-a-la-llanera",
        nombre: "Ternera a la Llanera",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "2 h",
        accesibilidad: "verde",
        ingredientes: ["costillar de ternera", "sal gruesa", "limón", "cebolla larga", "cilantro"],
        sustituciones: "Esta receta es prácticamente un asado al estilo llanero: en Neuquén se puede preparar igual que un asado tradicional, usando costillar de ternera y cocinando lento junto al fuego o en horno de barro con tapa.",
        pasos: [
          "Sazonar el costillar con sal gruesa y jugo de limón varias horas antes.",
          "Asar a fuego lento y parejo, tipo asado a la estaca, girando de a poco para que se cocine parejo.",
          "Cocinar durante al menos 2 horas hasta que la carne se desprenda fácilmente del hueso.",
          "Servir acompañado de yuca cocida, arroz y una ensalada fresca con cebolla y cilantro."
        ],
        dato: "En los Llanos Orientales de Colombia y Venezuela, la 'mamona' se cocina tradicionalmente clavando la carne en estacas alrededor de una fogata, técnica muy parecida al asado a la cruz patagónico."
      },
      {
        id: "colombia-cocadas",
        nombre: "Cocadas",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "40 min",
        accesibilidad: "verde",
        ingredientes: ["coco rallado", "leche condensada o panela", "canela", "clavo de olor", "agua"],
        sustituciones: "Todos los ingredientes se consiguen sin problema en supermercados de Neuquén; si no hay panela, se reemplaza fácilmente por azúcar rubia o negra.",
        pasos: [
          "Disolver la panela (o azúcar) en agua con canela y clavo de olor a fuego medio.",
          "Agregar el coco rallado y cocinar revolviendo hasta que espese y se despegue del fondo.",
          "Retirar del fuego y dejar entibiar unos minutos.",
          "Formar pequeñas porciones sobre una placa con papel manteca y dejar enfriar hasta que endurezcan."
        ],
        dato: "Las cocadas son típicas de la costa Caribe y Pacífica colombiana, donde se venden tradicionalmente en las playas envueltas en hojas de plátano."
      }
    ]
  },
  {
    id: "venezuela",
    pais: "Venezuela",
    bandera: "🇻🇪",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "venezuela-pabellon-criollo",
        nombre: "Pabellón Criollo",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 30 min",
        accesibilidad: "amarillo",
        ingredientes: ["carne de res para mechar (falda)", "caraotas negras", "arroz", "plátano maduro", "cebolla", "pimentón", "ajo", "comino"],
        sustituciones: "Las caraotas negras (porotos negros) se consiguen en dietéticas o en la sección de legumbres de supermercados grandes; cualquier poroto negro común sirve igual. El plátano maduro se encuentra en verdulerías grandes bajo el nombre 'banana para freír'.",
        pasos: [
          "Hervir la carne hasta que esté tierna y luego desmecharla con un tenedor.",
          "Sofreír la carne desmechada con cebolla, pimentón, ajo y comino hasta dorar.",
          "Cocinar las caraotas negras con un sofrito aparte hasta lograr un guiso espeso.",
          "Preparar arroz blanco y freír rodajas de plátano maduro.",
          "Servir los cuatro componentes juntos en el plato, en cuatro secciones bien diferenciadas."
        ],
        dato: "El nombre 'pabellón' hace referencia a la bandera venezolana: se dice que los tres colores del plato (blanco del arroz, negro de las caraotas y amarillo del plátano) representan la identidad nacional."
      },
      {
        id: "venezuela-hallacas",
        nombre: "Hallacas",
        tipo: "Plato Principal",
        dificultad: "Difícil",
        tiempo: "3 h",
        accesibilidad: "rojo",
        ingredientes: ["harina de maíz precocida", "hojas de plátano", "carne de cerdo y res", "pollo", "aceitunas", "pasas", "alcaparras", "pimentón"],
        sustituciones: "Las hojas de plátano son el ingrediente más difícil: en Neuquén hay que buscarlas congeladas en dietéticas grandes o pedirlas a proveedores de productos latinos; si no se consiguen, se puede envolver el guiso en papel aluminio untado con aceite con pimentón, perdiendo el aroma pero conservando el sabor.",
        pasos: [
          "Preparar un guiso de carnes con pimentón, cebolla, ajo, alcaparras y pasas, cocinando lento hasta que espese.",
          "Amasar la harina de maíz con caldo y un poco de aceite con color hasta obtener una masa suave.",
          "Extender la masa sobre las hojas de plátano previamente pasadas por fuego para ablandarlas.",
          "Rellenar con el guiso, aceitunas y decoraciones, y envolver formando un paquete rectangular atado con hilo.",
          "Hervir las hallacas envueltas durante 1 hora aproximadamente."
        ],
        dato: "Las hallacas son el plato central de la Navidad venezolana; toda la familia se reúne para prepararlas juntas en una tradición que puede tomar un día entero."
      },
      {
        id: "venezuela-pisca-andina",
        nombre: "Pisca Andina",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "30 min",
        accesibilidad: "verde",
        ingredientes: ["huevo", "papa", "leche", "cilantro", "cebolla de verdeo", "queso blanco", "manteca"],
        sustituciones: "Todos los ingredientes son de uso diario en Neuquén y se consiguen en cualquier verdulería o supermercado.",
        pasos: [
          "Rehogar cebolla de verdeo y cilantro en manteca.",
          "Agregar agua y papas en cubos, cocinar hasta que estén tiernas.",
          "Sumar leche y llevar a punto de hervor suave.",
          "Cascar los huevos directamente en la sopa y cocinar hasta que cuajen.",
          "Servir con queso blanco desmenuzado por encima."
        ],
        dato: "Esta sopa reconfortante es típica de los Andes venezolanos, en estados como Mérida y Táchira, donde el clima frío pide platos calientes de cuchara."
      },
      {
        id: "venezuela-asado-negro",
        nombre: "Asado Negro",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 45 min",
        accesibilidad: "amarillo",
        ingredientes: ["muchacho redondo (peceto)", "papelón o azúcar negra", "salsa de soja", "cebolla", "ajo", "laurel"],
        sustituciones: "El papelón (panela) se reemplaza sin problema por azúcar negra o rubia, disponible en cualquier supermercado neuquino.",
        pasos: [
          "Sellar el peceto entero en una olla con aceite bien caliente hasta dorar todos los lados.",
          "Retirar la carne y en la misma olla caramelizar el azúcar negra hasta que tome un color oscuro.",
          "Agregar cebolla, ajo, laurel y un poco de agua, y volver a colocar la carne.",
          "Cocinar tapado a fuego lento durante 1 hora, agregando líquido si hace falta.",
          "Cortar en fetas finas y bañar con la salsa oscura reducida."
        ],
        dato: "El color oscuro y brillante de este plato caraqueño se logra caramelizando azúcar hasta casi quemarla, técnica que le da su nombre y su sabor característico agridulce."
      },
      {
        id: "venezuela-quesillo",
        nombre: "Quesillo",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["huevos", "leche condensada", "leche entera", "azúcar", "esencia de vainilla"],
        sustituciones: "Receta prácticamente igual al flan casero argentino; todos los ingredientes se consiguen en cualquier almacén.",
        pasos: [
          "Caramelizar azúcar en una budinera hasta lograr un caramelo dorado.",
          "Batir huevos con leche condensada, leche entera y esencia de vainilla sin generar espuma.",
          "Volcar la mezcla sobre el caramelo.",
          "Cocinar a baño maría en horno moderado durante 45 minutos.",
          "Dejar enfriar y desmoldar antes de servir bien frío."
        ],
        dato: "A diferencia del flan tradicional, el quesillo venezolano se bate a mano sin batidora para evitar burbujas de aire, logrando una textura más compacta y sedosa."
      }
    ]
  },
  {
    id: "ecuador",
    pais: "Ecuador",
    bandera: "🇪🇨",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "ecuador-ceviche-de-camaron",
        nombre: "Ceviche de Camarón",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "30 min",
        accesibilidad: "amarillo",
        ingredientes: ["camarones", "limón", "cebolla morada", "tomate", "cilantro", "salsa de tomate", "chifles o maíz tostado"],
        sustituciones: "Los camarones frescos de mar no llegan a Neuquén; se recomienda usar langostinos congelados de buena calidad, disponibles en pescaderías y supermercados grandes. El maíz tostado o 'cancha' se reemplaza con maíz pisingallo tostado sin aceite.",
        pasos: [
          "Cocinar brevemente los camarones en agua hirviendo y enfriar de inmediato.",
          "Marinar los camarones en jugo de limón junto con cebolla morada cortada fina.",
          "Agregar tomate picado, cilantro y un chorrito de salsa de tomate para dar cuerpo al jugo.",
          "Dejar reposar en la heladera 15 minutos.",
          "Servir frío acompañado de chifles o maíz tostado."
        ],
        dato: "A diferencia del ceviche peruano, el ecuatoriano se sirve con su propio jugo tipo 'sopa fría' y suele llevar salsa de tomate, dándole un toque más dulce y suave."
      },
      {
        id: "ecuador-locro-de-papa",
        nombre: "Locro de Papa",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "45 min",
        accesibilidad: "verde",
        ingredientes: ["papa", "queso fresco", "leche", "cebolla larga", "achiote o pimentón", "aguacate", "cilantro"],
        sustituciones: "El achiote se reemplaza fácilmente por pimentón dulce o una pizca de páprika con aceite. El resto de los ingredientes se consigue en cualquier supermercado.",
        pasos: [
          "Rehogar cebolla larga con pimentón (o achiote) hasta que esté transparente.",
          "Agregar las papas cortadas en cubos junto con agua y cocinar hasta que se deshagan parcialmente.",
          "Incorporar la leche y revolver hasta espesar levemente.",
          "Sumar el queso fresco en trozos y calentar sin que hierva fuerte.",
          "Servir con una rodaja de aguacate y cilantro fresco por encima."
        ],
        dato: "El locro es una de las sopas más antiguas de los Andes, compartida con Perú, Bolivia y el norte argentino, aunque cada país tiene su propia versión."
      },
      {
        id: "ecuador-fanesca",
        nombre: "Fanesca",
        tipo: "Plato Principal",
        dificultad: "Difícil",
        tiempo: "2 h",
        accesibilidad: "amarillo",
        ingredientes: ["doce granos variados (porotos, garbanzos, arvejas, choclo, habas)", "zapallo anco", "leche", "queso", "bacalao seco", "maní"],
        sustituciones: "El bacalao seco se consigue en dietéticas grandes o pescaderías especializadas en Neuquén, a veces por encargo. Los doce granos pueden reemplazarse por la selección de legumbres y verduras que se tengan a mano, respetando el espíritu de variedad de la receta.",
        pasos: [
          "Desalar el bacalao dejándolo en agua varias horas, cambiando el agua un par de veces.",
          "Cocinar por separado cada uno de los granos y legumbres hasta que estén tiernos.",
          "Preparar una base de zapallo anco licuado con leche y maní molido.",
          "Unir todos los granos con la base cremosa y el bacalao desmenuzado, y cocinar 20 minutos a fuego suave.",
          "Servir con queso fresco, huevo duro y perejil por encima."
        ],
        dato: "La fanesca se prepara tradicionalmente en Semana Santa; sus doce granos representan simbólicamente a los doce apóstoles."
      },
      {
        id: "ecuador-maito-de-tilapia",
        nombre: "Maito de Tilapia",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "40 min",
        accesibilidad: "rojo",
        ingredientes: ["filet de tilapia o pescado blanco", "hoja de bijao o plátano", "cebolla", "tomate", "cilantro", "ajo", "limón"],
        sustituciones: "La hoja de bijao típica de la Amazonía no existe en Argentina; se sustituye por hoja de plátano (congelada, disponible en dietéticas) o directamente por papel aluminio, cocinando el pescado al horno o sobre la parrilla.",
        pasos: [
          "Marinar el pescado con limón, ajo y sal durante 15 minutos.",
          "Colocar el filet sobre la hoja de plátano junto con cebolla, tomate y cilantro.",
          "Envolver formando un paquete cerrado y sostenido con hilo o palillos.",
          "Cocinar sobre parrilla o en horno fuerte durante 20 minutos.",
          "Abrir el envoltorio caliente y servir con yuca cocida."
        ],
        dato: "El maito es una técnica de cocción amazónica compartida por comunidades indígenas de Ecuador, Perú y Colombia, que envuelven pescado o carne en hojas para cocinarlo al vapor sobre brasas."
      },
      {
        id: "ecuador-dulce-de-higos-con-queso",
        nombre: "Dulce de Higos con Queso",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "45 min",
        accesibilidad: "verde",
        ingredientes: ["higos", "panela o azúcar negra", "canela", "clavo de olor", "queso fresco"],
        sustituciones: "Los higos frescos abundan en la región del Alto Valle de Neuquén en temporada; fuera de estación se pueden usar higos secos rehidratados en agua tibia.",
        pasos: [
          "Lavar los higos y hacerles un corte en cruz en la parte superior.",
          "Cocinar en agua con panela, canela y clavo de olor a fuego lento durante 30 minutos.",
          "Dejar que el almíbar espese ligeramente.",
          "Servir tibios o fríos acompañados de una porción de queso fresco."
        ],
        dato: "En la sierra ecuatoriana este dulce se sirve como postre de fin de año y es tradición combinar lo dulce del higo con lo salado del queso fresco."
      }
    ]
  },
  {
    id: "peru",
    pais: "Perú",
    bandera: "🇵🇪",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "peru-ceviche",
        nombre: "Ceviche",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "30 min",
        accesibilidad: "amarillo",
        ingredientes: ["pescado blanco fresco", "limón", "cebolla morada", "ají limo", "cilantro", "sal", "camote", "choclo"],
        sustituciones: "En Neuquén: el pescado fresco de mar hay que pedirlo en pescaderías (llega de la costa), o usar trucha patagónica fresca que también funciona muy bien. El ají limo peruano no se consigue: se reemplaza por ají picante verde o un poco de ají molido con jugo de limón.",
        pasos: [
          "Cortar el pescado en cubos parejos y colocarlo en un bowl bien frío.",
          "Agregar sal, ají picado fino y cebolla morada en pluma.",
          "Bañar con abundante jugo de limón recién exprimido y mezclar suavemente.",
          "Dejar reposar 5 a 10 minutos, justo hasta que el pescado se vea opaco.",
          "Servir de inmediato con camote sancochado y choclo desgranado."
        ],
        dato: "El ceviche peruano se considera Patrimonio Cultural de la Nación y tiene su propio día de celebración cada 28 de junio."
      },
      {
        id: "peru-lomo-saltado",
        nombre: "Lomo Saltado",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "25 min",
        accesibilidad: "verde",
        ingredientes: ["bife de lomo o cuadril", "cebolla morada", "tomate", "papas fritas (bastón)", "salsa de soja", "vinagre", "ají amarillo", "cilantro"],
        sustituciones: "El ají amarillo peruano fresco no se consigue en Argentina; se reemplaza por ají amarillo en pasta (se vende importado en algunas dietéticas) o por morrón amarillo salteado con un toque de mostaza para simular el color y algo del picor.",
        pasos: [
          "Cortar la carne en tiras y saltear a fuego muy fuerte hasta sellar.",
          "Agregar cebolla en pluma y tomate en gajos, saltear apenas un minuto para que queden crocantes.",
          "Sumar salsa de soja, un chorrito de vinagre y el ají amarillo (o su sustituto).",
          "Incorporar las papas fritas al final y mezclar rápido para que absorban la salsa.",
          "Servir de inmediato con arroz blanco y cilantro fresco."
        ],
        dato: "El lomo saltado es un ejemplo clásico de la cocina 'chifa', fusión entre técnicas de wok chinas y sabores criollos peruanos."
      },
      {
        id: "peru-rocoto-relleno",
        nombre: "Rocoto Relleno",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "rojo",
        ingredientes: ["rocoto (ají grueso picante)", "carne molida", "queso", "cebolla", "huevo", "leche", "maní", "papa"],
        sustituciones: "El rocoto es un ají grueso muy picante casi imposible de encontrar fresco en Neuquén; se puede sustituir por morrón rojo relleno (perdiendo el picor característico) agregando un poco de ají picante molido a la mezcla de carne para compensar.",
        pasos: [
          "Vaciar los rocotos (o morrones) y blanquearlos brevemente en agua con azúcar para suavizar el picor.",
          "Preparar un relleno salteando carne molida con cebolla, maní molido y especias.",
          "Rellenar cada rocoto con la mezcla y cubrir con una lámina de queso.",
          "Hornear a horno medio durante 25 minutos hasta gratinar.",
          "Servir con una torta de papa o papas al horno como acompañamiento."
        ],
        dato: "El rocoto relleno es el plato insignia de Arequipa, ciudad conocida por su tradición picantera y sus 'picanterías' centenarias."
      },
      {
        id: "peru-juane",
        nombre: "Juane",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 30 min",
        accesibilidad: "rojo",
        ingredientes: ["arroz", "pollo", "hoja de bijao", "huevo duro", "aceitunas", "cúrcuma o palillo", "cebolla"],
        sustituciones: "La hoja de bijao amazónica no está disponible; se envuelve el arroz con pollo en hoja de plátano congelada (dietéticas) o en papel aluminio, cocinando al vapor o al horno igualmente.",
        pasos: [
          "Cocinar el arroz con cúrcuma hasta que quede amarillo y suelto.",
          "Mezclar el arroz con pollo cocido desmenuzado, huevo duro en trozos y aceitunas.",
          "Colocar la mezcla sobre la hoja de plátano y envolver dándole forma redondeada.",
          "Atar con hilo y hervir el paquete durante 45 minutos.",
          "Dejar reposar unos minutos antes de abrir y servir."
        ],
        dato: "El juane debe su nombre a San Juan Bautista y su forma redonda representa, según la tradición amazónica, la cabeza del santo."
      },
      {
        id: "peru-suspiro-a-la-limena",
        nombre: "Suspiro a la Limeña",
        tipo: "Postre",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["leche condensada", "leche evaporada", "yemas de huevo", "oporto o vino dulce", "azúcar", "canela"],
        sustituciones: "Todos los ingredientes se consiguen en cualquier supermercado de Neuquén; el oporto puede reemplazarse por un vino dulce local o moscato.",
        pasos: [
          "Cocinar la leche condensada junto con la evaporada a fuego lento, revolviendo hasta que espese como un manjar.",
          "Incorporar las yemas de a poco fuera del fuego, batiendo rápido para que no se cocinen de golpe.",
          "Volver a fuego muy suave unos minutos más hasta lograr una crema firme y volcar en copas.",
          "Preparar un merengue italiano con azúcar, agua y oporto, batiendo hasta lograr picos firmes.",
          "Cubrir la crema con el merengue y espolvorear con canela."
        ],
        dato: "Su nombre proviene de un poema del escritor peruano José Gálvez, que comparó la textura sedosa del merengue con un 'suspiro'."
      }
    ]
  },
  {
    id: "bolivia",
    pais: "Bolivia",
    bandera: "🇧🇴",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "bolivia-saltenas",
        nombre: "Salteñas",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 30 min",
        accesibilidad: "amarillo",
        ingredientes: ["harina", "manteca", "carne o pollo", "papa y arveja", "aceituna", "huevo duro", "pimentón", "gelatina sin sabor"],
        sustituciones: "El ají colorado boliviano en polvo puede reemplazarse por pimentón dulce o picante, disponible en cualquier supermercado. La gelatina sin sabor, usada para lograr el 'jugo' interno, se consigue en cualquier almacén.",
        pasos: [
          "Preparar un guiso jugoso de carne con papa, arveja, pimentón y caldo con gelatina sin sabor disuelta.",
          "Enfriar el guiso en la heladera hasta que tome consistencia gelatinosa.",
          "Amasar la harina con manteca derretida y agua tibia hasta lograr una masa lisa.",
          "Formar discos de masa, rellenar con el guiso frío, aceituna y huevo duro, y cerrar en forma de repulgue.",
          "Hornear a horno fuerte hasta que doren bien."
        ],
        dato: "La clave de una buena salteña es que al morderla suelte su jugo interno; por eso se recomienda comerla siempre parada e inclinada hacia adelante."
      },
      {
        id: "bolivia-pique-macho",
        nombre: "Pique Macho",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "40 min",
        accesibilidad: "verde",
        ingredientes: ["carne de res", "papas fritas", "salchicha", "cebolla", "tomate", "locoto o ají picante", "huevo", "mostaza y mayonesa"],
        sustituciones: "El locoto se reemplaza fácilmente por ají picante verde o rojo comprado en verdulería o dietética.",
        pasos: [
          "Cortar la carne en tiras y saltear a fuego alto hasta dorar.",
          "Freír las papas en bastones bien crocantes.",
          "Saltear la salchicha en rodajas junto con cebolla, tomate y ají picante.",
          "Mezclar todo en una fuente grande con las papas fritas.",
          "Coronar con huevos fritos y un hilo de mostaza y mayonesa."
        ],
        dato: "El pique macho nació en Cochabamba como plato para compartir entre varias personas directamente de una misma fuente."
      },
      {
        id: "bolivia-sopa-de-mani",
        nombre: "Sopa de Maní",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["maní", "carne de res", "papa", "zanahoria", "arveja", "fideos", "perejil"],
        sustituciones: "El maní se consigue crudo o tostado en cualquier dietética o supermercado de Neuquén sin problema.",
        pasos: [
          "Cocinar la carne en agua con cebolla hasta que esté tierna, reservando el caldo.",
          "Licuar el maní tostado con un poco del caldo hasta lograr una crema.",
          "Incorporar la crema de maní al caldo junto con papa y zanahoria en cubos.",
          "Cocinar 20 minutos y sumar arveja y fideos hasta que estén al dente.",
          "Servir bien caliente con perejil fresco picado."
        ],
        dato: "Esta sopa cremosa es típica de La Paz y se sirve tradicionalmente con una papa frita entera flotando encima."
      },
      {
        id: "bolivia-majadito",
        nombre: "Majadito",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["charque (carne seca)", "arroz", "huevo frito", "plátano maduro frito", "queso", "cebolla", "comino"],
        sustituciones: "El charque puede reemplazarse por cecina o carne seca artesanal, disponible en algunas carnicerías de Neuquén, o prepararse casero secando tiras de carne con sal.",
        pasos: [
          "Desmenuzar el charque y saltearlo con cebolla y comino hasta dorar.",
          "Cocinar el arroz junto con el charque salteado, agregando caldo hasta que quede meloso.",
          "Freír rodajas de plátano maduro.",
          "Freír un huevo por porción.",
          "Servir el arroz con el huevo frito, el plátano y queso desmenuzado por encima."
        ],
        dato: "El majadito es el plato símbolo del oriente boliviano, especialmente de Santa Cruz, región de llanos con fuerte tradición ganadera."
      },
      {
        id: "bolivia-postre-de-quinua",
        nombre: "Postre de Quinua con Leche",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "30 min",
        accesibilidad: "verde",
        ingredientes: ["quinua", "leche", "azúcar", "canela", "clavo de olor", "pasas"],
        sustituciones: "La quinua se consigue fácilmente en dietéticas y supermercados de Neuquén, incluso de producción del norte argentino.",
        pasos: [
          "Lavar bien la quinua hasta que el agua salga clara.",
          "Cocinar en leche con canela y clavo de olor a fuego bajo, revolviendo con frecuencia.",
          "Agregar azúcar y pasas cuando la quinua esté tierna y la mezcla haya espesado.",
          "Cocinar unos minutos más hasta lograr una consistencia cremosa.",
          "Servir tibio o frío espolvoreado con canela."
        ],
        dato: "La quinua es un grano sagrado para los pueblos andinos desde hace miles de años y Bolivia es uno de sus mayores productores mundiales."
      }
    ]
  },
  {
    id: "chile",
    pais: "Chile",
    bandera: "🇨🇱",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "chile-pastel-de-choclo",
        nombre: "Pastel de Choclo",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 15 min",
        accesibilidad: "verde",
        ingredientes: ["choclo (maíz fresco)", "carne molida o pollo", "cebolla", "huevo duro", "aceitunas negras", "pasas", "azúcar", "albahaca"],
        sustituciones: "El choclo fresco se consigue en verdulerías de Neuquén en temporada de verano; fuera de temporada se puede usar choclo congelado o en lata, licuándolo con un poco de leche.",
        pasos: [
          "Preparar un pino salteando carne molida (o pollo) con cebolla, pasas y especias.",
          "Distribuir el pino en el fondo de una fuente junto con huevo duro y aceitunas.",
          "Licuar el choclo con leche y albahaca hasta lograr una pasta espesa.",
          "Cocinar la pasta de choclo en una olla revolviendo hasta que tome cuerpo, y verterla sobre el pino.",
          "Espolvorear con azúcar y hornear hasta que la superficie se dore."
        ],
        dato: "El toque de azúcar espolvoreado antes de hornear es lo que le da al pastel de choclo su característica costra ligeramente caramelizada."
      },
      {
        id: "chile-curanto",
        nombre: "Curanto",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 30 min",
        accesibilidad: "amarillo",
        ingredientes: ["mariscos variados (mejillones, almejas)", "chorizo", "pollo", "papas", "milcao (papa rallada)", "col"],
        sustituciones: "Los mariscos frescos del sur de Chile no llegan a Neuquén; se pueden usar mejillones y almejas congelados o en conserva, disponibles en supermercados grandes. Esta versión se cocina en olla grande tapada en lugar del hoyo tradicional en tierra.",
        pasos: [
          "Colocar en el fondo de una olla grande las papas y el milcao.",
          "Agregar por capas el pollo, el chorizo y los mariscos.",
          "Cubrir con hojas de col para sellar el vapor.",
          "Tapar bien y cocinar a fuego medio-bajo durante 1 hora sin destapar.",
          "Servir directamente de la olla, respetando las capas de cada ingrediente."
        ],
        dato: "El curanto original se cocina en un hoyo en la tierra cubierto con piedras calientes y hojas de nalca, técnica ancestral del pueblo mapuche-huilliche de Chiloé."
      },
      {
        id: "chile-charquican",
        nombre: "Charquicán",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "45 min",
        accesibilidad: "verde",
        ingredientes: ["charqui o carne seca", "zapallo", "papa", "choclo", "cebolla", "ají de color"],
        sustituciones: "El charqui puede reemplazarse por carne seca casera o directamente por carne fresca cortada fina y salteada, si no se consigue charqui en la zona.",
        pasos: [
          "Remojar y desmenuzar el charqui, o saltear carne fresca en su lugar.",
          "Rehogar cebolla con ají de color hasta que esté transparente.",
          "Agregar zapallo y papa en cubos junto con un poco de caldo, y cocinar hasta que se ablanden.",
          "Incorporar el charqui y el choclo, y cocinar hasta que todo tome una textura de puré grueso.",
          "Servir bien caliente, tradicionalmente con un huevo frito encima."
        ],
        dato: "El charquicán es uno de los platos más antiguos de la cocina chilena, con raíces prehispánicas, y su nombre proviene del quechua 'charki', carne seca."
      },
      {
        id: "chile-cazuela-de-vacuno",
        nombre: "Cazuela de Vacuno",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "1 h 30 min",
        accesibilidad: "verde",
        ingredientes: ["osobuco o carne de vaca", "zapallo", "papa", "choclo", "zanahoria", "arroz o fideos", "cilantro"],
        sustituciones: "Todos los ingredientes son de uso común en Neuquén, muy similar a un puchero o guiso patagónico tradicional.",
        pasos: [
          "Cocinar la carne en agua con cebolla hasta que esté tierna, espumando el caldo.",
          "Agregar zapallo, papa y zanahoria en trozos grandes.",
          "Sumar el choclo entero o en rodajas y cocinar 20 minutos más.",
          "Incorporar arroz o fideos y cocinar hasta que estén a punto.",
          "Servir bien caliente con cilantro fresco picado por encima."
        ],
        dato: "La cazuela es el plato de olla más representativo de la cocina chilena cotidiana, presente en casi todas las regiones del país con pequeñas variaciones."
      },
      {
        id: "chile-mote-con-huesillos",
        nombre: "Mote con Huesillos",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "30 min (más remojo nocturno)",
        accesibilidad: "amarillo",
        ingredientes: ["mote de trigo pelado", "huesillos (duraznos deshidratados)", "azúcar", "canela", "agua"],
        sustituciones: "El mote de trigo se consigue en dietéticas; los huesillos (orejones de durazno) se encuentran en la sección de frutas secas de cualquier supermercado o dietética del Alto Valle.",
        pasos: [
          "Remojar los huesillos en agua la noche anterior.",
          "Cocinar los huesillos remojados con azúcar y canela hasta que estén tiernos, formando un almíbar.",
          "Cocinar el mote de trigo en agua aparte hasta que esté suave.",
          "Enfriar ambas preparaciones por separado.",
          "Servir en un vaso el almíbar con el huesillo, agregando el mote y un poco de líquido frío."
        ],
        dato: "El mote con huesillos es la bebida-postre más popular del verano chileno y se vende tradicionalmente en carritos callejeros."
      }
    ]
  },
  {
    id: "paraguay",
    pais: "Paraguay",
    bandera: "🇵🇾",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "paraguay-sopa-paraguaya",
        nombre: "Sopa Paraguaya",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["harina de maíz", "queso Paraguay o fresco", "cebolla", "leche", "huevos", "manteca o grasa"],
        sustituciones: "El queso Paraguay puede reemplazarse por queso fresco o cuartirolo, fáciles de conseguir en cualquier almacén de Neuquén.",
        pasos: [
          "Rehogar la cebolla en manteca hasta que esté transparente.",
          "Batir los huevos con la leche y mezclar con la harina de maíz hasta lograr una pasta homogénea.",
          "Incorporar el queso desmenuzado y la cebolla rehogada.",
          "Volcar en una fuente enmantecada.",
          "Hornear a horno moderado hasta que esté dorada y firme, unos 40 minutos."
        ],
        dato: "A pesar de su nombre, la sopa paraguaya no es líquida sino un pan de maíz y queso horneado; la leyenda cuenta que nació de un error de una cocinera del siglo XIX."
      },
      {
        id: "paraguay-chipa-guasu",
        nombre: "Chipa Guasu",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "50 min",
        accesibilidad: "verde",
        ingredientes: ["choclo fresco o congelado", "queso fresco", "cebolla", "huevos", "leche", "manteca"],
        sustituciones: "Se prepara igual con choclo congelado o en lata cuando no es temporada, sin perder sabor.",
        pasos: [
          "Rallar o procesar el choclo hasta lograr una pasta gruesa.",
          "Mezclar con queso desmenuzado, cebolla rehogada, huevos y un poco de leche.",
          "Volcar la preparación en una fuente enmantecada.",
          "Hornear a horno moderado durante 40 minutos hasta dorar.",
          "Dejar entibiar antes de cortar en porciones."
        ],
        dato: "Se la conoce como el 'pastel de choclo' paraguayo y suele acompañar los mismos asados familiares que la sopa paraguaya."
      },
      {
        id: "paraguay-bori-bori",
        nombre: "Bori Bori",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["harina de maíz", "queso fresco", "pollo o carne", "zanahoria", "apio", "cebolla"],
        sustituciones: "La harina de maíz para las bolitas se consigue en dietéticas (harina de maíz blanco o amarillo tipo polenta fina).",
        pasos: [
          "Cocinar el pollo o la carne en agua con cebolla, zanahoria y apio hasta formar un buen caldo.",
          "Amasar harina de maíz con queso rallado y un poco de caldo hasta lograr una masa que se pueda bolear.",
          "Formar pequeñas bolitas con la masa.",
          "Incorporar las bolitas al caldo hirviendo y cocinar 10 minutos hasta que floten.",
          "Servir caliente con la carne desmenuzada."
        ],
        dato: "El nombre 'bori bori' imita en guaraní el sonido de las bolitas de maíz cayendo al agua hirviendo mientras se preparan."
      },
      {
        id: "paraguay-guiso-carrero",
        nombre: "Guiso Carrero",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["carne vacuna", "arroz", "cebolla", "morrón", "tomate", "ajo", "comino"],
        sustituciones: "Receta totalmente accesible en Neuquén, similar a un guiso criollo tradicional.",
        pasos: [
          "Dorar la carne cortada en cubos junto con cebolla, morrón y ajo.",
          "Agregar tomate y comino, y cocinar unos minutos más.",
          "Sumar agua o caldo y dejar cocinar hasta que la carne esté tierna.",
          "Incorporar el arroz y cocinar hasta que absorba el líquido y quede meloso.",
          "Servir caliente, típicamente en la misma olla."
        ],
        dato: "Este guiso rústico era comida habitual de los 'carreros', arrieros que transportaban mercadería en carretas por la campaña paraguaya."
      },
      {
        id: "paraguay-dulce-de-mamon",
        nombre: "Dulce de Mamón",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["mamón verde (papaya)", "azúcar", "canela", "clavo de olor", "agua"],
        sustituciones: "El mamón (papaya verde) no siempre está en verdulerías comunes; se puede conseguir en fruterías grandes o reemplazar por zapallo cortado en tiras, que logra una textura similar preparado de la misma forma.",
        pasos: [
          "Pelar el mamón (o zapallo) y cortarlo en tiras o cubos grandes.",
          "Cocinar en agua con azúcar, canela y clavo de olor a fuego lento.",
          "Dejar reducir hasta que el almíbar espese y la fruta quede traslúcida.",
          "Enfriar antes de servir."
        ],
        dato: "El dulce de mamón se conserva tradicionalmente en frascos y se sirve como acompañamiento de quesos o simplemente como postre casero."
      }
    ]
  },
  {
    id: "uruguay",
    pais: "Uruguay",
    bandera: "🇺🇾",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "uruguay-chivito-al-plato",
        nombre: "Chivito al Plato",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "30 min",
        accesibilidad: "verde",
        ingredientes: ["bife de lomo o nalga", "jamón", "queso", "huevo frito", "lechuga", "tomate", "aceitunas", "papas fritas"],
        sustituciones: "Todos los ingredientes son de fácil acceso en cualquier supermercado o carnicería de Neuquén.",
        pasos: [
          "Cocinar el bife a la plancha al punto deseado.",
          "Colocar sobre el bife una feta de jamón y queso, dejando que se derrita con el calor.",
          "Agregar un huevo frito encima.",
          "Acompañar con lechuga, tomate y aceitunas.",
          "Servir con abundantes papas fritas al costado."
        ],
        dato: "El chivito nació en Punta del Este en los años 40, cuando un cliente pidió carne de chivo y, al no haber, le sirvieron un sándwich de carne de res que terminó adoptando el nombre original."
      },
      {
        id: "uruguay-pastel-de-carne",
        nombre: "Pastel de Carne",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["masa para tarta", "carne picada", "huevo duro", "aceitunas", "cebolla", "pasas", "morrón"],
        sustituciones: "Receta prácticamente idéntica a la torta pascualina o pastel criollo argentino; sin dificultad de ingredientes.",
        pasos: [
          "Saltear la carne picada con cebolla y morrón hasta dorar.",
          "Agregar pasas y dejar enfriar el relleno.",
          "Forrar una fuente con la masa y colocar el relleno junto con huevo duro y aceitunas.",
          "Cubrir con otra capa de masa y sellar los bordes.",
          "Hornear hasta que la masa esté dorada."
        ],
        dato: "Este pastel es un clásico de las fiambrerías uruguayas y suele acompañar las meriendas familiares de los domingos."
      },
      {
        id: "uruguay-puchero-a-la-uruguaya",
        nombre: "Puchero a la Uruguaya",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "2 h",
        accesibilidad: "verde",
        ingredientes: ["falda o garrón", "chorizo", "morcilla", "zapallo", "boniato", "choclo", "repollo", "papa"],
        sustituciones: "Todo se consigue fácilmente en verdulerías y carnicerías de Neuquén, similar al puchero tradicional de la región.",
        pasos: [
          "Cocinar la carne en agua abundante junto con chorizo, espumando el caldo con frecuencia.",
          "Agregar zapallo, boniato y papa en trozos grandes.",
          "Sumar choclo y repollo, y cocinar hasta que todas las verduras estén tiernas.",
          "Agregar la morcilla en los últimos 15 minutos de cocción.",
          "Servir la carne y verduras junto con el caldo caliente."
        ],
        dato: "El puchero uruguayo mantiene la fuerte herencia de la inmigración española e italiana, muy presente en toda la cocina rioplatense."
      },
      {
        id: "uruguay-guiso-de-mondongo",
        nombre: "Guiso de Mondongo (Buseca)",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "2 h",
        accesibilidad: "verde",
        ingredientes: ["mondongo", "porotos blancos", "papa", "zapallo", "morrón", "tomate", "panceta"],
        sustituciones: "El mondongo se consigue en carnicerías locales sin problema; el resto son verduras y legumbres comunes.",
        pasos: [
          "Hervir el mondongo previamente limpio hasta que esté tierno, y cortarlo en tiras.",
          "Preparar un sofrito con panceta, cebolla, morrón y tomate.",
          "Agregar el mondongo, los porotos remojados y suficiente agua o caldo.",
          "Sumar papa y zapallo en trozos, y cocinar hasta que espese.",
          "Servir caliente, idealmente al día siguiente cuando los sabores se asientan."
        ],
        dato: "Este guiso, también llamado buseca en el Río de la Plata, es un plato de aprovechamiento muy popular en los meses fríos."
      },
      {
        id: "uruguay-postre-chaja",
        nombre: "Postre Chajá",
        tipo: "Postre",
        dificultad: "Medio",
        tiempo: "1 h + heladera",
        accesibilidad: "verde",
        ingredientes: ["bizcochuelo", "crema de leche", "merengue", "duraznos en almíbar", "dulce de leche"],
        sustituciones: "Todos los ingredientes se consiguen en cualquier supermercado de Neuquén; es muy similar a otros postres de crema y merengue populares en Argentina.",
        pasos: [
          "Cortar el bizcochuelo en capas y humedecerlo con el almíbar de los duraznos.",
          "Alternar capas de bizcochuelo, crema batida, dulce de leche, duraznos y trozos de merengue.",
          "Repetir hasta llenar el molde, terminando con crema y merengue.",
          "Llevar a la heladera un mínimo de 3 horas.",
          "Decorar con más merengue y duraznos antes de servir."
        ],
        dato: "El chajá nació en la ciudad de Paysandú a mediados del siglo XX y debe su nombre a un ave autóctona uruguaya, por lo liviano y esponjoso del postre."
      }
    ]
  },
  {
    id: "brasil",
    pais: "Brasil",
    bandera: "🇧🇷",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "brasil-feijoada",
        nombre: "Feijoada",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "2 h",
        accesibilidad: "amarillo",
        ingredientes: ["porotos negros", "carne de cerdo variada (costilla, panceta)", "chorizo o linguiça", "cebolla", "ajo", "laurel", "naranja", "arroz"],
        sustituciones: "La linguiça calabresa brasileña puede reemplazarse por chorizo colorado picante argentino, muy similar en sabor y textura.",
        pasos: [
          "Remojar los porotos negros la noche anterior.",
          "Cocinar los porotos junto con las carnes de cerdo y el chorizo, laurel y ajo, a fuego lento durante al menos 1 hora y media.",
          "Retirar parte de los porotos, hacer un puré grueso y devolver a la olla para espesar el guiso.",
          "Ajustar sal y cocinar 20 minutos más hasta que las carnes estén bien tiernas.",
          "Servir con arroz blanco, rodajas de naranja y farofa aparte."
        ],
        dato: "La feijoada es considerada el plato nacional de Brasil y tradicionalmente se sirve los miércoles y sábados en muchos restaurantes."
      },
      {
        id: "brasil-moqueca-baiana",
        nombre: "Moqueca Baiana",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "45 min",
        accesibilidad: "amarillo",
        ingredientes: ["pescado blanco o camarones", "leche de coco", "aceite de dendê", "pimiento", "tomate", "cebolla", "cilantro"],
        sustituciones: "El aceite de dendê (de palma, color rojizo) es difícil de conseguir en Neuquén; se reemplaza por aceite común con una pizca de páprika o pimentón para lograr un color similar. La leche de coco se consigue en dietéticas y supermercados grandes.",
        pasos: [
          "Marinar el pescado con limón, sal y ajo.",
          "Preparar una base con cebolla, pimiento y tomate cortados en tiras.",
          "Colocar el pescado sobre la base de verduras y cubrir con leche de coco y el aceite con pimentón.",
          "Cocinar a fuego medio, sin revolver demasiado, hasta que el pescado esté a punto.",
          "Finalizar con cilantro fresco y servir con arroz blanco."
        ],
        dato: "La moqueca de Bahía se cocina tradicionalmente en una cazuela de barro llamada 'panela', que ayuda a distribuir el calor de forma pareja."
      },
      {
        id: "brasil-feijao-tropeiro",
        nombre: "Feijão Tropeiro",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "40 min",
        accesibilidad: "verde",
        ingredientes: ["porotos", "harina de mandioca (farofa)", "panceta", "huevo", "cebolla", "ajo", "cebolla de verdeo"],
        sustituciones: "La harina de mandioca se consigue en dietéticas o casas de productos brasileños/paraguayos; si no hay, se puede usar pan rallado tostado en manteca como sustituto de textura.",
        pasos: [
          "Cocinar los porotos hasta que estén tiernos pero firmes, y escurrir.",
          "Freír la panceta hasta dorar y reservar.",
          "En la misma grasa, rehogar cebolla y ajo, y agregar los porotos.",
          "Sumar huevos revueltos y la harina de mandioca, mezclando bien para que se integre.",
          "Servir caliente con la panceta frita y cebolla de verdeo por encima."
        ],
        dato: "Este plato se originó como comida práctica de los 'tropeiros', arrieros que transportaban ganado por el interior de Minas Gerais."
      },
      {
        id: "brasil-arroz-de-carreteiro",
        nombre: "Arroz de Carreteiro",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "40 min",
        accesibilidad: "verde",
        ingredientes: ["charque o carne seca", "arroz", "cebolla", "ajo", "morrón", "perejil"],
        sustituciones: "El charque puede sustituirse por carne seca casera o cecina, disponible en carnicerías de la zona; también funciona con carne fresca salteada.",
        pasos: [
          "Desalar y desmenuzar el charque (o cortar la carne fresca en tiras finas).",
          "Saltear la carne con cebolla, ajo y morrón hasta dorar bien.",
          "Agregar el arroz y sofreír un minuto junto con la carne.",
          "Incorporar agua o caldo y cocinar hasta que el arroz esté a punto.",
          "Servir caliente con perejil fresco picado."
        ],
        dato: "Este plato de olla única era la comida principal de los 'carreteiros' del sur de Brasil, que transportaban mercadería en largas travesías con carretas de bueyes."
      },
      {
        id: "brasil-brigadeiro",
        nombre: "Brigadeiro",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "20 min",
        accesibilidad: "verde",
        ingredientes: ["leche condensada", "cacao amargo en polvo", "manteca", "una pizca de sal", "chispas de chocolate o granulado"],
        sustituciones: "Todos los ingredientes son de supermercado; es igual de accesible que preparar trufas de dulce de leche.",
        pasos: [
          "Cocinar la leche condensada con cacao y manteca a fuego bajo, revolviendo sin parar.",
          "Cocinar hasta que la mezcla se despegue del fondo de la olla.",
          "Dejar enfriar en un plato untado con manteca.",
          "Formar bolitas con las manos ligeramente enmantecadas.",
          "Pasar cada bolita por granulado de chocolate."
        ],
        dato: "El brigadeiro debe su nombre a un brigadier brasileño de los años 40 y hoy es el dulce infaltable en cualquier cumpleaños de Brasil."
      }
    ]
  },
  {
    id: "argentina",
    pais: "Argentina",
    bandera: "🇦🇷",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "argentina-locro-norteno",
        nombre: "Locro Norteño",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "2 h 30 min",
        accesibilidad: "amarillo",
        ingredientes: ["maíz blanco para locro", "poroto pallar o alubias", "zapallo", "panceta", "chorizo colorado", "cebolla", "pimentón"],
        sustituciones: "El maíz partido especial para locro se consigue en dietéticas y almacenes de productos regionales; en su defecto se puede usar maíz blanco pisado, remojado desde la noche anterior.",
        pasos: [
          "Remojar el maíz y los porotos desde la noche anterior.",
          "Cocinar el maíz y los porotos en abundante agua junto con panceta hasta que empiecen a ablandarse.",
          "Agregar el zapallo en trozos y cocinar hasta que se deshaga y espese el locro.",
          "Preparar un color con pimentón, ají molido y grasa, y sumarlo a la olla.",
          "Cocinar a fuego bajo revolviendo cada tanto, y servir con el color aparte por encima."
        ],
        dato: "El locro es plato central de las fiestas patrias argentinas, especialmente el 25 de mayo y el 9 de julio, con orígenes que se remontan a pueblos andinos prehispánicos."
      },
      {
        id: "argentina-chupin-de-pescado",
        nombre: "Chupín de Pescado",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "45 min",
        accesibilidad: "verde",
        ingredientes: ["surubí o pescado de río", "tomate", "morrón", "cebolla", "papa", "vino blanco", "perejil"],
        sustituciones: "El surubí puede reemplazarse por cualquier pescado blanco disponible en pescaderías de Neuquén, como merluza o trucha.",
        pasos: [
          "Preparar un sofrito de cebolla y morrón, y agregar tomate.",
          "Sumar un chorro de vino blanco y dejar reducir.",
          "Agregar papas en rodajas y caldo o agua, cocinando hasta que estén casi tiernas.",
          "Incorporar el pescado en trozos y cocinar 10 minutos más sin revolver fuerte.",
          "Servir caliente con perejil fresco picado."
        ],
        dato: "El chupín es un guiso típico de las costas del río Paraná, herencia de las comunidades de pescadores litoraleños e inmigrantes italianos."
      },
      {
        id: "argentina-cordero-patagonico-al-asador",
        nombre: "Cordero Patagónico al Asador",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "3 h",
        accesibilidad: "verde",
        ingredientes: ["cordero patagónico entero o media res", "sal gruesa", "ajo", "romero", "aceite de oliva"],
        sustituciones: "Ingrediente estrella de la propia región: en Neuquén el cordero patagónico se consigue fresco y de excelente calidad en carnicerías locales y ferias.",
        pasos: [
          "Abrir el cordero en cruz y sujetarlo firme en la estaca o parrilla con tapa.",
          "Condimentar con sal gruesa, ajo picado y romero.",
          "Colocar a fuego bajo e indirecto, con la piel hacia arriba al principio.",
          "Girar cada tanto y cocinar lentamente durante al menos 3 horas hasta que la carne se separe del hueso.",
          "Dejar reposar unos minutos antes de trozar y servir."
        ],
        dato: "El cordero patagónico es reconocido internacionalmente por el sabor particular que le da el pastizal natural de la estepa, donde pastan libremente ovejas de la región."
      },
      {
        id: "argentina-carbonada-criolla",
        nombre: "Carbonada Criolla",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "1 h 30 min",
        accesibilidad: "verde",
        ingredientes: ["carne vacuna", "zapallo", "batata", "choclo", "durazno", "papa", "cebolla", "arroz"],
        sustituciones: "Todos los ingredientes se consiguen en cualquier verdulería o supermercado de Neuquén sin dificultad.",
        pasos: [
          "Dorar la carne cortada en cubos junto con cebolla.",
          "Agregar caldo o agua y cocinar hasta que la carne esté tierna.",
          "Sumar zapallo, batata, papa y choclo en trozos, cocinando hasta que estén a punto.",
          "Incorporar arroz y cocinar hasta que absorba el líquido.",
          "Agregar duraznos en trozos al final para dar el toque dulce característico y servir caliente."
        ],
        dato: "La carbonada criolla es un guiso de origen colonial muy extendido en Cuyo y la región pampeana, con esa combinación agridulce típica de fruta y carne."
      },
      {
        id: "argentina-alfajores-de-maicena",
        nombre: "Alfajores de Maicena",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["maicena", "harina", "manteca", "dulce de leche", "coco rallado"],
        sustituciones: "Receta clásica argentina con ingredientes de venta en cualquier almacén del país.",
        pasos: [
          "Batir la manteca con azúcar hasta cremar.",
          "Incorporar maicena y harina tamizadas hasta formar una masa tierna.",
          "Estirar la masa y cortar círculos parejos.",
          "Hornear a horno suave hasta que estén apenas dorados en la base.",
          "Unir de a pares con dulce de leche y pasar los bordes por coco rallado."
        ],
        dato: "Los alfajores de maicena son uno de los dulces caseros más queridos de Argentina, presentes en meriendas de generaciones enteras."
      }
    ]
  },
  {
    id: "guyana",
    pais: "Guyana",
    bandera: "🇬🇾",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "guyana-pepperpot",
        nombre: "Pepperpot",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "3 h",
        accesibilidad: "rojo",
        ingredientes: ["carne de res en trozos", "cassareep (concentrado de yuca)", "canela", "clavo de olor", "ají picante", "azúcar negra"],
        sustituciones: "El cassareep es exclusivo de Guyana y prácticamente imposible de conseguir en Argentina. Como alternativa más simple, se prepara un guiso de carne oscuro reduciendo azúcar negra quemada con un poco de vinagre, canela y clavo de olor, que se acerca al perfil agridulce y oscuro del plato original.",
        pasos: [
          "Dorar la carne en una olla grande con un poco de aceite.",
          "Agregar canela, clavo de olor y ají picante entero.",
          "Sumar el cassareep (o el sustituto de azúcar quemada con vinagre) y suficiente agua para cubrir la carne.",
          "Cocinar a fuego muy bajo durante al menos 2 horas y media, hasta que la salsa espese y oscurezca.",
          "Servir caliente, tradicionalmente con pan casero."
        ],
        dato: "El pepperpot es el plato nacional de Guyana y se prepara especialmente en Navidad; se dice que, gracias al efecto conservante del cassareep, la olla puede 'recargarse' con más carne día a día sin echarse a perder."
      },
      {
        id: "guyana-cook-up-rice",
        nombre: "Cook-up Rice",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "50 min",
        accesibilidad: "amarillo",
        ingredientes: ["arroz", "porotos o arvejas de paloma (pigeon peas)", "leche de coco", "carne o pollo", "tomillo", "cebolla de verdeo"],
        sustituciones: "Las arvejas de paloma (pigeon peas) no se consiguen en Neuquén; se reemplazan por arvejas comunes o porotos negros, que funcionan bien en la textura del plato. La leche de coco se encuentra en dietéticas y supermercados grandes.",
        pasos: [
          "Cocinar los porotos o arvejas hasta que estén casi tiernos.",
          "Dorar la carne o el pollo junto con cebolla de verdeo y tomillo.",
          "Agregar la leche de coco y los porotos cocidos, y llevar a hervor.",
          "Incorporar el arroz y cocinar tapado a fuego bajo hasta que absorba todo el líquido.",
          "Dejar reposar unos minutos antes de servir."
        ],
        dato: "El 'cook-up rice' es el plato dominical por excelencia en Guyana, donde toda la familia se reúne para comerlo directamente de una gran olla común."
      },
      {
        id: "guyana-metemgee",
        nombre: "Metemgee",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["yuca", "batata", "plátano verde", "ñame", "leche de coco", "bolitas de harina (fufu)", "pescado salado"],
        sustituciones: "El ñame y el pescado salado tipo 'saltfish' son difíciles de hallar; el ñame puede omitirse o reemplazarse por más batata, y el pescado salado por bacalao seco conseguido en pescaderías especializadas.",
        pasos: [
          "Desalar el pescado salado (o bacalao) dejándolo en agua un par de horas.",
          "Cocinar la yuca, batata, plátano verde y ñame (o su sustituto) en leche de coco con agua.",
          "Formar pequeñas bolitas de harina y agregarlas a la olla.",
          "Sumar el pescado desalado y cocinar hasta que todo esté tierno y el líquido haya espesado.",
          "Servir caliente en un plato hondo."
        ],
        dato: "El metemgee combina la tradición africana de los tubérculos cocidos en leche de coco con las bolitas de harina de origen europeo, reflejo de la mezcla cultural guyanesa."
      },
      {
        id: "guyana-curry-de-pollo-con-roti",
        nombre: "Curry de Pollo con Roti",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["pollo", "curry en polvo", "papa", "harina para roti", "cebolla", "ajo", "jengibre"],
        sustituciones: "El curry en polvo estilo caribeño-indio puede reemplazarse por curry común de supermercado combinado con un poco de comino y cúrcuma. La harina para roti es simplemente harina común con un poco de aceite y agua, sin dificultad.",
        pasos: [
          "Dorar cebolla, ajo y jengibre, y agregar el curry en polvo para que libere aroma.",
          "Sumar el pollo y sellar bien en la mezcla de especias.",
          "Agregar papa en trozos y agua, y cocinar tapado hasta que el pollo esté tierno.",
          "Amasar la harina con agua y un poco de aceite hasta formar discos finos.",
          "Cocinar los roti en plancha caliente y servir junto con el curry."
        ],
        dato: "El roti llegó a Guyana con los trabajadores contratados de India en el siglo XIX y hoy es tan popular como cualquier plato de raíz africana o amerindia del país."
      },
      {
        id: "guyana-pine-tart",
        nombre: "Pine Tart",
        tipo: "Postre",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["masa hojaldrada", "ananá (piña)", "azúcar", "canela", "esencia de vainilla"],
        sustituciones: "El ananá fresco no siempre está disponible en Neuquén; se puede usar ananá en lata, que funciona muy bien para el relleno cocido.",
        pasos: [
          "Cocinar el ananá picado con azúcar y canela hasta lograr un relleno espeso tipo mermelada.",
          "Estirar la masa hojaldrada y cortar cuadrados o círculos.",
          "Rellenar con la mezcla de ananá y cerrar formando pequeñas empanaditas.",
          "Pincelar con huevo y hornear hasta dorar.",
          "Dejar enfriar antes de servir."
        ],
        dato: "El pine tart es una herencia de la repostería británica adaptada con frutas tropicales, típica de las panaderías guyanesas."
      }
    ]
  },
  {
    id: "surinam",
    pais: "Surinam",
    bandera: "🇸🇷",
    continente: "América",
    region: "Sudamérica",
    recetas: [
      {
        id: "surinam-pom",
        nombre: "Pom",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h 30 min",
        accesibilidad: "rojo",
        ingredientes: ["pomtajer (taro) rallado", "pollo", "naranja agria", "cebolla", "ajo", "nuez moscada", "tomate"],
        sustituciones: "El pomtajer, una raíz similar al taro, no se consigue en Argentina; se reemplaza por una combinación de papa y batata ralladas, que imitan razonablemente la textura del plato al horno.",
        pasos: [
          "Cocinar el pollo con cebolla, ajo, tomate y jugo de naranja agria hasta que esté tierno.",
          "Rallar la papa y la batata (en reemplazo del pomtajer) y mezclar con un poco del caldo del pollo.",
          "Colocar en una fuente para horno alternando capas de pollo desmenuzado y del rallado de papa y batata.",
          "Condimentar cada capa con nuez moscada.",
          "Hornear hasta que la superficie se dore y quede firme."
        ],
        dato: "El pom es el plato festivo por excelencia de Surinam, herencia de la comunidad judía sefardí que se estableció en la colonia; se sirve infaltablemente en Navidad."
      },
      {
        id: "surinam-moksi-meti",
        nombre: "Moksi Meti",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "2 h",
        accesibilidad: "amarillo",
        ingredientes: ["pollo", "carne de cerdo", "carne salada o ahumada", "cebolla", "ajo", "salsa de soja", "azúcar quemada"],
        sustituciones: "La carne salada o ahumada surinamesa puede reemplazarse por panceta ahumada o carne salada casera, fáciles de conseguir en carnicerías de Neuquén.",
        pasos: [
          "Caramelizar un poco de azúcar hasta dorar y usarlo como base de color para las carnes.",
          "Dorar por separado el pollo, el cerdo y la panceta ahumada.",
          "Unir todas las carnes en una misma olla con cebolla, ajo y salsa de soja.",
          "Cocinar a fuego lento con un poco de agua durante al menos 1 hora hasta que todas las carnes estén tiernas.",
          "Servir con arroz blanco."
        ],
        dato: "Moksi meti significa literalmente 'carne mezclada' en sranan tongo, la lengua criolla de Surinam, y se sirve tradicionalmente en celebraciones grandes."
      },
      {
        id: "surinam-saoto-soup",
        nombre: "Saoto Soup",
        tipo: "Plato Principal",
        dificultad: "Fácil",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["pollo", "brotes de soja", "huevo duro", "papa frita en bastones", "cúrcuma", "cebolla de verdeo", "limón"],
        sustituciones: "Los brotes de soja frescos pueden ser difíciles de hallar; se consiguen en algunas dietéticas o verdulerías orientales, o se reemplazan por repollo blanco cortado bien fino.",
        pasos: [
          "Cocinar el pollo en agua con cúrcuma hasta que esté tierno y el caldo tome color amarillo.",
          "Desmenuzar el pollo y colar el caldo.",
          "Colocar en cada plato brotes de soja (o repollo fino), papas fritas y huevo duro en mitades.",
          "Verter el caldo caliente con el pollo desmenuzado encima.",
          "Terminar con un chorrito de limón y cebolla de verdeo fresca."
        ],
        dato: "Esta sopa refleja la fuerte herencia javanesa de Surinam, traída por trabajadores contratados de Indonesia durante la época colonial holandesa."
      },
      {
        id: "surinam-roti-met-kip",
        nombre: "Roti met Kip",
        tipo: "Plato Principal",
        dificultad: "Medio",
        tiempo: "1 h",
        accesibilidad: "amarillo",
        ingredientes: ["pollo", "papa", "masa de roti (harina)", "curry en polvo", "ajo", "cebolla", "jengibre"],
        sustituciones: "El curry al estilo surinamés-javanés puede prepararse con curry común más un toque de comino y cúrcuma; el resto de los ingredientes son de fácil acceso en Neuquén.",
        pasos: [
          "Rehogar cebolla, ajo y jengibre, y agregar el curry en polvo hasta que libere aroma.",
          "Sumar el pollo y dorar bien en la mezcla de especias.",
          "Agregar papa en trozos y un poco de agua, cocinando tapado hasta que todo esté tierno.",
          "Amasar la harina con agua y aceite hasta formar discos finos, y cocinarlos en plancha caliente.",
          "Servir el curry envuelto o acompañado con el roti recién hecho."
        ],
        dato: "El roti surinamés tiene su propio estilo, más grueso y suave que el de Guyana o Trinidad, resultado de la fusión entre las tradiciones javanesa e india de la comunidad local."
      },
      {
        id: "surinam-broodpudding",
        nombre: "Surinaamse Broodpudding",
        tipo: "Postre",
        dificultad: "Fácil",
        tiempo: "1 h",
        accesibilidad: "verde",
        ingredientes: ["pan del día anterior", "leche", "huevos", "azúcar", "pasas", "canela"],
        sustituciones: "Receta de aprovechamiento con ingredientes básicos de cualquier cocina neuquina; no presenta dificultad alguna.",
        pasos: [
          "Remojar el pan cortado en trozos con leche hasta que se ablande bien.",
          "Batir huevos con azúcar y canela, y mezclar con el pan remojado.",
          "Agregar pasas y volcar todo en una fuente enmantecada.",
          "Hornear a horno moderado hasta que cuaje y la superficie se dore.",
          "Servir tibio, solo o con un poco de dulce de leche."
        ],
        dato: "Este budín de pan es herencia directa de la cocina holandesa, adaptada en Surinam con las especias y el toque tropical propios del Caribe sudamericano."
      }
    ]
  }
];
