var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/estationery', { useMongoClient: true, });

var products = [
  new Product({        
      title: 'Bolígrafo BIC 1mm Verde',
      description: 'birome boligrafo bic verde',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 20,
      minimumStock: 15,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Bolígrafo BIC 1mm Roja',
      description: 'birome boligrafo bic rojo roja',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 20,
      minimumStock: 15,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Waste Toner Bottle SP C430',
      description: 'bottelon botella toner',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Bolígrafo Signo Uni UM-100 0.7mm Verde',
      description: 'birome boligrafo verde',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 10,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Bolígrafo Signo Uni UM-100 0.7mm Negro',
      description: 'birome boligrafo negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 60,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo Uni-Ball UB-187 Rojo',
      description: 'birome boligrafo rojo roja',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 12,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'BOLÍGRAFO UNI NEEDLE POINT UB-165 - BLACK',
      description: 'birome boligrafo negro negra',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 29,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Bolígrafo Uni-ball eye UB-157 verde',
      description: 'birome boligrafo verde',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Tinta Pelikan 957 4K 28cc Negro',
      description: 'tinta pelikan sellos negro negra',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Tinta Pelikan 957 4K 28cc AZUL',
      description: 'tinta pelikan sellos azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'TACO CALENDARIO',
      description: 'taco calendario',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 4,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'MARCADOR PERMANENTE STAEDTLER LUMCOLOR AZUL',
      description: 'marcador permanente azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Sacabroche Kangaro SR-45T',
      description: 'removedor saca ganchos broches broche broche',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 4,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'PERFORADORA SAX',
      description: 'perforadora',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Almohadilla p/ Sello 57 x 88mm Shiny S-2',
      description: 'sello tinta',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Pilas C Duracell',
      description: 'bateria pila pilas',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 4,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Pila AAA Energizer Max',
      description: 'bateria pila pilas',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 8,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'ROLLO FAX REMINGTON 216-30',
      description: 'rollo papel fax',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 1,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'MARCADOR PERMANENTE PELIKAN EDDING 300',
      description: 'marcador permanente',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 12,
      lastModified: Date.now()
      }),  
  new Product({        
      title: 'PERFORADORA OTA',
      description: 'perforadora grande',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Notas Adhesivas Amarillas Neon 76*76*100 x Unidad',
      description: 'postit post it notas',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 98,
      minimumStock: 20,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Carpeta Oficio de papel varios colores',
      description: 'carpeta oficio cartulina',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 40,
      minimumStock: 40,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'FULLMARK dot matrix printer nylon ribbon black 13X30mm N835BK 2835DN',
      description: 'cinta impresora matricial',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'MARCADOR PIZZARRA TRABI 450PLUS NEGRO',
      description: 'marcador pizzarra negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'MARCADOR PIZZARRA TRABI 450PLUS AZUL',
      description: 'marcador pizzarra azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 8,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'MARCADOR PIZZARRA TRABI 450PLUS ROJO',
      description: 'marcador pizzarra rojo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 7,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Broche Mit 50 x 1000',
      description: 'ganchos ganchitos abrochadora broche',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 47,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Broche Mit 23/15 x 1000',
      description: 'ganchos ganchitos abrochadora broche',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Resaltador Teoria+ 310 | Amarillo',
      description: 'marcador resaltador',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 15,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Lapíz Noris Staedtler HB',
      description: 'lapiz lapices',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'CALCULADORA KENKO KK-2105-12',
      description: 'calculadora',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({        
      title: 'Broche Kangaro 24/8 x 1000',
      description: 'ganchos ganchitos abrochadora broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      laabhjmnostModified: Date.now()
      }),
  new Product({        
      title: 'Broche Kangaro 23/6 x 1000',
      description: 'ganchos ganchitos abrochadora broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Kangaro 23/20-H x 1000',
      description: 'ganchos ganchitos abrochadora broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Kangaro 23/17-H x 1000',
      description: 'ganchos ganchitos abrochadora broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 20,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Kangaro 23/13-H x 1000',
      description: 'ganchos ganchitos abrochadora broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 10,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Kangaro 23/10-H x 1000',
      description: 'ganchos ganchitos abrochadora broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 10,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Abrochadora Kangaro HP-435',
      description: 'ganchos ganchitos abrochadora broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Carpeta A4 C/ 10 Folios | Negro',
      description: 'carpeta folios negra',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'TIJERA EZCO LOTUS 22CM',
      description: 'tijera grande',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 5,
      lastModified: Date.now()
      }),  
  new Product({
      title: 'Marcador permanente Trabi Fino EAN 7790 Verde',
      description: 'Marcador verde permanente indeleble',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Carpeta Clip Lateral A4',
      description: 'folio',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 40,
      minimumStock: 20,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Calculadora Daihatsu D-E1245T | 12 Dígitos',
      description: 'calculadora',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Calculadora Daihatsu D-E1200T | 12 Dígitos',
      description: 'calculadora',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Trincheta/Cuter Touch Knife Consul D-803',
      description: 'Trincheta Cutter cuter',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'HP 79A Black Original LaserJet Toner Cartridge (H-CF279A)',
      description: 'toner impresora 279a 79a',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 7,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cinta Correctora 8M CR-953',
      description: 'corrector liquid cinta',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'HP 305A Black Original LaserJet Toner Cartridge (CE410A)',
      description: 'impresora toner 410a ce410a',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo Ricoh Negro C430A',
      description: 'toner 430 negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'HP 128A Cyan Original LaserJet Toner Cartridge (CE321A)',
      description: 'toner 128a ce321a 321',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo Ricoh | C430A Magenta',
      description: 'toner ricoh 430 magenta',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo Ricoh | C430E Amarillo',
      description: 'toner ricoh 430 amarillo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo Ricoh | C430E Cyan',
      description: 'toner ricoh 430 cyan',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'MOJA DEDO PIZZINI C20',
      description: 'moja dedo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Waste Toner Bottle SP C430',
      description: 'botella botellon tonr residuo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'BANDA ELASTICA FINA BOLSA',
      description: 'banda elastica goma gomita fina',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 1,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo Consul Trio | Rojo',
      description: 'lapicera birome boligrafo rojo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 14,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador permanente Trabi Fino negro',
      description: 'Marcador negro permanente indeleble punta fina',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 12,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador permanente Trabi Fino rojo',
      description: 'marcador permanente fino rojo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 12,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Pilas AA Duracell',
      description: 'bateria pila baterias',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 8,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Taco de Papel Color 9*9 x 400hjs',
      description: 'taco color',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 57,
      minimumStock: 20,
      lastModified: Date.now()
      }),
  new Product({
      title: 'SACA BROCHES U-FEN 9905',
      description: 'saca broches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cuaderno América A4 T/B C/Esp 80Hjs Rayado',
      description: 'cuaderno a4 rayado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: '	Cuaderno América A4 T/B C/Esp 80Hjs Cuadric.',
      description: 'cuaderno a4 cuadriculado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cuaderno Mis Apuntes Travel A5 T/B C/Esp 80Hjs Cuadr',
      description: 'cuaderno a5 cuadriculado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 7,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cuaderno Mis Apuntes Travel 160 x 210 mm T/B C/Esp 80Hjs Rayado',
      description: 'cuaderno rayado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Porta Cinta Adhesiva P/ Escritorio',
      description: 'porta cinta scotch',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 14,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'RICOH Toner 1170D/S15/LD015',
      description: 'toner ricoh 1170 s15 15',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'CAJA TARJETERO EAGLE 8080S A-Z 350 TARJETAS',
      description: 'tarjetero tarjetas chico',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'CAJA TARJETERO EAGLE 808L A-Z 350 TARJETAS',
      description: 'tarjetero tarjetas chico grande',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'lapiz corrector sylvapen berol',
      description: 'liquid paper corrector',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 12,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broches MIT 21/6',
      description: 'Broche mit 21/6',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 10,
      minimumStock: 15,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cera para contar billetes PIZZINI 20g',
      description: 'cera',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 8,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Notas Adhesivas Amarillas 76*51*100 x Unidad',
      description: 'post-it postit post it',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 13,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Pelikan Permanente 711 Pta. Rda. Negro',
      description: 'marcador permanente negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 27,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Folio Credencial A4',
      description: 'folio a4',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 286,
      minimumStock: 200,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Mit 64 x 1000',
      description: 'broche abrochadora ganchos ganchitos',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 20,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Block Húsares A5 C/ Espiral Rayado',
      description: 'block cuaderno a5 rayado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 10,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'TONER ALTERNATIVO HP | CB540/CE320 A NEGRO',
      description: 'toner 540 320 negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'TONER ALTERNATIVO 533A/413A M',
      description: 'toner 533 413 magenta',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'TONER ALTERNATIVO 532A/412A Y',
      description: 'toner 532 412 amarillo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Goma Borrar Staedtler Duo Lapiz/Tinta',
      description: 'goma borrar',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Perforadora Kangaro 520',
      description: 'perforadora',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Binder Clip Negro 51mm x 12 Uni.',
      description: 'clip manito manitos',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 11,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Minas Consul HB 0.5mm Tubo x 12	515',
      description: 'minas 0.5mm lapiz',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Caja Nepaco Plástico x 50',
      description: 'nepaco',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Voligoma 30ml',
      description: 'voligoma',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Tinta Pelikan 4K | 28cc Rojo',
      description: 'tinta roja rojo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Porta Tacos 9x9 Pizzini',
      description: 'porta tacos',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo Signo Uni UM-100 0.7mm azul',
      description: 'boligrafo birome zul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 49,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Porta Lapices Negro Pizzini',
      description: 'porta lapiz',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cinta Transparente Embalaje 48*100',
      description: 'cinta embalar embalaje',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Abrochadora Kangaro HP-45',
      description: 'abrochadora',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Binder Clip Negro 41mm x 12 Uni.',
      description: 'manito manitos clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 19,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'TONER ALTERNATIVO 531A/411A C',
      description: 'toner 531 411 cyan',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'marcador permanente rojo trabi punta rendonda',
      description: 'marcador grueso rojo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 12,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Banderitas 45*12 x 200 POP-UP FLAGS STICK´N	407',
      description: 'postit post it notas POP-UP FLAGS STICK N STICKN',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 7,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Goma de borrar lapiz STAEDTLER rasoplast',
      description: 'goma borrar',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 26,
      minimumStock: 15,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | 390X Negro',
      description: 'toner 390',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Notas Adhesivas Amarillas 38*51*100 x Unidad',
      description: 'post-it postit post it',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 30,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Lomo p/ Bibliorato x 20 Unidades Azul',
      description: 'lomo bibliorato azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Mit 24/6 x 1000',
      description: 'broche gancho ganchito',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bandas Elásticas Ancha Latex x 500gr',
      description: 'banda elastica goma gomita',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CE313/CF353A Magenta (313A M)',
      description: 'toner 313 353 313a magenta',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 4,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Tinta p/ Sello Negra Opalo',
      description: 'tinta sello',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 18,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CE312/CF352A Amarillo (312A Y)',
      description: 'toner 312 352 312a amarillo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 4,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CE311/CF351A Cyan',
      description: 'toner 311 351a cyan',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Resaltador Teoria+ 310 | Verde',
      description: 'resaltador verde',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 17,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Resaltador Teoria+ 310 | Rosa',
      description: 'resaltador rosa',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 16,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'RESALTADOR TEORIA+ 310 | AZUL',
      description: 'resaltador azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 16,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CE310/CF350A Negro',
      description: 'toner negro 310 350',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche 2 Patas Dorados N°8 | 41mm x 100 unidades',
      description: 'broche 2 patas dorado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CF283A Negro',
      description: 'toner 283a negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CF281X Negro',
      description: 'toner 281',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CE278A',
      description: 'toner 278',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 7,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'PORTA REVISTA ACRIMET 276.6',
      description: 'porta revista',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 2,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Kangaro 26/6 x 1000',
      description: 'broche gancho abrochadora',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 13,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Toner Alternativo HP | CE255X Negro',
      description: 'toner 255',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Binder Clip Negro 25mm x 12 Uni.',
      description: 'manito clip binder',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 11,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Carpeta Frente Cristal A4',
      description: 'carpeta transparente',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 117,
      minimumStock: 24,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Porta Clip Con Imán',
      description: ' porta clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Sacapuntas Eisen 052 C/Repuesto',
      description: 'sacapuntas',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 20,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cuaderno Maratón A4 T/B C/Esp 80Hjs Cuadric.',
      description: 'cuaderno a4 cuadriculado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 7,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Stick´n Notas Adhesivas Neon 38*51 100hjs x 12u',
      description: 'postit post it post-it',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 127,
      minimumStock: 20,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche 2 Patas Dorados N°10 | 51mm x 100 unidades',
      description: 'broches 2 patas dorado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 3,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Clip Metálico N°2 x 100',
      description: 'clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 24,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo BIC Round Stic Azul',
      description: 'boligrafo bic azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 12,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo BIC Round Stic Negro',
      description: 'lapicera bic boligrafo negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 19,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo UNI-185 0.5 mm Negro',
      description: 'boligrafo lapicera negro negra',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 28,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo UNI-185 0.5 mm Azul',
      description: 'boligrafo birome azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 22,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Chinche Sifap x 50 unidades',
      description: 'chiches',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 1,
      lastModified: Date.now()
      }),  
  new Product({
      title: 'Regla Pizzini Verde Cristal 30cm',
      description: 'regla 30cm',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 27,
      minimumStock: 20,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo UNI Roller 167-UB 0,7mm Rojo',
      description: 'boligrafo birome rojo roja',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'CARBONICOS COXI AZUL/NEGRO X 50',
      description: 'carbonico papel azul negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo UNI Eye Micro UB-150 - 0,5mm Azul',
      description: 'boligrafo birome azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Clip Metálico N°8 x 50',
      description: 'clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 7,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Clip Metálico N° 6 x 50',
      description: 'clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Clip Metálico N°5 x 100',
      description: 'clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 16,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Clip Metálico N°4 x 100',
      description: 'clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 13,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Clip Metálico N°3 x 100',
      description: 'clip',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 18,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Lápiz Mecánico Pizzini 0.7mm',
      description: 'lapiz mecanico',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Carbonico Pelikan Negro x 50',
      description: 'papel carbonico negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Carbonico Pelikan Azul Oficio x 50',
      description: 'papel carbonico azul oficio',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Corrector Lápiz Liquid Paper - Paper Mate 7ml',
      description: 'corrector lapiz liquid paper',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Resaltador Pizzini 1280 azul',
      description: 'resaltador azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Resaltador Pizzini 1280 Amarillo',
      description: 'resaltador amarillo',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 14,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'MARCADOR PIZZINI PERMANENTE P. FINA VERDE',
      description: 'marcador permanente verde',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Pizzini Permanente P. Biselada Azul',
      description: 'marcador permanente azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Perm. Pizzini Pta. Fina 1mm | Azul',
      description: 'marcador permanente azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 3,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Perm. Pizzini Pta. Fina 1mm | Negro',
      description: 'marcador permanente negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Pizzini Permanente Pta. Rda. Negro',
      description: 'marcador permanente negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 64,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Pizzini P/Pizarra Pta. Rda. Verde',
      description: 'marcador pizzarra verde',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 18,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Borrador P/ Pizarra Pizzini',
      description: 'borrador pizarra',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 1,
      minimumStock: 1,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Pizzini P/Pizarra Pta. Rda. Azul',
      description: 'marcado pizarra azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 19,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Marcador Pizzini P/Pizarra Pta. Rda. Negro',
      description: 'marcador pizarra negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 8,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cinta Adhesiva Transparente 12*30',
      description: 'cinta scotch adhesiva',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 19,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Lápiz Faber Castell Negro Graduacion B""',
      description: 'lapiz lapices',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),  
  new Product({
      title: 'Lápiz Staedtler Noris Negro 120 2B',
      description: 'lapiz lapices 2B',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 4,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Lápiz Faber Castell Negro 1205 MAX 2=HB',
      description: 'lapiz lapices negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 12,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bibliorato A4 Lomo 7 | Gris Perla',
      description: 'bibliorato a4',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 14,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cartulina Color x Unidad',
      description: 'cartulina',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 0,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Cuaderno Maratón A4 T/B C/Esp 80hjs Rayado',
      description: 'cuaderno a4 rayado',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 9,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'BOLÍGRAFO BIC CRISTAL NEGRO',
      description: 'birome boligrafo bic negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 37,
      minimumStock: 12,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Broche Kangaro 10 x 1000',
      description: 'broche gancho ganchitos',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 6,
      minimumStock: 0,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo BIC 1mm Azul',
      description: 'birome bic boligrafo azul',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 45,
      minimumStock: 50,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Carpeta "L" P.V.C. Cristal Carta /A4',
      description: 'carpeta pvc a4',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 39,
      minimumStock: 20,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Sacapuntas Consul Metálico 1004 Rect',
      description: 'sacapuntas',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 15,
      minimumStock: 10,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo BIC 1mm Negro',
      description: 'boligrafo birome bic negro negra',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 4,
      minimumStock: 50,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bandeja Pizzini Apilable Negra Oficio',
      description: 'bandeja oficio',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 5,
      minimumStock: 5,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Abre Cartas Maped',
      description: 'abre cartas',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 1,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Bolígrafo Faber Castell Trilux 032 Medium Negro',
      description: 'boligrafo birome negro',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 2,
      minimumStock: 50,
      lastModified: Date.now()
      }),
  new Product({
      title: 'Talonario Recibí" Congreso"',
      description: 'recibi recibo talonario',
      imagePath: 'https://www.freeiconspng.com/uploads/no-image-icon-21.png',
      location: "",
      stock: 4,
      minimumStock: 1,
      lastModified: Date.now()
      })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
    mongoose.disconnect();
}