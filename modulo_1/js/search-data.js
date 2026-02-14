const SEARCH_INDEX_DATA = [
  {
    "number": 1,
    "title": "Machine Learning",
    "description": "Disciplina dentro de la IA que permite a los sistemas aprender patrones a partir de datos sin ser pr...",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 2,
    "title": "Deep Learning",
    "description": "Subcampo del Machine Learning basado en redes neuronales profundas con múltiples capas que permiten ...",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_profundo",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 3,
    "title": "Dataset",
    "description": "Conjunto estructurado de datos utilizado para entrenar o evaluar un modelo de IA....",
    "url": "https://es.wikipedia.org/wiki/Conjunto_de_datos",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 4,
    "title": "Modelo (Model)",
    "description": "Función matemática entrenada que transforma una entrada en una salida (por ejemplo, texto en otro id...",
    "url": "https://es.wikipedia.org/wiki/Modelo_estad%C3%ADstico",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 5,
    "title": "Parámetro (Parameter)",
    "description": "Valor interno ajustable dentro de un modelo que se modifica durante el entrenamiento....",
    "url": "https://es.wikipedia.org/wiki/Par%C3%A1metro_estad%C3%ADstico",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 6,
    "title": "Entrenamiento (Training)",
    "description": "Proceso mediante el cual un modelo aprende ajustando sus parámetros para minimizar el error....",
    "url": "https://es.wikipedia.org/wiki/Entrenamiento_(aprendizaje_autom%C3%A1tico)",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 7,
    "title": "Aprendizaje Supervisado (Supervised Learning)",
    "description": "Tipo de aprendizaje donde el modelo se entrena con datos etiquetados (entrada + resultado correcto)....",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_supervisado",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 8,
    "title": "Aprendizaje No Supervisado (Unsupervised Learning)",
    "description": "Aprendizaje en el que el modelo identifica patrones sin datos etiquetados....",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_no_supervisado",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 9,
    "title": "Regresión Lineal (Linear Regression)",
    "description": "Algoritmo estadístico que modela la relación lineal entre variables para hacer predicciones....",
    "url": "https://es.wikipedia.org/wiki/Regresi%C3%B3n_lineal",
    "page": "fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 10,
    "title": "Árbol de Decisión (Decision Tree)",
    "description": "Modelo predictivo que toma decisiones mediante una estructura jerárquica en forma de árbol....",
    "url": "https://es.wikipedia.org/wiki/%C3%81rbol_de_decisi%C3%B3n",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 11,
    "title": "Redes Neuronales (Neural Networks)",
    "description": "Modelos inspirados en el cerebro humano formados por capas de nodos interconectados....",
    "url": "https://es.wikipedia.org/wiki/Red_neuronal_artificial",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 12,
    "title": "Clustering",
    "description": "Técnica de aprendizaje no supervisado que agrupa elementos similares en categorías....",
    "url": "https://es.wikipedia.org/wiki/Agrupamiento",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 13,
    "title": "PCA (Principal Component Analysis)",
    "description": "Técnica de reducción de dimensionalidad que simplifica datos manteniendo la mayor información posibl...",
    "url": "https://es.wikipedia.org/wiki/An%C3%A1lisis_de_componentes_principales",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 14,
    "title": "Transformers",
    "description": "Arquitectura de redes neuronales utilizada en modelos generativos modernos como ChatGPT....",
    "url": "https://es.wikipedia.org/wiki/Transformador_(modelo_de_aprendizaje_autom%C3%A1tico)",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 15,
    "title": "Espacio Latente (Latent Space)",
    "description": "Representación interna comprimida de los datos dentro de un modelo generativo....",
    "url": "https://en.wikipedia.org/wiki/Latent_space",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 16,
    "title": "Sampling (Muestreo)",
    "description": "Proceso de generación de nuevas salidas a partir de un modelo entrenado....",
    "url": "https://es.wikipedia.org/wiki/Muestreo_estad%C3%ADstico",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 17,
    "title": "Fine-tuning",
    "description": "Proceso de reajustar un modelo previamente entrenado para una tarea específica....",
    "url": "https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 18,
    "title": "ChatGPT",
    "description": "Modelo de lenguaje generativo desarrollado por OpenAI....",
    "url": "https://es.wikipedia.org/wiki/ChatGPT",
    "page": "modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 19,
    "title": "Git",
    "description": "Hub CopilotAsistente de programación basado en IA desarrollado por GitHub en colaboración con OpenAI...",
    "url": "https://es.wikipedia.org/wiki/GitHub_Copilot",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 20,
    "title": "Midjourney",
    "description": "Herramienta de generación de imágenes mediante IA generativa....",
    "url": "https://es.wikipedia.org/wiki/Midjourney",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 21,
    "title": "Code",
    "description": "WhispererAsistente de programación basado en IA desarrollado por Amazon....",
    "url": "https://aws.amazon.com/es/codewhisperer/",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 22,
    "title": "Boilerplate",
    "description": "Código repetitivo o plantilla base reutilizable en múltiples proyectos para acelerar el desarrollo....",
    "url": "https://es.wikipedia.org/wiki/Boilerplate_code",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 23,
    "title": "Refactorización (Refactoring)",
    "description": "Proceso de reestructurar código existente sin modificar su comportamiento externo, mejorando su legi...",
    "url": "https://es.wikipedia.org/wiki/Refactorizaci%C3%B3n",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 24,
    "title": "Testing",
    "description": "Proceso de verificación y validación del funcionamiento del software....",
    "url": "https://es.wikipedia.org/wiki/Prueba_de_software",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 25,
    "title": "Testing Unitario (Unit Testing)",
    "description": "Pruebas que validan el funcionamiento de una unidad individual de código....",
    "url": "https://es.wikipedia.org/wiki/Prueba_unitaria",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 26,
    "title": "Testing de Integración (Integration Testing)",
    "description": "Pruebas que verifican la interacción entre diferentes módulos del sistema....",
    "url": "https://es.wikipedia.org/wiki/Pruebas_de_integraci%C3%B3n",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 27,
    "title": "Debugging",
    "description": "Proceso de detección y corrección de errores en el código....",
    "url": "https://es.wikipedia.org/wiki/Depuraci%C3%B3n",
    "page": "herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 28,
    "title": "CI/CD (Continuous Integration / Continuous Deployment)",
    "description": "Metodología que automatiza la integración, pruebas y despliegue continuo del software....",
    "url": "https://es.wikipedia.org/wiki/Integraci%C3%B3n_continua",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 29,
    "title": "Pipeline",
    "description": "Flujo automatizado de procesos dentro del ciclo de desarrollo del software....",
    "url": "https://en.wikipedia.org/wiki/Pipeline_(software)",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 30,
    "title": "Pull Request (PR)",
    "description": "Solicitud para revisar y fusionar cambios de código en un repositorio....",
    "url": "https://en.wikipedia.org/wiki/Pull_request",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 31,
    "title": "Merge",
    "description": "Acción de integrar cambios de una rama a otra en un sistema de control de versiones....",
    "url": "https://en.wikipedia.org/wiki/Merge_(version_control)",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 32,
    "title": "CodeQL",
    "description": "Herramienta de análisis estático desarrollada por GitHub para detectar vulnerabilidades en el código...",
    "url": "https://codeql.github.com/",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 33,
    "title": "Sonar",
    "description": "QubePlataforma de análisis estático para evaluar la calidad y seguridad del código fuente....",
    "url": "https://www.sonarsource.com/products/sonarqube/",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 34,
    "title": "SAST (Static Application Security Testing)",
    "description": "Análisis estático de seguridad aplicado al código fuente sin ejecutarlo....",
    "url": "https://en.wikipedia.org/wiki/Static_application_security_testing",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 35,
    "title": "SQL InjectionVulnerabilidad que permite ejecutar consultas maliciosas en bases de datos mediante entrada manipulada.",
    "description": "SQL InjectionVulnerabilidad que permite ejecutar consultas maliciosas en bases de datos mediante ent...",
    "url": "https://es.wikipedia.org/wiki/Inyecci%C3%B3n_SQL",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 36,
    "title": "XSS (Cross-Site Scripting)",
    "description": "Ataque que inyecta scripts maliciosos en páginas web vistas por otros usuarios....",
    "url": "https://es.wikipedia.org/wiki/Cross-site_scripting",
    "page": "desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 37,
    "title": "Backend",
    "description": "Parte del software que gestiona la lógica interna y el acceso a bases de datos....",
    "url": "https://es.wikipedia.org/wiki/Front_end_y_back_end",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 38,
    "title": "Frontend",
    "description": "Parte visual del software con la que interactúa el usuario....",
    "url": "https://es.wikipedia.org/wiki/Front_end_y_back_end",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 39,
    "title": "Async/Await",
    "description": "Patrón moderno para manejar operaciones asíncronas de forma más legible....",
    "url": "https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 40,
    "title": "Callback",
    "description": "Función que se ejecuta después de que otra función haya terminado su ejecución....",
    "url": "https://es.wikipedia.org/wiki/Callback",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 41,
    "title": "UML (Unified Modeling Language)",
    "description": "Lenguaje estándar para modelar sistemas de software mediante diagramas estructurados....",
    "url": "https://es.wikipedia.org/wiki/Lenguaje_unificado_de_modelado",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 42,
    "title": "Embeddings",
    "description": "Representaciones numéricas (vectores) de texto o código que permiten medir similitud semántica entre...",
    "url": "https://en.wikipedia.org/wiki/Word_embedding",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 43,
    "title": "Token",
    "description": "Unidad mínima de texto que procesa un modelo (puede ser palabra, subpalabra o símbolo)....",
    "url": "https://en.wikipedia.org/wiki/Lexical_analysis#Token",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 44,
    "title": "Fill-in-the-Middle (FIM)",
    "description": "Técnica que permite completar código en medio de un bloque, no solo al final....",
    "url": "https://github.blog/ai-and-ml/github-copilot/how-github-copilot-is-getting-better-at-understanding-your-code/",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 45,
    "title": "Inline Suggestions",
    "description": "Sugerencias automáticas generadas directamente mientras el programador escribe en el editor....",
    "url": "https://docs.github.com/en/copilot",
    "page": "seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 46,
    "title": "Prompt",
    "description": "Instrucción o texto que se proporciona a un modelo de IA para generar una respuesta....",
    "url": "https://es.wikipedia.org/wiki/Prompt_engineering",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 47,
    "title": "IDE (Integrated Development Environment)",
    "description": "Entorno de desarrollo integrado que incluye editor, compilador, depurador y otras herramientas....",
    "url": "https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 48,
    "title": "AWS (Amazon Web Services)",
    "description": "Plataforma de servicios en la nube ofrecida por Amazon....",
    "url": "https://es.wikipedia.org/wiki/Amazon_Web_Services",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 49,
    "title": "AWS ToolkitExtensión para IDEs que permite interactuar con servicios de AWS desde el entorno de desarrollo.",
    "description": "AWS ToolkitExtensión para IDEs que permite interactuar con servicios de AWS desde el entorno de desa...",
    "url": "https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 50,
    "title": "AWS LambdaServicio serverless que permite ejecutar código sin administrar servidores.",
    "description": "AWS LambdaServicio serverless que permite ejecutar código sin administrar servidores....",
    "url": "https://es.wikipedia.org/wiki/AWS_Lambda",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 51,
    "title": "API GatewayServicio que permite crear, publicar y gestionar APIs.",
    "description": "API GatewayServicio que permite crear, publicar y gestionar APIs....",
    "url": "https://docs.aws.amazon.com/apigateway/",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 52,
    "title": "DynamoDB",
    "description": "Base de datos NoSQL gestionada por AWS....",
    "url": "https://es.wikipedia.org/wiki/Amazon_DynamoDB",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 53,
    "title": "S3 (Simple Storage Service)",
    "description": "Servicio de almacenamiento en la nube de AWS....",
    "url": "https://es.wikipedia.org/wiki/Amazon_S3",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 54,
    "title": "IAM (Identity and Access Management)",
    "description": "Servicio de AWS para gestionar identidades y permisos....",
    "url": "https://docs.aws.amazon.com/IAM/",
    "page": "conceptos.html",
    "pageName": "Conceptos Técnicos Avanzados",
    "icon": "⚙️"
  },
  {
    "number": 55,
    "title": "SDK (Software Development Kit)",
    "description": "Conjunto de herramientas y librerías para desarrollar aplicaciones sobre una plataforma....",
    "url": "https://es.wikipedia.org/wiki/Kit_de_desarrollo_de_software",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 56,
    "title": "CRUD (Create, Read, Update, Delete)",
    "description": "Operaciones básicas en bases de datos....",
    "url": "https://es.wikipedia.org/wiki/CRUD",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 57,
    "title": "Boto3SDK oficial de Python para interactuar con servicios de AWS.",
    "description": "Boto3SDK oficial de Python para interactuar con servicios de AWS....",
    "url": "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 58,
    "title": "Similarity Detector",
    "description": "Sistema que compara código generado con código público para detectar similitudes y posibles conflict...",
    "url": "https://docs.aws.amazon.com/codewhisperer/latest/userguide/security.html",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 59,
    "title": "Open Source",
    "description": "Software cuyo código fuente es público y puede ser modificado y redistribuido....",
    "url": "https://es.wikipedia.org/wiki/C%C3%B3digo_abierto",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 60,
    "title": "Pair Programming",
    "description": "Técnica de programación en la que dos desarrolladores trabajan juntos en el mismo código....",
    "url": "https://es.wikipedia.org/wiki/Programaci%C3%B3n_en_pareja",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 61,
    "title": "Tabnine",
    "description": "Asistente de autocompletado basado en IA con opción de modelo local....",
    "url": "https://www.tabnine.com/",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 62,
    "title": "Codeium",
    "description": "Asistente de programación gratuito basado en IA para múltiples lenguajes....",
    "url": "https://www.codeium.com/",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 63,
    "title": "Cursor IDEEntorno de desarrollo con IA integrada como núcleo del sistema.",
    "description": "Cursor IDEEntorno de desarrollo con IA integrada como núcleo del sistema....",
    "url": "https://cursor.sh/",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  },
  {
    "number": 64,
    "title": "Jet",
    "description": "Brains AI AssistantAsistente de IA integrado en IDEs de JetBrains....",
    "url": "https://www.jetbrains.com/ai/",
    "page": "servicios.html",
    "pageName": "Servicios Cloud y Asistentes",
    "icon": "☁️"
  }
];
