const data = {
    "modules": [
        {
            "name": "Introducción",
            "classes": [
                { "id": 1, "title": "Presentación del Curso" },
                { "id": 2, "title": "¿Qué es Spring?" },
                { "id": 3, "title": "Instalación del JDK" },
                { "id": 4, "title": "Instalación del IDE" }
            ]
        },
        {
            "name": "Spring MVC",
            "classes": [
                { "id": 1, "title": "¿Qué es MVC?" },
                { "id": 2, "title": "Creación de Proyecto Web con Spring Boot" },
                { "id": 3, "title": "Creación de Vista y Controlador" },
                { "id": 4, "title": "Annotation @RequestMapping" },
                { "id": 5, "title": "El Objeto Model" },
                { "id": 6, "title": "Directivas de Thymeleaf" },
                { "id": 7, "title": "Anotación @ModelAttribute" },
                { "id": 8, "title": "Anotación @RequestParam" },
                { "id": 9, "title": "Anotación @PathVariable" }
            ]
        },
        {
            "name": "Inyección de Dependencias",
            "classes": [
                { "id": 1, "title": "Creación de un Servicio (Acoplado)" },
                { "id": 2, "title": "Desacoplando Servicio" },
                { "id": 3, "title": "Anotación Primary" },
                { "id": 4, "title": "Anotación Qualifier" }
            ]
        },
        {
            "name": "CRUD Películas",
            "classes": [
                { "id": 1, "title": "Introducción" },
                { "id": 2, "title": "Creación de un Nuevo Proyecto" },
                { "id": 3, "title": "Creación de Entidades con Entity" },
                { "id": 4, "title": "Acceso a datos con EntityManager" },
                { "id": 5, "title": "CrudRepository" },
                { "id": 6, "title": "Consola H2" },
                { "id": 7, "title": "Controller Película" },
                { "id": 8, "title": "Maquetando layouts utilizando fragments de Thymeleaf" },
                { "id": 9, "title": "Agregando Bootstrap" },
                { "id": 10, "title": "Creando Form Película" },
                { "id": 11, "title": "Creando Form Película Pt.2" },
                { "id": 12, "title": "Creando Form Película Pt.3" },
                { "id": 13, "title": "Validaciones (Server Side)" },
                { "id": 14, "title": "Agregando Contenedor de Mensajes" },
                { "id": 15, "title": "Creando Listado Películas" },
                { "id": 16, "title": "Subida de Imágenes Frontend Pt.1" },
                { "id": 17, "title": "Subida de Imágenes Backend Pt.2" },
                { "id": 18, "title": "Editar Película" },
                { "id": 19, "title": "Agregando Eliminar" },
                { "id": 20, "title": "Agregando Paginador" }
            ]
        },
        {
            "name": "Despedida",
            "classes": [
                { "id": 1, "title": "Despedida" }
            ]
        }
    ]
};

const renderModules = (data) => {
    const container = document.getElementById("modules");

    data.modules.forEach((module, index) => {
        // Contenedor de módulo
        const moduleDiv = document.createElement("div");
        moduleDiv.className = "mb-4 bg-blue-700 rounded-lg overflow-hidden";

        // Encabezado del módulo
        const moduleHeader = document.createElement("div");
        moduleHeader.className = "px-4 py-2 flex justify-between items-center cursor-pointer bg-blue-900 text-white font-bold";
        moduleHeader.innerHTML = `${module.name} <span>+</span>`;
        moduleDiv.appendChild(moduleHeader);

        // Contenido del módulo
        const moduleContent = document.createElement("div");
        moduleContent.className = "hidden bg-blue-800 px-4 py-2";

        const classList = document.createElement("ul");
        classList.className = "space-y-2";
        module.classes.forEach(cls => {
            const classItem = document.createElement("li");
            classItem.className = "p-2 rounded-lg bg-blue-600 hover:bg-blue-400 cursor-pointer";
            classItem.textContent = `${cls.id}. ${cls.title}`;
            classList.appendChild(classItem);
        });

        moduleContent.appendChild(classList);
        moduleDiv.appendChild(moduleContent);
        container.appendChild(moduleDiv);

        // Evento para expandir/contraer
        moduleHeader.addEventListener("click", () => {
            const isVisible = !moduleContent.classList.contains("hidden");
            moduleContent.classList.toggle("hidden", isVisible);
            moduleHeader.querySelector("span").textContent = isVisible ? "+" : "-";
        });
    });
};

// Renderizar módulos al cargar la página
document.addEventListener("DOMContentLoaded", () => renderModules(data));