# Scraping AliExpress

Este proyecto es una herramienta de scraping que permite extraer datos de productos desde la plataforma de AliExpress. Utiliza Playwright para navegar y obtener información de productos de manera eficiente y rápida.

## Características

<!--- **Extracción de datos**: Extrae información relevante de productos, incluyendo título, precio, imágenes, y especificaciones.-->
- **Soporte para múltiples páginas**: Navega a través de varias páginas de productos.
- **Configuración sencilla**: Puedes personalizar las opciones de scraping fácilmente.

## Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Playwright](https://playwright.dev/) (instalado automáticamente con el proyecto)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/dvydll/scraping-aliexpress.git
cd scraping-aliexpress
```

2. Instala las dependencias:

```bash
npm install
```

## Uso

Para ejecutar el scraper, utiliza el siguiente comando:

```bash
node index.js <url_del_producto>
```

Reemplaza `<url_del_producto>` con la URL del producto que deseas extraer. Por ejemplo: `https://www.aliexpress.com/item/1005007912969099.html`

> [!warning]
> ¡El argumento `<url_del_producto>` es obligatorio!

### Ejemplo

```bash
node index.js https://es.aliexpress.com/item/1005007912969099.html?srcSns=...
```

Esto generará un archivo JSON con la información del producto extraído.

```bash
{
  "https://es.aliexpress.com/item/1005007912969099.html?srcSns=...": {
    "Uso recomendado": "Aprendizaje,USO COMERCIAL,Entretenimiento diario",
    "Teclados": "TOUCHPAD,Teclado numérico",
    "Capacidad de la batería (mAh)": "5000mAh",
    "Red comunicación": "Compatible con Bluetooth,Wi-Fi",
    "Pantalla táctil": "no",
    "Almacenamiento expandible": "YES",
    "Interfaz del disco duro": "M.2",
    "Tipo de memoria": "DDR3",
    "Potencia de diseño térmico": "5W",
    "Marca de gráficos": "İntel",
    "Tipo gráfico": "Integrado",
    "Frecuencia Turbo Max": "2.7Ghz",
    "Frecuencia Base (GHz)4": "1.50GHz",
    "Número de núcleos": "2",
    "Vida útil de la batería": "4 - 6 horas",
    "El idioma del teclado": "Inglés",
    "Teclado retroiluminado tipo": "no",
    "Interfaz inalámbrica": "Wi-Fi 5 (802.11ac)",
    "Marca/Modelo de la CPU": "Intel Core i7-8500Y",
    "Peso (incluyendo la batería)": "1,5Kg-1,8Kg",
    "Tasa de refresco de la pantalla": "60Hz",
    "Capacidad de memoria de vídeo": "12 GB",
    "Dimensiones (an. x al. x pr.)": "34cm*22.5cm*2.5cm",
    "Material": "TPU + plástico",
    "RAM": "12 GB",
    "Tipo de Panel": "IPS",
    "Resolución de la pantalla": "1920x1080",
    "Sistema operativo": "windows 11",
    "Característica": "bluetooth,Camera,Lector de huella",
    "Grosor": "≥ 20mm",
    "Paquete": "Sí",
    "Capacidad del disco duro": "1 TB",
    "Puerto": "Juego de conector de audio de 3,5 mm,2 x USB 3.0,Mini Compatible con HDMI",
    "Relación de la pantalla": "16:9",
    "Tipo de unidad óptica": "Ninguno",
    "Tamaño de pantalla": "15,6 pulgadas",
    "Tipo de disco duro": "SSD",
    "Modelo de tarjeta gráfica": "Intel UHD gráficos",
    "Tipo": "Ordenador portátil",
    "Origen": "CN(Origen)"
  }
}
```

> [!note]
> Tambien puedes usar el script de arranque del `package.json` del siguiente modo:
> 
> ```bash
> npm run start https://www.aliexpress.com/item/1005007912969099.html
> ```
> 
> Por defecto la salida del script esta redirigida (de forma acumulativa) a un archivo `out/results.json`.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna mejora o sugerencia, no dudes en abrir un issue o enviar un pull request.

1. Haz un fork del proyecto.
2. Crea tu feature branch (`git checkout -b feature/NombreDeTuFeature`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agregando una nueva feature'`).
4. Haz push a la branch (`git push origin feature/NombreDeTuFeature`).
5. Abre un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

## Contacto

Para consultas, puedes dejarme un mensaje en mi github [@dvydll](https://github.com/dvydll)
